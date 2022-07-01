import { Badge, HStack } from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'

import config from '../../config/dappConfig'
import { ColorModeSwitcher } from './ColorModeSwitcher'

export default function Footer() {
  const { chainId } = useEthers()

  return (
    <>
      <HStack
        width="full"
        mt={10}
        p={4}
        justifyContent="space-between"
        borderTopWidth={1}>
        {chainId && (
          <Badge>
            {config.networks?.find((n) => n.chainId === chainId)?.chainName}
          </Badge>
        )}
        <ColorModeSwitcher />
      </HStack>
    </>
  )
}
