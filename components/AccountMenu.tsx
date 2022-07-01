import {
  Box,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'
import { useRouter } from 'next/router'

import AccountIcon from './AccountIcon'
import AccountName from './AccountName'
import F33DBalance from './F33DBalance'

export default function AccountMenu({ account }: { account: string }) {
  const { deactivate } = useEthers()
  const router = useRouter()

  const disconnect = () => {
    localStorage.removeItem('walletconnect')
    deactivate()
  }

  return (
    <Menu direction="rtl">
      <MenuButton as={Box} cursor="pointer">
        <HStack spacing={4}>
          <AccountIcon account={account} />
          <Text fontSize="sm" color="white">
            <AccountName account={account} />
          </Text>
          <HStack height={20} backgroundColor="blue.700">
            <Heading size="md" px={6} color="white">
              <F33DBalance account={account} />
            </Heading>
          </HStack>
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => router.push('/profile')}>Profile</MenuItem>
        <MenuItem onClick={disconnect}>Disconnect</MenuItem>
      </MenuList>
    </Menu>
  )
}
