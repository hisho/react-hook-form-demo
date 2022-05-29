import { RHFControllerProps } from '@src/component/ui/Form/types'
import { FieldValues, useController } from 'react-hook-form'
import { RadioGroup, RadioGroupProps } from '@chakra-ui/react'

type RadioGroupControlProps<T extends FieldValues> = RHFControllerProps<
  T,
  RadioGroupProps
>

/**
 * chakraのRadioGroupとReact Hook Formを連携したComponent
 * @see https://chakra-ui.com/docs/components/form/radio
 */
export const RadioGroupControl = <T extends FieldValues>({
  control,
  name,
  onChange,
  children,
  ...props
}: RadioGroupControlProps<T>) => {
  const {
    field: { onChange: _onChange, ...field },
  } = useController<T>({ control, name })
  return (
    <RadioGroup
      {...props}
      {...field}
      onChange={(e) => {
        onChange?.(e)
        _onChange(e)
      }}
    >
      {children}
    </RadioGroup>
  )
}
