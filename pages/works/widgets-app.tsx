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
    <Layout title="Widgets App">
      <Container size="sm">
        <Title>
          Widgets App <Badge color="gray">2024</Badge>
        </Title>
        <Paragraph>
          A comprehensive Flutter application showcasing various Material 3
          widgets and UI components. This app demonstrates different Flutter
          capabilities including state management with Riverpod, theming,
          navigation, and a wide range of UI controls and animations.
        </Paragraph>
        <List ml={16} my={16} style={{ listStyleType: 'none' }}>
          <List.Item>
            <Meta>Platform</Meta>
            <span>iOS/Android</span>
          </List.Item>
          <List.Item>
            <Meta>Stack</Meta>
            <span>Flutter, Dart, Riverpod, Material 3</span>
          </List.Item>
          <List.Item>
            <Meta>Source</Meta>
            <Link
              href="https://github.com/eltruforce/widgets-app"
              className={classes.link}
              target="_blank"
            >
              https://github.com/eltruforce/widgets-app{' '}
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
            src="/images/works/widgets-app_01.png"
            alt="Widgets App - Theme Changer"
            isVertical={true}
          />
          <WorkImage
            src="/images/works/widgets-app_02.png"
            alt="Widgets App - Dialogs"
            isVertical={true}
          />
          <WorkImage
            src="/images/works/widgets-app_03.png"
            alt="Widgets App - Tutorial Screen"
            isVertical={true}
          />
          <WorkImage
            src="/images/works/widgets-app_04.png"
            alt="Widgets App - UI Controls"
            isVertical={true}
          />
          <WorkImage
            src="/images/works/widgets-app_05.png"
            alt="Widgets App - Side Menu"
            isVertical={true}
          />
          <WorkImage
            src="/images/works/widgets-app_06.png"
            alt="Widgets App - Progress Indicators"
            isVertical={true}
          />
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Work
