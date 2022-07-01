import { Container } from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'

import GlobalFeed from '../components/Feed/Global'
import Post from '../components/Feed/Post'

export default function Index() {
  const { account } = useEthers()

  return (
    <Container maxW="container.xl" paddingY={10}>
      {account ? <Post account={account} /> : null}
      <GlobalFeed />
    </Container>
  )
}
