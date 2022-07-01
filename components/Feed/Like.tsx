import { HStack, Icon, Text } from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'
import { BigNumber } from 'ethers'
import { formatUnits } from 'ethers/lib/utils'
import { BsHeart, BsFillHeartFill } from 'react-icons/bs'

import { useItemCall } from '../../hooks/contracts/useItem'
import { useLikesCall } from '../../hooks/contracts/useLikes'
import {
  useMinterCall,
  useMinterFunction,
} from '../../hooks/contracts/useMinter'
import useIsTransactionLoading from '../../hooks/useIsTransactionLoading'

type Props = {
  id: BigNumber
}

export default function FeedLike(props: Props) {
  const { account } = useEthers()

  const { value: likesValue, error: likesError } = useLikesCall(
    'itemLikesCount',
    [props.id],
  )

  const { value: ownerValue, error: ownerError } = useItemCall('ownerOf', [
    props.id,
  ])

  const { value: likePriceValue, error: likePriceError } =
    useMinterCall('likePrice')
  const { value: likeRewardsValue, error: likeRewardsError } = useMinterCall(
    'likeRewardsInTokens',
  )

  const transaction = useMinterFunction('like', '"Like a F33d item"')
  const isLoading = useIsTransactionLoading(transaction.state)

  if (
    !ownerValue ||
    !likesValue ||
    !likePriceValue ||
    !likeRewardsValue ||
    likePriceError ||
    likesError ||
    likeRewardsError ||
    ownerError
  ) {
    return null
  }

  const likes = (likesValue[0] as BigNumber).toNumber()
  const likePrice = likePriceValue[0] as BigNumber
  const likeRewards = likeRewardsValue[0] as BigNumber
  const isOwner = !account || ownerValue[0] === account
  return (
    <HStack
      spacing={4}
      cursor={isOwner ? 'not-allowed' : 'pointer'}
      onClick={
        !account || account === ownerValue[0]
          ? undefined
          : () => {
              transaction.send(props.id, { value: likePrice })
            }
      }>
      <Icon
        aria-label="Like"
        fontSize="18px"
        as={likes > 0 ? BsFillHeartFill : BsHeart}
      />{' '}
      <Text color={isLoading ? 'green' : ''}>
        <>{isLoading ? <>+{formatUnits(likeRewards)} F33D</> : <>{likes}</>}</>
      </Text>
    </HStack>
  )
}
