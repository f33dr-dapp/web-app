import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import Layout from '../components/Layout/Layout'
import theme from '../config/theme'
import DAppProvider from '../context/DAppProvider'

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
      <DAppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DAppProvider>
    </ChakraProvider>
  )
}

export default MyApp
