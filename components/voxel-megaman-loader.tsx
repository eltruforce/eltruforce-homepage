import { Box, Center, createStyles, Loader as Spinner } from '@mantine/core'
import { ForwardedRef, forwardRef, ReactNode } from 'react'

const useStyles = createStyles(theme => ({
  'box-container': {
    [theme.fn.smallerThan('xs')]: {
      height: 250,
      width: 250,
      marginTop: -20,
      marginBottom: 60
    },
    [theme.fn.largerThan('xs')]: {
      height: 340,
      width: 340,
      marginTop: -30,
      marginBottom: 65
    },
    [theme.fn.largerThan('sm')]: {
      height: 430,
      width: 430,
      marginTop: -50,
      marginBottom: 70
    },
    [theme.fn.largerThan('md')]: {
      height: 520,
      width: 520,
      marginTop: -70,
      marginBottom: 75
    }
  },
  spinner: {
    [theme.fn.smallerThan('xs')]: {
      marginLeft: -25,
      mt: 0
    },
    [theme.fn.largerThan('xs')]: {
      marginLeft: -26,
      mt: 0
    },
    [theme.fn.largerThan('sm')]: {
      marginLeft: -27,
      mt: 0
    },
    [theme.fn.largerThan('md')]: {
      marginLeft: -28,
      mt: 0
    }
  }
}))

export const MegamanSpinner = () => {
  const { classes, theme } = useStyles()
  return (
    <Center style={{ maxHeight: 520, height: '15vh' }}>
      <Spinner
        color="cyan"
        size="xl"
        pos="absolute"
        left="50%"
        top="50%"
        className={classes.spinner}
      />
    </Center>
  )
}

export const MegamanContainer = forwardRef(
  (
    { children }: { children: ReactNode },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const { classes, theme } = useStyles()
    return (
      <Box
        ref={ref}
        className={classes['box-container']}
        m="auto"
        pos="relative"
      >
        {children}
      </Box>
    )
  }
)

const Loader = () => {
  return (
    <MegamanContainer>
      <MegamanSpinner />
    </MegamanContainer>
  )
}

export default Loader
