import { Box, createStyles } from '@mantine/core'

const useStyles = createStyles(() => ({
  bioSection: {
    paddingLeft: '3.4em',
    textIndent: '-3.4em'
  },
  bioYear: {
    fontWeight: 'bold',
    marginRight: '1em'
  }
}))

export function BioSection({ children, ...props }) {
  const { classes, cx } = useStyles()

  return (
    <Box className={cx(classes.bioSection)} {...props}>
      {children}
    </Box>
  )
}

export function BioYear({ children, ...props }) {
  const { classes, cx } = useStyles()

  return (
    <span className={cx(classes.bioYear)} {...props}>
      {children}
    </span>
  )
}
