import { Box } from '@chakra-ui/react'

import ConnectButton from '../Account/ConnectButton'
import AlertContainer from './AlertContainer'

export default function ConnectAlert() {
  return (
    <AlertContainer title="Not connected" status="warning">
      Please connect to Metamask to access this area
      <Box mt={4}>
        <ConnectButton />
      </Box>
    </AlertContainer>
  )
}
