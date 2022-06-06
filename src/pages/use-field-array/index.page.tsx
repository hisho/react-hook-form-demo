import type { NextPageWithLayout } from 'next'
import { useForm } from '@src/hooks/useForm'
import { Box, Button } from '@chakra-ui/react'
import { InputControl } from '@src/component/ui/Form/InputControl/InputControl'
import { FieldArray } from '@src/component/functional/FieldArray/FieldArray'

type Input = {
  questions: {
    name: string
    description: string
    answers: {
      answer: string
      isCorrect: boolean
    }[]
  }[]
}

const Home: NextPageWithLayout = () => {
  const { control } = useForm<Input>({
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

  return (
    <Box>
      <FieldArray name={'questions'} control={control}>
        {({ fields, append, remove }) => (
          <>
            {fields.map(({ id }, index) => (
              <Box key={id}>
                <InputControl
                  control={control}
                  name={`questions.${index}.name`}
                />
                <InputControl
                  control={control}
                  name={`questions.${index}.description`}
                />
                <FieldArray
                  name={`questions.${index}.answers`}
                  control={control}
                >
                  {({ fields }) =>
                    fields.map(({ id, ...field }) => (
                      <Box key={id}>{JSON.stringify({ ...field })}</Box>
                    ))
                  }
                </FieldArray>
                <Button onClick={() => remove(index)}>削除</Button>
              </Box>
            ))}
            <Button
              onClick={() => {
                append({
                  name: '',
                  description: '',
                  answers: [
                    {
                      answer: '回答1',
                      isCorrect: false,
                    },
                    {
                      answer: '回答2',
                      isCorrect: false,
                    },
                  ],
                })
              }}
            >
              追加
            </Button>
          </>
        )}
      </FieldArray>
    </Box>
  )
}

Home.getLayout = (page) => {
  return <>{page}</>
}

export default Home
