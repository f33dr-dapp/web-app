import { HStack, Icon, Text } from '@chakra-ui/react'
import { BigNumber } from 'ethers'
import { formatUnits } from 'ethers/lib/utils'
import { AiOutlineRetweet } from 'react-icons/ai'

import { useItemCall } from '../../hooks/contracts/useItem'
import {
  useMinterCall,
  useMinterFunction,
} from '../../hooks/contracts/useMinter'

type Props = {
  id: BigNumber
}

export default function FeedRepost(props: Props) {
  const { value: repostValue, error: repostError } = useItemCall(
    'tokenToChildrenCount',
    [props.id],
  )

  const { value: repostPriceValue, error: repostPriceError } = useMinterCall(
    'repostPriceInTokens',
  )
  const { value: likeRewardsValue, error: likeRewardsError } = useMinterCall(
    'likeRewardsInTokens',
  )

  const transaction = useMinterFunction(
    'post(string,uint256)',
    'Repost F33d item"',
  )

  if (
    !repostValue ||
    !repostPriceValue ||
    !likeRewardsValue ||
    repostPriceError ||
    repostError ||
    likeRewardsError
  ) {
    return null
  }

  const repostCount = (repostValue[0] as BigNumber).toNumber()
  const repostPrice = repostPriceValue[0] as BigNumber

  return (
    <HStack
      cursor="pointer"
      spacing={4}
      onClick={() => {
        transaction.send('Repost', props.id)
      }}>
      <Icon aria-label="Like" fontSize="18px" as={AiOutlineRetweet} />
      <Text>{repostCount}</Text>
      <Text fontSize={10}>({formatUnits(repostPrice, 18)} F33D)</Text>
    </HStack>
  )
}
