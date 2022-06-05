# react-hook-form-demo

## hooksをwrapする
react-hook-formのuseFormをwrapしたhooksを作成する

### メリット🙆‍♂️
- useFormのdefaultValuesが必須では無いため必須にできる
- useFormの仕様が変わった時に変更に強くなる

### デメリット🙅‍♂️
- wrapしていることを周知させる必要がある

```tsx
import {
  FieldValues,
  useForm as _useForm,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form'

type Props<TFieldValues extends FieldValues = FieldValues> =
  UseFormProps<TFieldValues> & Required<{ defaultValues: TFieldValues }>

/**
 * React Hook Formのwrapper
 * defaultValuesがoptionalなのでrequiredにする
 * @see https://zenn.dev/yuitosato/articles/292f13816993ef#1.-useform%E3%82%92%E3%83%A9%E3%83%83%E3%83%97%E3%81%97%E3%81%A6%E3%82%BF%E3%82%A4%E3%83%97%E3%82%BB%E3%83%BC%E3%83%95%E3%81%AB%E3%81%99%E3%82%8B
 * 非同期でdefaultValuesを設定する
 * @see https://github.com/react-hook-form/react-hook-form/issues/2492
 */
export const useForm = <TFieldValues extends FieldValues = FieldValues>(
  props: Props<TFieldValues>
): UseFormReturn<TFieldValues> => {
  return _useForm(props)
}
```

## formの部品をuseControlでwrapする

https://react-hook-form.com/api/usecontroller/controller   
ChakraやMaterial,Mantineなどのlibraryで使用する場合ControllerまたはuseControllを使用する必要があるため予めすべてuseControllを内部的に使用するComponentとしてwrapする

### メリット🙆‍♂️

- registerよりcontrollerの方がサードパーティ製のcomponentで使える
- resetなどが正常に動作する

### デメリット🙅‍♂️

- useControllerを使うため各Componentをwrapする必要がある
- registerにある`valueAsNumber`や`setValueAs`などが使えない

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