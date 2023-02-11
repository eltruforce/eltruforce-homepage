import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  Group,
  Divider,
  Box,
  useMantineColorScheme
} from '@mantine/core'
import Link from 'next/link'

const NotFound = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  return (
    <Container>
      <Title order={1}>Not Found</Title>
      <Text color="dimmed">
        The page you&apos;re trying to open does not exist.
      </Text>
      <Divider my={24} />
      <Box my={24} sx={{ textAlign: 'center' }}>
        <Link href="/" scroll={false} passHref>
          <Button
            color={colorScheme === 'dark' ? 'cyan.3' : 'cyan.6'}
            styles={theme => ({
              root: {
                color:
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[7]
                    : theme.colors.gray[0],
                scroll: false
              }
            })}
          >
            Take me back to home page
          </Button>
        </Link>
      </Box>
    </Container>
  )
}

export default NotFound
