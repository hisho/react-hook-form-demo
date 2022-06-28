import type { NextPageWithLayout } from 'next'
import { useForm } from '@src/hooks/useForm'
import { Box, Button, Container } from '@chakra-ui/react'
import { InputControl } from '@src/component/ui/Form/InputControl/InputControl'
import { FormProvider, useFieldArray, useFormContext } from 'react-hook-form'
import { ReactElement } from 'react'
import { CheckboxControl } from '@src/component/ui/Form/CheckboxControl/CheckboxControl'

type QuestionsInput = {
  questions: {
    name: string
    description: string
    answers: {
      answer: string
      isCorrect: boolean
    }[]
  }[]
}

const useQuestionsFormContext = () => useFormContext<QuestionsInput>()

type QuestionsFormProviderProps = {
  children: ReactElement
}

const QuestionsFormProvider = ({ children }: QuestionsFormProviderProps) => {
  const form = useForm<QuestionsInput>({
    defaultValues: {
      questions: [
        {
          name: '最初の問題',
          description: 'これは最初の問題です',
          answers: [
            {
              answer: '回答1',
              isCorrect: true,
            },
          ],
        },
      ],
    },
  })
  return <FormProvider {...form}>{children}</FormProvider>
}

const QuestionsFieldArray = () => {
  const { control } = useQuestionsFormContext()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questions',
  })

  const onAppendQuestion = () => {
    append({
      name: '',
      description: '',
      answers: [
        {
          answer: '',
          isCorrect: false,
        },
      ],
    })
  }

  return (
    <>
      <Box>
        {fields.map(({ id }, index) => (
          <Box key={id}>
            <InputControl
              placeholder={'問題'}
              control={control}
              name={`questions.${index}.name`}
            />
            <InputControl
              placeholder={'問題の説明'}
              control={control}
              name={`questions.${index}.description`}
            />
            <AnswersFieldArray index={index} />
            <Button onClick={() => remove(index)}>問題を削除</Button>
          </Box>
        ))}
      </Box>
      <Button onClick={onAppendQuestion}>問題を追加</Button>
    </>
  )
}

const AnswersFieldArray = ({ index }: { index: number }) => {
  const { control } = useQuestionsFormContext()

  const { fields, append, remove } = useFieldArray({
    control,
    name: `questions.${index}.answers`,
  })

  const onAppendQuestion = () => {
    append({
      answer: '',
      isCorrect: false,
    })
  }

  return (
    <>
      <Box>
        {fields.map(({ id, isCorrect }, answerIndex) => (
          <Box key={id}>
            <InputControl
              placeholder={'問題の回答'}
              control={control}
              name={`questions.${index}.answers.${answerIndex}.answer`}
            />
            <CheckboxControl
              defaultChecked={isCorrect}
              control={control}
              name={`questions.${index}.answers.${answerIndex}.isCorrect`}
            >
              問題の説明
            </CheckboxControl>
            <Button onClick={() => remove(answerIndex)}>回答を削除</Button>
          </Box>
        ))}
      </Box>
      <Button onClick={onAppendQuestion}>回答を追加</Button>
    </>
  )
}

const Home: NextPageWithLayout = () => {
  const { handleSubmit } = useQuestionsFormContext()
  const onSubmit = (data: QuestionsInput) => {
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <Container>
      <Box>
        <QuestionsFieldArray />
      </Box>
      <Button
        onClick={handleSubmit(onSubmit)}
        display={'block'}
        w={'full'}
        maxW={300}
        mx={'auto'}
      >
        送信
      </Button>
    </Container>
  )
}

Home.getLayout = (page) => {
  return <QuestionsFormProvider>{page}</QuestionsFormProvider>
}

export default Home
