import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

import { READ_ONLY_URLS } from '../config/dappConfig'

export const walletconnect = new WalletConnectConnector({
  rpc: READ_ONLY_URLS,
  qrcode: true,
})

export default function ConnectButton() {
  const { activate, activateBrowserWallet } = useEthers()

  const connectToWalletConnect = async () => {
    await activate(walletconnect)
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
