import { FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import { FieldProps, useField } from 'formact'

type Props = FieldProps & {
  label?: string
  helperText?: string
  disabled?: boolean
  readOnly?: boolean
} & React.ComponentProps<typeof Input>

export default function TextField(props: Props) {
  const field = useField<string>(props)
  const { label, helperText, disabled, readOnly, required, ...inputProps } =
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
      <Input
        {...inputProps}
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
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            field.submit()
          }
        }}
      />
      <FormHelperText
        textColor={field.showError ? 'red.300' : undefined}
        minH="18px">
        {field.showError || props.helperText
          ? field.errorMessage || props.helperText
          : null}
      </FormHelperText>
    </FormControl>
  )
}
