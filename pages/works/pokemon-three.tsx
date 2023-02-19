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
    <Layout title="Pokemon Three">
      <Container size="sm">
        <Title>
          Pokemon Three <Badge color="gray">2022-</Badge>
        </Title>
        <Paragraph>
          A basic Pokemon webpage template made with ThreeJS and NextJS.
        </Paragraph>
        <List ml={16} my={16} style={{ listStyleType: 'none' }}>
          <List.Item>
            <Meta>Website</Meta>
            <Link
              href="https://pokemon-vercel-lac.vercel.app/"
              className={classes.link}
              target="_blank"
            >
              https://pokemon-vercel-lac.vercel.app/{' '}
              <BiLinkExternal
                style={{ marginBottom: '-4px', marginLeft: '2px' }}
              />
            </Link>
          </List.Item>
          <List.Item>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </List.Item>
          <List.Item>
            <Meta>Stack</Meta>
            <span>Typescript, NextJS, React, ThreeJS, CSS</span>
          </List.Item>
          <List.Item>
            <Meta>Source</Meta>
            <Link
              href="https://github.com/eltruforce/pokemon-vercel"
              className={classes.link}
              target="_blank"
            >
              https://github.com/eltruforce/pokemon-vercel{' '}
              <BiLinkExternal
                style={{ marginBottom: '-4px', marginLeft: '2px' }}
              />
            </Link>
          </List.Item>
        </List>

        <WorkImage
          src="/images/works/pokemon-three_01.png"
          alt="Pokemon Three"
        />
        <WorkImage
          src="/images/works/pokemon-three_02.png"
          alt="Pokemon Three"
        />
      </Container>
    </Layout>
  )
}

export default Work
