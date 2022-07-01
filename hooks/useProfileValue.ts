import { BigNumber } from 'ethers'

import { useProfileCall } from './contracts/useProfile'

export default function useProfileValue(account: string) {
  const { value: profileValue, error } = useProfileCall('getProfile', [account])

  if (!profileValue) {
    return { error }
  }

  const [name, username, imageUrl, bio, isNft, nftContract, nftTokenId] =
    profileValue[0] as [
      string,
      string,
      string,
      string,
      boolean,
      string,
      BigNumber,
    ]

  return {
    value: { name, username, imageUrl, bio, isNft, nftContract, nftTokenId },
    error,
  }
}
