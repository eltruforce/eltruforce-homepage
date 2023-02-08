import { Box, Center, Loader as Spinner } from '@mantine/core'
import { ForwardedRef, forwardRef, ReactNode } from 'react'

export const MegamanSpinner = () => (
  <Center style={{ maxHeight: 520, height: '15vh' }}>
    <Spinner
      color="cyan"
      size="xl"
      pos="absolute"
      left="50%"
      top="50%"
      ml="calc(0px - 40px / 2)"
      mt="calc(0px - 40px)"
    />
  </Center>
)

export const MegamanContainer = forwardRef(
  (
    { children }: { children: ReactNode },
    ref: ForwardedRef<HTMLDivElement>
  ) => (
    <Box
      ref={ref}
      className="voxel-megaman"
      m="auto"
      style={{ marginBottom: '30px' }}
      mt={{ xs: '10px', sm: '15px', md: '20px' }}
      mb={{ xs: '40px', sm: '50px', md: '60px' }}
      w={{ xs: 240, sm: 360, md: 480 }}
      h={{ xs: 180, sm: 240, md: 300 }}
      pos="relative"
    >
      {children}
    </Box>
  )
)

const Loader = () => {
  return (
    <MegamanContainer>
      <MegamanSpinner />
    </MegamanContainer>
  )
}

export default Loader
