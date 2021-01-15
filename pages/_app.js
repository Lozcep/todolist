import '../theme.js'
import { ChakraProvider } from "@chakra-ui/react"
import theme from '../theme.js'




export default function MyApp({ Component, pageProps }) {

  return( 
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )

}