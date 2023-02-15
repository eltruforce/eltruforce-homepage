import { Box } from '@mantine/core'

const Footer = () => {
  return (
    <Box sx={{ textAlign: 'center', fontSize: 14 }} opacity={0.4} mt="xl">
      &copy; {new Date().getFullYear()} Ichiro Macedo. All Rights Reserved.
    </Box>
  )
}

export default Footer
