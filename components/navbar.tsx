import {
  Box,
  Burger,
  Container,
  createStyles,
  Flex,
  Group,
  Menu,
  Title,
  useMantineColorScheme
} from '@mantine/core'
import Link from 'next/link'
import { IoLogoGithub } from 'react-icons/io5'
import Logo from './logo'
import ThemeToggleButton from './theme-toggle-button'

const useStyles = createStyles(theme => ({
  linkMenuMobile: {
    textDecoration: 'inherit',
    '&:hover': {
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[0]
          : theme.colors.dark[6],
      textDecoration: 'underline',
      textUnderlineOffset: 3
    }
  },
  linkMenuDesktop: {
    textDecoration: 'inherit',
    padding: 2,
    '&:hover': {
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[0]
          : theme.colors.dark[6],
      textDecoration: 'underline',
      textUnderlineOffset: 3
    }
  }
}))

const LinkItem = ({ href, path, children }) => {
  const { classes, theme } = useStyles()
  const active = path === href
  return (
    <Link
      href={href}
      scroll={false}
      style={{
        background: active ? '#66D9E8' : undefined,
        color: active ? '#202023' : 'inherit'
      }}
      className={classes.linkMenuDesktop}
      passHref
    >
      {children}
    </Link>
  )
}

const Navbar = props => {
  const { path } = props
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const { classes, theme } = useStyles()

  return (
    <Box
      pos="fixed"
      w="100%"
      bg={colorScheme === 'dark' ? '#20202380' : '#ffffff40'}
      style={{ backdropFilter: 'blur(10px' }}
      sx={{ zIndex: 1 }}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        size="md"
        sx={{
          wrap: 'wrap',
          align: 'center',
          justify: 'space-between'
        }}
      >
        <Flex align="center" mr={5}>
          <Title sx={{ letterSpacing: 'tighter' }} size="lg" order={1}>
            <Logo />
          </Title>
        </Flex>

        <Group
          display={{ base: 'none', md: 'flex' }}
          styles={{
            width: { base: 'full', md: 'auto' },
            alignItems: 'center',
            flexGrow: 1
          }}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/gallery" path={path}>
            Gallery
          </LinkItem>
          <Link
            className={classes.linkMenuDesktop}
            style={{
              color: 'inherit'
            }}
            target="_blank"
            href="https://github.com/eltruforce/eltruforce-homepage"
          >
            <IoLogoGithub style={{ marginBottom: '-2px' }} /> View Source
          </Link>
        </Group>
        <Group position="right" sx={theme => ({ flex: 1 })}>
          <ThemeToggleButton />
          <Box mr={6} mb={6} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <Menu.Target>
                <Burger
                  opened={false}
                  size="sm"
                  sx={{ variant: 'outline' }}
                  arial-label="Options"
                />
              </Menu.Target>
              <Menu.Dropdown>
                <Link href="/" passHref className={classes.linkMenuMobile}>
                  <Menu.Item>About</Menu.Item>
                </Link>
                <Link href="/works" passHref className={classes.linkMenuMobile}>
                  <Menu.Item>Works</Menu.Item>
                </Link>
                <Link
                  href="/gallery"
                  passHref
                  className={classes.linkMenuMobile}
                >
                  <Menu.Item>Gallery</Menu.Item>
                </Link>
                <Link
                  href="https://github.com/eltruforce/eltruforce-homepage"
                  passHref
                  className={classes.linkMenuMobile}
                >
                  <Menu.Item>View Source</Menu.Item>
                </Link>
              </Menu.Dropdown>
            </Menu>
          </Box>
        </Group>
      </Container>
    </Box>
  )
}

export default Navbar
