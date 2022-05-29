import { RHFControllerProps } from '@src/component/ui/Form/types'
import { FieldValues, useController } from 'react-hook-form'
import { CheckboxGroup, CheckboxGroupProps } from '@chakra-ui/react'

type CheckboxGroupControlProps<T extends FieldValues> = RHFControllerProps<T> &
  Omit<CheckboxGroupProps, 'children'> &
  Required<{ children: CheckboxGroupProps['children'] }>

/**
 * chakraのCheckboxGroupとReact Hook Formを連携したComponent
 * @see https://chakra-ui.com/docs/components/form/checkbox
 */
export const CheckboxGroupControl = <T extends FieldValues>({
  control,
  name,
  onChange,
  children,
  ...props
}: CheckboxGroupControlProps<T>) => {
  const {
    field: { onChange: _onChange, ...field },
  } = useController<T>({ control, name })
  return (
    <CheckboxGroup
      {...props}
      {...field}
      onChange={(e) => {
        onChange?.(e)
        _onChange(e)
      }}
    >
      {children}
    </CheckboxGroup>
  )
}
