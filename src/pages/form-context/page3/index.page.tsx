import type { NextPageWithLayout } from 'next'
import { Box, Button, Container, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { FormProvider } from '@src/pages/form-context/FormProvider'

const Page: NextPageWithLayout = () => {
  return (
    <Container>
      <Heading>page 3</Heading>
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
