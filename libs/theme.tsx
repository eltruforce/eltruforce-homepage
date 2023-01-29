import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Tuple
} from '@mantine/core'
import { CSSProperties, ReactNode, useState } from 'react'
import colors from './colors'

interface Heading {
  fontSize: CSSProperties['fontSize']
  fontWeight: CSSProperties['fontWeight']
  lineHeight: CSSProperties['lineHeight']
}

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
    colors: { grassTeal: colors },
    headings: { fontFamily: 'M PLUS Rounded 1c' },
    components: {
      Title: {
        styles: theme => ({
          'section-title': {
            textDecoration: 'underline',
            fontSize: 20,
            textUnderlineOffset: 6,
            textDecorationColor: '#525252',
            textDecorationThickness: 4,
            marginTop: 3,
            marginBottom: 4
          }
        })
      },
      Link: {
        styles: theme => ({
          item: {
            color:
              theme.colorScheme === 'dark'
                ? theme.colors.pink[3]
                : theme.colors.blue[6],
            textUnderlineOffset: 3
          }
        })
      }
    }
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
