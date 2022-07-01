import { CircularProgress, HStack } from '@chakra-ui/react'

export default function Loader() {
  return (
    <HStack p={4} justifyContent="center">
      <CircularProgress isIndeterminate />
    </HStack>
  )
}
