import { Button } from '@chakra-ui/react'
import { useForm } from 'formact'

type Props = React.ComponentProps<typeof Button> & {
  disabledInvalid?: boolean
}

export default function SubmitButton(props: Props) {
  const { valid, submit } = useForm()
  const { disabledInvalid, ...other } = props

  const onSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    submit()
    props.onClick && props.onClick(e)
  }

  const disabled =
    (disabledInvalid && !valid) || props.disabled || props.isLoading

  return (
    <Button
      loadingText="Submitting"
      width="100%"
      variant="solid"
      {...other}
      disabled={disabled}
      onClick={onSubmit}
    />
  )
}
