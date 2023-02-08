import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider
} from '@mantine/core'
import { useState } from 'react'

const config = initialColorScheme => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    (initialColorScheme = 'dark')
  )
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  const theme = {
    globalStyles: theme => ({
      body: {
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
      }
    }),
    colorScheme: colorScheme,
    headings: { fontFamily: 'M PLUS Rounded 1c' }
  }
  return { colorScheme, toggleColorScheme, theme }
}

const MyMantineProvider = ({ children, currentColorScheme }) => {
  const { colorScheme, toggleColorScheme, theme } = config(currentColorScheme)
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default MyMantineProvider
