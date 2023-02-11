import { Badge, Container, createStyles, List } from '@mantine/core'
import Link from 'next/link'
import { BiLinkExternal } from 'react-icons/bi'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import { Meta, Title, WorkImage } from '../../components/work'

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

const Work = () => {
  const { classes, theme } = useStyles()
  return (
    <Layout title="WebXR Examples">
      <Container size="sm">
        <Title>
          WebXR Examples <Badge color="gray">2022-</Badge>
        </Title>
        <Paragraph>
          A sequence of webXR examples from basic to complex with ThreeJS and
          R3F.
        </Paragraph>
        <List ml={16} my={16} style={{ listStyleType: 'none' }}>
          <List.Item>
            <Meta>Website</Meta>
            <Link
              href="https://webxr-examples.vercel.app/"
              className={classes.link}
            >
              https://webxr-examples.vercel.app/{' '}
              <BiLinkExternal
                style={{ marginBottom: '-4px', marginLeft: '2px' }}
              />
            </Link>
          </List.Item>
          <List.Item>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </List.Item>
          <List.Item>
            <Meta>Stack</Meta>
            <span>
              Javascript, Typescript, NextJS, React, ThreeJS, React-Three-Fiber
            </span>
          </List.Item>
        </List>

        <WorkImage
          src="/images/works/webxr-examples_01.png"
          alt="WebXR Examples"
        />
        <WorkImage
          src="/images/works/webxr-examples_02.png"
          alt="WebXR Examples"
        />
      </Container>
    </Layout>
  )
}

export default Work
