import { InputControl } from '@src/component/ui/Form/InputControl/InputControl'
import { useFormContext } from '@src/pages/form-context/FormProvider'
import { TextareaControl } from '@src/component/ui/Form/TextareaControl/TextareaControl'

export const Form = () => {
  const { control } = useFormContext()

  return (
    <>
      <InputControl control={control} name={'name'} />
      <InputControl control={control} name={'email'} />
      <TextareaControl control={control} name={'text'} />
    </>
  )
}
