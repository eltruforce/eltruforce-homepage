import { Box, Center, Container } from '@mantine/core'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Footer from '../footer'
import Navbar from '../navbar'
import VoxelMegamanLoader from '../voxel-megaman-loader'

const LazyVoxelMegaman = dynamic(() => import('../voxel-megaman'), {
  ssr: false,
  loading: () => {
    return <VoxelMegamanLoader />
  }
})
const Main = ({ children, router }) => {
  return (
    <Box pb={24}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ichiro Macedo - ElTruforce Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar path={router.asPath} />

      <Container size="md" pt={42}>
        <LazyVoxelMegaman />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
