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
