import { FieldValues, useController } from 'react-hook-form'
import { RHFControllerProps } from '@src/component/ui/Form/types'
import { Checkbox, CheckboxProps } from '@chakra-ui/react'

type CheckboxControlProps<T extends FieldValues> = RHFControllerProps<
  T,
  CheckboxProps
>

/**
 * chakraのInputとReact Hook Formを連携したComponent
 * @see https://chakra-ui.com/docs/components/form/input
 */
export const CheckboxControl = <T extends FieldValues>({
  control,
  name,
  onChange,
  ...props
}: CheckboxControlProps<T>) => {
  const {
    field: { onChange: _onChange, ...field },
  } = useController<T>({ control, name })
  return (
    <Checkbox
      {...props}
      {...field}
      onChange={(e) => {
        onChange?.(e)
        _onChange(e)
      }}
    />
  )
}
