import { VStack } from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'

import NetworkAlert from '../Alerts/NetworkAlert'
import Footer from './Footer'
import Header from './Header'

export default function Layout(props: { children: any }) {
  const ethers = useEthers()

  return (
    <VStack h="full" spacing={0} height="100vh">
      <Header />
      <VStack width="full" overflowY="auto" flex={1} spacing={0} padding={0}>
        {!ethers.chainId ? <NetworkAlert /> : props.children}
        <Footer />
      </VStack>
    </VStack>
  )
}
