import { Box, Container } from '@mantine/core'
import Head from 'next/head'

const Main = ({ children, router }) => {
  return (
    <Box pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ichiro Macedo - ElTruforce Homepage</title>
      </Head>

      <Container size="md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
