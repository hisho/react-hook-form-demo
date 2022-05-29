# react-hook-form-demo

## hooksをwrapする
- useFormのdefaultValuesが必須では無いため必須にするwrapperを作る

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