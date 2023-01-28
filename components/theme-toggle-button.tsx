import { ActionIcon, Center, useMantineColorScheme } from '@mantine/core'
import { BiSun, BiMoon } from 'react-icons/bi'

const ThemeToggleButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const Icon = colorScheme === 'dark' ? BiSun : BiMoon

  return (
    <ActionIcon
      aria-label="Toggle theme"
      onClick={() => toggleColorScheme()}
      color={colorScheme === 'dark' ? 'orange' : 'grape'}
      variant="light"
    >
      <Icon />
    </ActionIcon>
  )
}

export default ThemeToggleButton
