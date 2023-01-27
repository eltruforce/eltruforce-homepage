import styled from '@emotion/styled'
import { Text } from '@mantine/core'
import { useColorScheme } from '@mantine/hooks'
import Link from 'next/link'
import FootprintIcon from './icons/footprint'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const colorScheme = useColorScheme()
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <FootprintIcon />
        <Text
          c={colorScheme === 'dark' ? 'white.9' : 'gray.8'}
          fs='M PLUS Rounded 1c", sans-serif'
          fw="bold"
          ml={3}
        >
          Ichiro Macedo
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
