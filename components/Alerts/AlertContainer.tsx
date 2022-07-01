import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertProps,
  AlertTitle,
  Container,
} from '@chakra-ui/react'

export default function AlertContainer(props: {
  title: string
  children?: any
  status?: AlertProps['status']
}) {
  return (
    <Container maxW="container.xl" paddingY={10}>
      <Alert
        status={props.status}
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        minHeight="200px">
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          {props.title}
        </AlertTitle>
        <AlertDescription maxWidth="sm">{props.children}</AlertDescription>
      </Alert>
    </Container>
  )
}
