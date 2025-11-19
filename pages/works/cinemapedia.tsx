import { Badge, Container, createStyles, List, SimpleGrid } from '@mantine/core'
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
    <Layout title="Cinemapedia">
      <Container size="sm">
        <Title>
          Cinemapedia <Badge color="gray">2024</Badge>
        </Title>
        <Paragraph>
          A Flutter movie discovery application powered by The MovieDB API.
          Browse popular movies, view detailed information, ratings, and cast
          details. Features smooth animations, infinite scroll, and a modern UI
          design.
        </Paragraph>
        <List ml={16} my={16} style={{ listStyleType: 'none' }}>
          <List.Item>
            <Meta>Platform</Meta>
            <span>iOS/Android/Web/Desktop</span>
          </List.Item>
          <List.Item>
            <Meta>Stack</Meta>
            <span>Flutter, Dart, The MovieDB API, Riverpod</span>
          </List.Item>
          <List.Item>
            <Meta>Source</Meta>
            <Link
              href="https://github.com/eltruforce/cinemapedia"
              className={classes.link}
              target="_blank"
            >
              https://github.com/eltruforce/cinemapedia{' '}
              <BiLinkExternal
                style={{ marginBottom: '-4px', marginLeft: '2px' }}
              />
            </Link>
          </List.Item>
        </List>

        <SimpleGrid
          cols={2}
          spacing={16}
          breakpoints={[{ maxWidth: 'xs', cols: 1, spacing: 16 }]}
        >
          <WorkImage
            src="/images/works/cinemapedia_01.png"
            alt="Cinemapedia - Movie Grid"
            isVertical={true}
          />
          <WorkImage
            src="/images/works/cinemapedia_02.png"
            alt="Cinemapedia - Movie Details"
            isVertical={true}
          />
          <WorkImage
            src="/images/works/cinemapedia_03.png"
            alt="Cinemapedia - Cast Information"
            isVertical={true}
          />
          <WorkImage
            src="/images/works/cinemapedia_04.png"
            alt="Cinemapedia - Search Feature"
            isVertical={true}
          />
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Work