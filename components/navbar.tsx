import {
  Box,
  Burger,
  Button,
  Center,
  ChevronIcon,
  Container,
  Flex,
  Group,
  Menu,
  NavLink,
  SelectChevronIcon,
  Stack,
  Title,
  useMantineColorScheme
} from '@mantine/core'
import Link from 'next/link'
import Logo from './logo'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const inactiveColor = colorScheme === 'dark' ? 'gray.0' : 'gray.2'
  return (
    <Link
      href={href}
      scroll={false}
      color={active ? '#202023' : inactiveColor}
      style={{
        textDecoration: 'inherit',
        padding: 2,
        background: active ? 'glassTeal' : undefined,
        color: 'inherit'
      }}
      passHref
    >
      {children}
    </Link>
  )
}

const Navbar = props => {
  const { path } = props
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

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
                <Link
                  href="/"
                  passHref
                  style={{
                    textDecoration: 'inherit'
                  }}
                >
                  <Menu.Item>About</Menu.Item>
                </Link>
                <Link
                  href="/works"
                  passHref
                  style={{
                    textDecoration: 'inherit'
                  }}
                >
                  <Menu.Item>Works</Menu.Item>
                </Link>
                <Link
                  href="/gallery"
                  passHref
                  style={{
                    textDecoration: 'inherit'
                  }}
                >
                  <Menu.Item>Gallery</Menu.Item>
                </Link>
                <Link
                  href="https://github.com/eltruforce/eltruforce-homepage"
                  passHref
                  style={{
                    textDecoration: 'inherit'
                  }}
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
