import { RHFControllerProps } from '@src/component/ui/Form/types'
import { FieldValues, useController } from 'react-hook-form'
import { Input, InputProps } from '@chakra-ui/react'

type InputControlProps<T extends FieldValues> = RHFControllerProps<
  T,
  InputProps
>

/**
 * chakraのInputとReact Hook Formを連携したComponent
 * @see https://chakra-ui.com/docs/components/form/input
 */
export const InputControl = <T extends FieldValues>({
  control,
  name,
  onChange,
  ...props
}: InputControlProps<T>) => {
  const {
    field: { onChange: _onChange, ...field },
  } = useController<T>({ control, name })
  return (
    <Input
      {...props}
      {...field}
      onChange={(e) => {
        onChange?.(e)
        _onChange(e)
      }}
    />
  )
}
