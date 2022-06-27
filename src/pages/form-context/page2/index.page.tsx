import type { NextPageWithLayout } from 'next'
import { Box, Button, Container, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import {
  FormProvider,
  useFormContext,
} from '@src/pages/form-context/FormProvider'
import { InputControl } from '@src/component/ui/Form/InputControl/InputControl'

const Page: NextPageWithLayout = () => {
  const { watch, control } = useFormContext()

  console.log(watch(), 'page2')
  return (
    <Container>
      <Heading>page 2</Heading>
      <InputControl control={control} name={'email'} />
      <Box>
        <Link href={'/form-context/page1'} passHref>
          <Button as={'a'}>go to 1</Button>
        </Link>
      </Box>
      <Box>
        <Link href={'/form-context/page2'} passHref>
          <Button as={'a'}>go to 2</Button>
        </Link>
      </Box>
      <Box>
        <Link href={'/form-context/page3'} passHref>
          <Button as={'a'}>go to 3</Button>
        </Link>
      </Box>
    </Container>
  )
}

Page.getLayout = (page) => {
  return <FormProvider>{page}</FormProvider>
}

export default Page
