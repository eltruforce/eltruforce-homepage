import { Box, Container } from '@mantine/core'
import Head from 'next/head'
import Navbar from '../navbar'

const Main = ({ children, router }) => {
  return (
    <Box pb={24}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ichiro Macedo - ElTruforce Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container size="md" pt={42}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
