import { Box, createStyles, Text, useMantineColorScheme } from '@mantine/core'
import Link from 'next/link'
import ETprintIcon from './icons/etprint'

const useStyles = createStyles(theme => ({
  LogoBox: {
    fontWeight: 'bold',
    fontSize: '18px',
    display: 'inline-flex',
    alignItems: 'center',
    height: '30px',
    lineHeight: '20px',
    padding: '10px',
    paddingRight: '30px',

    '&:hover': {
      cursor: 'pointer'
    },

    '> svg': {
      transition: '200ms ease'
    },

    '&:hover > svg': {
      transform: 'rotate(20deg)',
      cursor: 'pointer'
    }
  }
}))

const Logo = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const { classes, theme } = useStyles()
  return (
    <Link
      href="/"
      scroll={false}
      style={{
        textDecoration: 'none'
      }}
    >
      <Box className={classes.LogoBox}>
        <ETprintIcon />
        <Text
          color={colorScheme === 'light' ? 'gray.9' : 'gray.0'}
          fw="bold"
          sx={{
            fontFamily: 'M PLUS Rounded 1c, sans-serif'
          }}
          ml={3}
          mt={5}
        >
          Ichiro Macedo
        </Text>
      </Box>
    </Link>
  )
}

export default Logo
