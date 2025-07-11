'use client'

import { ChakraProvider, createSystem } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'
import theme from '../../theme'

const system = createSystem(theme)

export function Provider(props) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider 
        forcedTheme="light"
        enableSystem={false}
        defaultTheme="light"
        {...props} 
      />
    </ChakraProvider>
  )
}
