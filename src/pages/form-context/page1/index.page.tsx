import type { NextPageWithLayout } from 'next'
import Link from 'next/link'
import { Box, Button, Container, Heading } from '@chakra-ui/react'
import { Form } from '@src/pages/form-context/Form'
import {
  FormProvider,
  useFormContext,
} from '@src/pages/form-context/FormProvider'

const Page: NextPageWithLayout = () => {
  const { watch } = useFormContext()
  console.log(watch())

  return (
    <Container>
      <Heading>page 1</Heading>
      <Form />
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
