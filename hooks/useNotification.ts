import { useToast, UseToastOptions } from '@chakra-ui/react'

export default function useNotification() {
  const toast = useToast()

  const notify = (
    message: string | Error,
    title: string = 'Success',
    status: UseToastOptions['status'] = 'success',
  ) => {
    const props: UseToastOptions = {
      duration: 9000,
      isClosable: true,
      status,
      title,
    }

    if (typeof message === 'string') {
      return toast({ ...props, description: message })
    }

    toast({
      ...props,
      title: 'Error',
      description: message.message,
      status: 'error',
    })
  }

  return notify
}
