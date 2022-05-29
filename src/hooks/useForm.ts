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
