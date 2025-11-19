import { Container, SimpleGrid, Title } from '@mantine/core'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const thumbWebXR = '/images/works/webxr_examples.png'
const thumbPokemonThree = '/images/works/pokemon_three.png'
const thumbWidgetsApp = '/images/works/widgets-app.png'
const thumbCinemapedia = '/images/works/cinemapedia.png'

const Works = () => {
  return (
    <Layout title="Works">
      <Container size="sm">
        <Title order={3} size={20} mb={16}>
          Personal Works
        </Title>
        <SimpleGrid
          cols={2}
          spacing={6}
          breakpoints={[{ maxWidth: 'xs', cols: 1, spacing: 'sm' }]}
        >
          <Section>
            <WorkGridItem
              id="webxr-examples"
              title="WebXR Examples"
              thumbnail={thumbWebXR}
            >
              A sequence of webXR examples from basic to complex with ThreeJS
              and R3F
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="pokemon-three"
              title="Pokemon Three"
              thumbnail={thumbPokemonThree}
            >
              A basic Pokemon webpage template made with ThreeJS and NextJS
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="widgets-app"
              title="Widgets App"
              thumbnail={thumbWidgetsApp}
              isVertical={true}
            >
              Flutter app showcasing Material 3 widgets and UI components with
              Riverpod
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="cinemapedia"
              title="Cinemapedia"
              thumbnail={thumbCinemapedia}
              isVertical={true}
            >
              Movie discovery app powered by The MovieDB API with Flutter and
              Riverpod
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
