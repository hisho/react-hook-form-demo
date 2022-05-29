import { RHFControllerProps } from '@src/component/ui/Form/types'
import { FieldValues, useController } from 'react-hook-form'
import { Select, SelectProps } from '@chakra-ui/react'

type SelectControlProps<T extends FieldValues> = RHFControllerProps<
  T,
  SelectProps
>

/**
 * chakraのSelectとReact Hook Formを連携したComponent
 * @see https://chakra-ui.com/docs/components/form/select
 */
export const SelectControl = <T extends FieldValues>({
  control,
  name,
  onChange,
  ...props
}: SelectControlProps<T>) => {
  const {
    field: { onChange: _onChange, ...field },
  } = useController<T>({ control, name })
  return (
    <Select
      {...props}
      {...field}
      onChange={(e) => {
        onChange?.(e)
        _onChange(e)
      }}
    />
  )
}
