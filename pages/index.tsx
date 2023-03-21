import {
  Avatar,
  Box,
  Button,
  Container,
  createStyles,
  List,
  Text,
  Title,
  useMantineColorScheme
} from '@mantine/core'
import Link from 'next/link'
import { BiChevronRight, BiPhone } from 'react-icons/bi'
import { BsTelegram } from 'react-icons/bs'
import { IoLogoGithub, IoLogoInstagram, IoLogoWhatsapp } from 'react-icons/io5'
import { BioSection, BioYear } from '../components/bio'
import Paragraph from '../components/paragraph'
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
  },
  link: {
    textDecoration: 'inherit',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.cyan[3]
        : theme.colors.cyan[8],
    '&:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: 3
    }
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
        Hi there! I&apos;m a novice web developer based in Peru!
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
            // src="/images/eltruforce.png"
            src="/images/profile.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Title order={3} className={classes['section-title']}>
          About Me
        </Title>
        <Paragraph>
          I'm a Bachelor of Electronic Engineering from Peru based in New
          Zealand. I've had the opportunity to work on some exciting projects
          that bring technology to the fields of medicine, art, and services.
          I've had a chance to gain experience in various industries, including
          mining, web development, and deep learning. In my free time, I love
          combining my technical skills with my artistic side through personal
          projects. I'm always on the lookout for new and interesting things to
          learn and explore, so I'm excited to see what opportunities this next
          step in my career brings.
        </Paragraph>
        <Box sx={{ textAlign: 'center' }} my={16}>
          <Link href="/works" scroll={false} passHref>
            <Button
              rightIcon={<BiChevronRight size={18} />}
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
              sx={{ fontSize: 16 }}
            >
              My portfolio
            </Button>
          </Link>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Title order={3} className={classes['section-title']}>
          Bio
        </Title>
        <BioSection>
          <BioYear>1996</BioYear>
          Born in Komaki (小牧市), Japan.
        </BioSection>
        <BioSection>
          <BioYear>1999</BioYear>
          Move to Lima, Peru.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Completed the Electronic Engineering degree at{' '}
          <Link
            href="https://utec.edu.pe/en"
            target="_blank"
            className={classes.link}
          >
            UTEC
          </Link>{' '}
          (Universidad de Ingeniería y Tecnología), Peru.
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Title order={3} className={classes['section-title']}>
          Work Experience
        </Title>
        <BioSection>
          <BioYear>2020</BioYear>
          Worked at{' '}
          <Link
            href="https://www.stratedu.com/"
            target="_blank"
            className={classes.link}
          >
            Stratedu
          </Link>{' '}
          in Surface Mining Blasting Consulting, Peru.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked at{' '}
          <Link
            href="https://www.stratedu.com/"
            target="_blank"
            className={classes.link}
          >
            Stratedu
          </Link>{' '}
          in Consulting for Course Material Development for Seminars in
          Lubrication, Engines, and Vibration Analysis as a freelancer and in
          Personnel Sizing Consultancy in Mining, Peru.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Worked at{' '}
          <Link
            href="https://utec.edu.pe/en"
            target="_blank"
            className={classes.link}
          >
            UTEC
          </Link>{' '}
          in a deep learning with EEG classification project, Peru.
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Working at{' '}
          <Link
            href="https://minsky.cc/"
            target="_blank"
            className={classes.link}
          >
            Minsky
          </Link>{' '}
          as a developer, Peru.
        </BioSection>
      </Section>
      <Section delay={0.4}>
        <Title order={3} className={classes['section-title']}>
          Interests
        </Title>
        <Paragraph>
          Music, Pixel Art, Play Musical Instruments, Deep Learning, Videogames,
          Blender
        </Paragraph>
      </Section>
      <Section delay={0.5}>
        <Title order={3} className={classes['section-title']}>
          Contact Me
        </Title>
        <List style={{ listStyleType: 'none' }}>
          <List.Item>
            <Link
              href="https://github.com/eltruforce"
              target="_blank"
              className={classes.link}
            >
              <Button
                variant="subtle"
                color={colorScheme === 'dark' ? 'cyan.3' : 'cyan.6'}
                leftIcon={<IoLogoGithub size={16} />}
                sx={{ fontSize: 16 }}
              >
                @eltruforce
              </Button>
            </Link>
          </List.Item>
          <List.Item>
            <Link
              href="https://wa.me/51976684018"
              target="_blank"
              className={classes.link}
            >
              <Button
                variant="subtle"
                color={colorScheme === 'dark' ? 'cyan.3' : 'cyan.6'}
                leftIcon={<IoLogoWhatsapp size={16} />}
                sx={{ fontSize: 16 }}
              >
                +51 976684018
              </Button>
            </Link>
          </List.Item>
          <List.Item>
            <Link
              href="https://t.me/eltruforce"
              target="_blank"
              className={classes.link}
            >
              <Button
                variant="subtle"
                color={colorScheme === 'dark' ? 'cyan.3' : 'cyan.6'}
                leftIcon={<BsTelegram size={16} />}
                sx={{ fontSize: 16 }}
              >
                @eltruforce
              </Button>
            </Link>
          </List.Item>
          <List.Item>
            <Button
              variant="subtle"
              color={colorScheme === 'dark' ? 'cyan.3' : 'cyan.6'}
              leftIcon={<BiPhone size={16} />}
              sx={{ fontSize: 16 }}
            >
              +64 272478591
            </Button>
          </List.Item>
          <List.Item>
            <Link
              href="https://www.instagram.com/renatmc25/"
              target="_blank"
              className={classes.link}
            >
              <Button
                variant="subtle"
                color={colorScheme === 'dark' ? 'cyan.3' : 'cyan.6'}
                leftIcon={<IoLogoInstagram size={16} />}
                sx={{ fontSize: 16 }}
              >
                @renatmc25
              </Button>
            </Link>
          </List.Item>
          <List.Item>
            <Link
              href="https://www.instagram.com/eltruforce/"
              target="_blank"
              className={classes.link}
            >
              <Button
                variant="subtle"
                color={colorScheme === 'dark' ? 'cyan.3' : 'cyan.6'}
                leftIcon={<IoLogoInstagram size={16} />}
                sx={{ fontSize: 16 }}
              >
                @eltruforce
              </Button>
            </Link>
          </List.Item>
        </List>
      </Section>
    </Container>
  )
}

export default Page
