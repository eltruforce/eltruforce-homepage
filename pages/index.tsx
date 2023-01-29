import {
  Avatar,
  Box,
  Container,
  Text,
  Title,
  useMantineColorScheme
} from '@mantine/core'

const Page = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  return (
    <Container size="sm">
      <Box
        sx={theme => ({
          borderRadius: theme.radius.lg,
          textAlign: 'center'
        })}
        bg={colorScheme === 'dark' ? 'dark.5' : 'gray.3'}
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
        <Box
          sx={{
            flexShrink: 0,
            textAlign: 'center'
          }}
          mt={{ base: 16, md: 0 }}
          ml={{ md: 24 }}
        >
          <Avatar
            sx={theme => ({
              borderColor:
                theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.cyan[6],
              borderWidth: 2,
              borderStyle: 'solid'
            })}
            size={100}
            radius={100}
            display="inline-block"
            src="/images/eltruforce.png"
            alt="Profile Image"
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Page
