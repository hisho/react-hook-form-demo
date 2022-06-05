import {
  FieldValues,
  useFieldArray,
  UseFieldArrayProps,
  UseFieldArrayReturn,
} from 'react-hook-form'
import { FieldArrayPath } from 'react-hook-form/dist/types/path'
import { ReactNode } from 'react'

export type FieldArrayProps<T extends FieldValues> = Required<{
  name: UseFieldArrayProps<T>['name']
  control: UseFieldArrayProps<T>['control']
}> & {
  children: (
    props: UseFieldArrayReturn<T, FieldArrayPath<T>, string>
  ) => ReactNode
}

export const FieldArray = <T extends FieldValues>({
  control,
  name,
  children,
}: FieldArrayProps<T>) => {
  const fieldArray = useFieldArray({
    control,
    name,
  })

  return <>{children(fieldArray)}</>
}
