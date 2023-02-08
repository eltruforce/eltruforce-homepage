import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import MyMantineProvider from '../lib/theme'
import { AnimatePresence } from 'framer-motion'

const Website = ({ Component, pageProps, router, colorScheme }) => {
  return (
    <MyMantineProvider currentColorScheme={colorScheme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} key={router.router} />
        </AnimatePresence>
      </Layout>
    </MyMantineProvider>
  )
}

export default Website
