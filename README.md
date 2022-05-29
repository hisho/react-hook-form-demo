# react-hook-form-demo

## hooksをwrapする

### メリット🙆‍♂️
- useFormのdefaultValuesが必須では無いため必須にできる
- useFormの仕様が変わった時に変更に強くなる

### デメリット🙅‍♂️
- wrapしていることを周知させる必要がある

```tsx
import { useForm } from '@src/hooks/useForm'

export const UseFormExample = () => {
  const form = useForm<{ title: string }>({
    defaultValues: {
      title: '',
    },
  })
  return <></>
}

```

## htmlをuseControlでwrapする

### メリット🙆‍♂️
- controllerの方がwrapされたComponentで使える
- resetなどが正常に動作するため

### デメリット🙅‍♂️
- useControllerでwrapし直す必要がある
- valueAsが使えない

```tsx
import { FieldValues, UseControllerProps } from 'react-hook-form'

/**
 * React Hook FormのuseControllerの型
 * controlとnameを必須に変更
 */
export type RHFControllerProps<
  T extends FieldValues,
  K extends { name?: any } = {}
> = Required<{
  control: UseControllerProps<T>['control']
  name: UseControllerProps<T>['name']
}> &
  Omit<UseControllerProps<T>, 'control' | 'name'> &
  Omit<K, 'name'>
```

```tsx
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
```