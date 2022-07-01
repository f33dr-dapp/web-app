import { Box, Heading, HStack, Skeleton, Text, VStack } from '@chakra-ui/react'
import { BigNumber } from 'ethers'
import moment from 'moment'

import { useItemCall } from '../../hooks/contracts/useItem'
import AccountIcon from '../Account/AccountIcon'
import AccountName from '../Account/AccountName'
import AlertContainer from '../Alerts/AlertContainer'
import FeedLike from './Like'
import FeedRepost from './Repost'

type Props = {
  id: BigNumber
  isLast?: boolean
  isRepost?: boolean
}

export default function FeedItem(props: Props) {
  const { value: metadataValue, error: metadataError } = useItemCall(
    'tokenMetadata',
    [props.id],
  )

  const { value: ownerValue, error: ownerError } = useItemCall('ownerOf', [
    props.id,
  ])

  if (metadataError || ownerError) {
    return (
      <AlertContainer title="Error" status="error">
        {metadataError?.message}
        {ownerError?.message}
      </AlertContainer>
    )
  }

  if (!metadataValue || !ownerValue) {
    return (
      <Box borderBottomWidth="1px" p={4}>
        <Skeleton minHeight={20} />
      </Box>
    )
  }

  const [content, publisher, datetime, parentId] = metadataValue[0] as [
    string,
    string,
    BigNumber,
    BigNumber,
  ]

  const owner = ownerValue[0] as string

  return (
    <Box
      borderBottomWidth={props.isLast ? '0' : '1px'}
      pb={props.isRepost ? 0 : 4}>
      <HStack
        p={4}
        spacing={4}
        justifyContent="flex-start"
        alignItems="flex-start">
        <AccountIcon account={owner} border={0} />
        <VStack
          spacing={4}
          alignItems="flex-start"
          justifyContent="flex-start"
          flex={1}>
          <HStack>
            <Heading size="sm">
              <AccountName account={owner} />
            </Heading>
            <Box>·</Box>
            <Text fontSize={14} opacity={0.7}>
              {moment(datetime.toNumber() * 1000).fromNow()}
            </Text>
          </HStack>
          {owner !== publisher ? (
            <Heading opacity={0.7} size="xs">
              ↖ <AccountName account={publisher} />
            </Heading>
          ) : null}

          <Text fontSize={20} size="md">
            {content}
          </Text>
          {parentId.gt(0) ? (
            <Box borderWidth="1px" width="100%">
              <FeedItem id={parentId} isRepost isLast />
            </Box>
          ) : null}

          <HStack spacing={8}>
            <FeedLike id={props.id} />
            {parentId.eq(0) ? <FeedRepost id={props.id} /> : null}
          </HStack>
        </VStack>
      </HStack>
    </Box>
  )
}
