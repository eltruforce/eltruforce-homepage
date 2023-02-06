import { Text } from '@mantine/core'

const Paragraph = ({ children }) => {
  return (
    <Text align="justify" sx={{ textIndent: '1em' }}>
      {children}
    </Text>
  )
}
export default Paragraph
