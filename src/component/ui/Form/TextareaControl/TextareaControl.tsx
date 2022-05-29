import { RHFControllerProps } from '@src/component/ui/Form/types'
import { FieldValues, useController } from 'react-hook-form'
import { Textarea, TextareaProps } from '@chakra-ui/react'

type TextareaControlProps<T extends FieldValues> = RHFControllerProps<
  T,
  TextareaProps
>

/**
 * chakraのTextareaとReact Hook Formを連携したComponent
 * @see https://chakra-ui.com/docs/components/form/textarea
 */
export const TextareaControl = <T extends FieldValues>({
  control,
  name,
  onChange,
  ...props
}: TextareaControlProps<T>) => {
  const {
    field: { onChange: _onChange, ...field },
  } = useController<T>({ control, name })
  return (
    <Textarea
      {...props}
      {...field}
      onChange={(e) => {
        onChange?.(e)
        _onChange(e)
      }}
    />
  )
}
