import { Container } from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'

import ConnectAlert from '../components/Alerts/ConnectAlert'
import ProfileForm from '../components/Profile/ProfileForm'

export default function Index() {
  const { account } = useEthers()

  if (!account) {
    return <ConnectAlert />
  }

  return (
    <Container maxW="container.sm" paddingY={10}>
      <ProfileForm account={account} />
    </Container>
  )
}
