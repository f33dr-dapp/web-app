import { ChakraProvider } from '@chakra-ui/react'
import { DAppProvider } from '@usedapp/core'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import Layout from '../components/Layout/Layout'
import dappConfig from '../config/dappConfig'
import theme from '../config/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <title>F33Dr</title>
        <meta
          name="description"
          content="Like Twitter, but on the Blockchain"
        />
        <meta name="author" content="F33Dr" />
      </Head>
      <DAppProvider config={dappConfig}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DAppProvider>
    </ChakraProvider>
  )
}

export default MyApp
