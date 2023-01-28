import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider
} from '@mantine/core'
import { ReactNode, useState } from 'react'
import colors from './colors'

const config = initialColorScheme => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    (initialColorScheme = 'dark')
  )
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
  return { colorScheme, toggleColorScheme }
}

const Theme = ({ children, currentColorScheme }) => {
  const { colorScheme, toggleColorScheme } = config(currentColorScheme)
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          headings: { fontFamily: 'M PLUS Rounded 1c' },
          colors: { grassTeal: colors },
          primaryColor: 'grassTeal',
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
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default Theme
