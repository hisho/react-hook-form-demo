import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'

type AppProps = {
  children: ReactNode
}

export const App = ({ children }: AppProps) => {
  return <ChakraProvider>{children}</ChakraProvider>
}
