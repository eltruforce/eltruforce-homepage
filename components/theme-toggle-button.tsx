import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { AnimatePresence, motion } from 'framer-motion'
import { BiSun, BiMoon } from 'react-icons/bi'

const ThemeToggleButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const Icon = colorScheme === 'dark' ? BiSun : BiMoon

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={colorScheme === 'dark' ? 'light' : 'dark'}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <ActionIcon
          aria-label="Toggle theme"
          onClick={() => toggleColorScheme()}
          color={colorScheme === 'dark' ? 'orange' : 'cyan'}
          variant="light"
        >
          <Icon />
        </ActionIcon>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
