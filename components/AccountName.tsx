import { Skeleton } from '@chakra-ui/react'
import { useLookupAddress } from '@usedapp/core'

import useProfileValue from '../hooks/useProfileValue'
import truncateAddress from '../utils/truncateAddress'

function ENS({ account }: { account: string }) {
  const { ens, isLoading } = useLookupAddress(account)

  if (isLoading) {
    return <Skeleton minHeight="40px" minWidth="200px" />
  }

  if (!ens) {
    return <>{truncateAddress(account)}</>
  }

  return <>{ens}</>
}

export default function AccountName({ account }: { account: string }) {
  const { value, error } = useProfileValue(account)

  if (error) {
    return <Skeleton minHeight="40px" minWidth="200px" />
  }

  if (!value) {
    return <Skeleton minHeight="40px" minWidth="200px" />
  }

  const { name, username } = value

  if (!name && !username) {
    return <ENS account={account} />
  }
  if (!name) {
    return <>{username}</>
  }

  return (
    <>
      {name} ({username})
    </>
  )
}
