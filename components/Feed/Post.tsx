import { Box, Heading, HStack } from '@chakra-ui/react'
import { BigNumber } from 'ethers'
import { formatUnits } from 'ethers/lib/utils'
import Form from 'formact'

import {
  useMinterCall,
  useMinterFunction,
} from '../../hooks/contracts/useMinter'
import { useTokenCall } from '../../hooks/contracts/useToken'
import useIsTransactionLoading from '../../hooks/useIsTransactionLoading'
import AccountIcon from '../AccountIcon'
import AccountName from '../AccountName'
import SubmitButton from '../Form/SubmitButton'
import TextArea from '../Form/TextArea'

export default function Post({ account }: { account: string }) {
  const { value: balanceValue, error: balanceError } = useTokenCall(
    'balanceOf',
    [account],
  )

  const { value: postPriceInTokensValue, error: postPriceInTokensError } =
    useMinterCall('postPriceInTokens')

  const transaction = useMinterFunction('post(string)', '"Post a F33d item"')
  const isLoading = useIsTransactionLoading(transaction.state)

  if (
    !postPriceInTokensValue ||
    !balanceValue ||
    balanceError ||
    postPriceInTokensError
  ) {
    return null
  }

  const balance = balanceValue[0] as BigNumber
  const postPrice = postPriceInTokensValue[0] as BigNumber
  const disabled = balance.lt(postPrice)

  return (
    <Box>
      <HStack pb={4} borderBottomWidth={1} spacing={8} alignItems="flex-start">
        <AccountIcon size={64} account={account} />
        <Box flex={1}>
          <Heading size="sm" mb={4}>
            <AccountName account={account} />
          </Heading>
          <Form<{ content: string }>
            onSubmit={(payload) => {
              if (payload.valid) {
                transaction.send(payload.values.content)
                payload.onFinish(true)
              }
            }}>
            <TextArea
              required
              minHeight={20}
              placeholder="What's on your mind?"
              name="content"
              maxLength={128}
              disabled={disabled || isLoading}
            />
            <SubmitButton
              disabledInvalid
              disabled={disabled || isLoading}
              mb={4}
              isLoading={isLoading}>
              Post ({formatUnits(postPrice)} F33D)
            </SubmitButton>
          </Form>
        </Box>
      </HStack>
    </Box>
  )
}
