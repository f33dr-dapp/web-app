import { FormControl, FormLabel, Textarea } from '@chakra-ui/react'
import { FieldProps, useField } from 'formact'

type Props = FieldProps & {
  label?: string
  helperText?: string
  disabled?: boolean
  readOnly?: boolean
} & React.ComponentProps<typeof Textarea>

export default function TextArea(props: Props) {
  const field = useField<string>(props)
  const { label, helperText, disabled, readOnly, required, ...textareaProps } =
    props
  return (
    <FormControl
      isDisabled={disabled}
      isReadOnly={readOnly}
      isInvalid={field.showError}
      color={field.showError ? 'error' : undefined}
      isRequired={required}
      pb={2}>
      {props.label ? (
        <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
      ) : null}
      <Textarea
        {...textareaProps}
        isInvalid={field.showError}
        errorBorderColor="error"
        id={props.name}
        type={props.type}
        value={field.fieldValue || ''}
        onChange={(e) => {
          field.update(e.target.value)
        }}
        onBlur={(e) => {
          props.onBlur?.(e)
          field.onBlur()
        }}
      />
    </FormControl>
  )
}
