import { Box, Container, Header, Title } from '@mantine/core'

const Page = () => {
  return (
    <Container>
      <Box
        sx={theme => ({ borderRadius: 'lg', textAlign: 'center' })}
        bg="red"
        p={3}
        mb={6}
      >
        Hello, I&apos;m a novice web developer based in Peru!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Title order={2}>Ichiro Macedo</Title>
        </Box>
        <p>
          ElTruforce (Developer / Bachelor's in Electronic Engineering/ Pixel
          Art Hobbyist)
        </p>
      </Box>
    </Container>
  )
}

export default Page
