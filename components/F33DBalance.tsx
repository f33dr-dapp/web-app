import { Skeleton } from '@chakra-ui/react'
import { BigNumber } from 'ethers'
import { formatUnits } from 'ethers/lib/utils'

import { useTokenCall } from '../hooks/contracts/useToken'

export default function F33DBalance({ account }: { account: string }) {
  const { value: balanceValue, error: balanceError } = useTokenCall(
    'balanceOf',
    [account],
  )

  if (!balanceValue || balanceError) {
    return <Skeleton minHeight="40px" minWidth="100px" />
  }

  const balance = balanceValue[0] as BigNumber

  return <>{formatUnits(balance)} F33D</>
}
