import styled from '@emotion/styled'
import { Text, useMantineColorScheme } from '@mantine/core'
import Link from 'next/link'
import ETprintIcon from './icons/footprint'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  padding-right: 30px;

  > svg {
    transition: 200ms ease;
  }
  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  return (
    <Link
      href="/"
      scroll={false}
      style={{
        textDecoration: 'none'
      }}
    >
      <LogoBox>
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
      </LogoBox>
    </Link>
  )
}

export default Logo
