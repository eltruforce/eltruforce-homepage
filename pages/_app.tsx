import { MantineProvider } from '@mantine/core'
import Layout from '../components/layouts/main'

const Website = ({ Component, pageProps, router }) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      // theme={{
      //   colorScheme: 'light'
      // }}
    >
      <Layout router={router}>
        <Component {...pageProps} key={router.router} />
      </Layout>
    </MantineProvider>
  )
}

export default Website
