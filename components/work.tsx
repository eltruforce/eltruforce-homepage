import {
  Badge,
  Box,
  createStyles,
  Image,
  Title as Heading
} from '@mantine/core'
import Link from 'next/link'
import { BiChevronRight } from 'react-icons/bi'

const useStyles = createStyles(theme => ({
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

export const Title = ({ children }) => {
  const { classes, theme } = useStyles()
  return (
    <Box>
      <Link href="/works" className={classes.link}>
        Works
      </Link>
      <span>
        <BiChevronRight />
      </span>
      <Heading display="inline-block" order={3} size={20} mb={4}>
        {children}
      </Heading>
    </Box>
  )
}

export const WorkImage = ({ src, alt }) => (
  <Image radius="lg" w="full" src={src} alt={alt} mb={16} />
)

export const Meta = ({ children }) => (
  <Badge color="orange" mr={8}>
    {children}
  </Badge>
)
