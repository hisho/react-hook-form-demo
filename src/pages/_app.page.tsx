import type { AppPropsWithLayout } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <ChakraProvider>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </ChakraProvider>
  )
}

export default App
