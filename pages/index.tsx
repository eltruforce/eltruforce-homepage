import { Box, Container, Header, Text, Title } from '@mantine/core'

const Page = () => {
  return (
    <Container size="sm">
      <Box
        sx={theme => ({
          borderRadius: theme.radius.lg,
          textAlign: 'center'
        })}
        bg="red"
        p={9}
        mb={18}
      >
        Hello, I&apos;m a novice web developer based in Peru!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Title order={2} variant="text">
            Ichiro Macedo
          </Title>
          <Text size="sm">
            ElTruforce (Developer / Bachelor's in Electronic Engineering/ Pixel
            Art Hobbyist)
          </Text>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
