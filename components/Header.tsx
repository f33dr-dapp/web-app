import { Heading, HStack } from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'
import Link from 'next/link'

import AccountMenu from './AccountMenu'
import ConnectButton from './ConnectButton'
import Logo from './Logo'

export default function Header() {
  const { account } = useEthers()

  return (
    <>
      <HStack
        height={20}
        width="full"
        backgroundColor="blue.600"
        justifyContent="space-between">
        <HStack px={4}>
          <Heading size="lg" color="white">
            <Link passHref href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </Heading>
        </HStack>
        <HStack spacing={4}>
          {account ? <AccountMenu account={account} /> : <ConnectButton />}
        </HStack>
      </HStack>
    </>
  )
}
