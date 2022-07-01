import { Button } from '@chakra-ui/react'
import { Mumbai, useEthers } from '@usedapp/core'

import AlertContainer from './AlertContainer'

export default function NetworkAlert() {
  const ethers = useEthers()
  return (
    <AlertContainer status="error" title="Invalid Network">
      Please connect to the correct network
      {ethers.library?.connection.url === 'metamask' ? (
        <Button
          mt={4}
          onClick={async () => {
            try {
              await window.ethereum.send('wallet_switchEthereumChain', [
                { chainId: `0x${Mumbai.chainId.toString(16)}` },
              ])
            } catch (e: any) {
              if (e.code === 4902) {
                await window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [
                    {
                      chainId: `0x${Mumbai.chainId.toString(16)}`,
                      chainName: 'Polygon Testnet',
                      rpcUrls: ['https://matic-mumbai.chainstacklabs.com'],
                      nativeCurrency: {
                        name: 'MATIC',
                        symbol: 'MATIC',
                        decimals: 18,
                      },
                      blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
                    },
                  ],
                })
              }
            }
          }}>
          Switch to Poligon Mumbai
        </Button>
      ) : null}
    </AlertContainer>
  )
}
