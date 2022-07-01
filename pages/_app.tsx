import { ChakraProvider } from '@chakra-ui/react'
import { DAppProvider } from '@usedapp/core'
import type { AppProps } from 'next/app'

import Layout from '../components/Layout'
import dappConfig from '../config/dappConfig'
import theme from '../config/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DAppProvider config={dappConfig}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DAppProvider>
    </ChakraProvider>
  )
}

export default MyApp
