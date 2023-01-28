import { ColorScheme, MantineProvider } from '@mantine/core'
import { useState } from 'react'
import Layout from '../components/layouts/main'
import Theme from '../libs/theme'

const Website = ({ Component, pageProps, router, colorScheme }) => {
  return (
    <Theme currentColorScheme={colorScheme}>
      <Layout router={router}>
        <Component {...pageProps} key={router.router} />
      </Layout>
    </Theme>
  )
}

export default Website
