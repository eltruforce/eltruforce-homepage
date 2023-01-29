import { Global } from '@mantine/core'
// import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={[
      {
        '@font-face': {
          fontFamily: 'M PLUS Rounded 1c',
          src: `url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&display=swap') format("woff2")`,
          fontWeight: 300,
          fontStyle: 'normal'
        }
      },
      {
        '@font-face': {
          fontFamily: 'M PLUS Rounded 1c',
          src: `url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700&display=swap') format("woff2")`,
          fontWeight: 700,
          fontStyle: 'normal'
        }
      }
    ]}
  />
  // <Global
  //   styles={`
  // @import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap");
  // `}
  // ></Global>
)

export default Fonts
