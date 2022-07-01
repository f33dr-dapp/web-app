import { useEffect } from 'react'

import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'
import WalletConnectProvider from '@walletconnect/web3-provider'

import { READ_ONLY_URLS } from '../../config/dappConfig'

export default function ConnectButton() {
  const { activate, activateBrowserWallet } = useEthers()

  useEffect(() => {
    const walletConnect = localStorage.getItem('walletconnect')
    if (walletConnect) {
      connectToWalletConnect()
    }
  }, [])

  const connectToWalletConnect = async () => {
    const provider = new WalletConnectProvider({
      rpc: READ_ONLY_URLS,
    })
    await provider.enable()
    await activate(provider)
  }

  return (
    <Box px={4}>
      <Menu direction="rtl">
        <MenuButton as={Button} colorScheme="gray" cursor="pointer">
          Connect
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => activateBrowserWallet()}>Metamask</MenuItem>
          <MenuItem onClick={connectToWalletConnect}>Wallet Connect</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}
