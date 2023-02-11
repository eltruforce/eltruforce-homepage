import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import MyMantineProvider from '../lib/theme'
import { AnimatePresence } from 'framer-motion'
import { GetServerSidePropsContext } from 'next'
import { getCookie } from 'cookies-next'

const Website = ({ Component, pageProps, router, colorScheme }) => {
  return (
    <MyMantineProvider colorScheme={colorScheme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} key={router.router} />
        </AnimatePresence>
      </Layout>
    </MyMantineProvider>
  )
}

Website.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  // get color scheme from cookie
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'dark'
})

export default Website
