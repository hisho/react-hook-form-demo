import {
  FormProvider as RHFFormProvider,
  useForm,
  useFormContext as useRHFFormContext,
} from 'react-hook-form'
import { ReactNode } from 'react'

export type Input = {
  name: string
  email: string
  text: string
}

export const useFormContext = () => useRHFFormContext<Input>()

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const form = useForm<Input>({
    defaultValues: {
      name: '',
      email: '',
      text: '',
    },
  })
  return <RHFFormProvider {...form}>{children}</RHFFormProvider>
}
