import {
  Avatar,
  Box,
  Container,
  createStyles,
  Text,
  Title,
  useMantineColorScheme
} from '@mantine/core'
import Section from '../components/section'

const useStyles = createStyles(theme => ({
  'section-title': {
    textDecoration: 'underline',
    fontSize: 20,
    textUnderlineOffset: 6,
    textDecorationColor: '#525252',
    textDecorationThickness: 4,
    marginTop: 12,
    marginBottom: 16
  }
}))

const Page = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const { classes, theme } = useStyles()
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
                theme.colorScheme === 'dark'
                  ? theme.colors.gray[0]
                  : theme.colors.cyan[6],
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

      <Section delay={0.1}>
        <Title order={3} className={classes['section-title']}>
          Work
        </Title>
        <Text>Paragraph</Text>
      </Section>
    </Container>
  )
}

export default Page
