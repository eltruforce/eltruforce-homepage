import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import MyMantineProvider from '../libs/theme'

const Website = ({ Component, pageProps, router, colorScheme }) => {
  return (
    <MyMantineProvider currentColorScheme={colorScheme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.router} />
      </Layout>
    </MyMantineProvider>
  )
}

export default Website
