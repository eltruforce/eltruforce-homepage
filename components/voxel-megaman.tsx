import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Model } from '../lib/model'
import { MegamanContainer, MegamanSpinner } from './voxel-megaman-loader'
import { useRef, useState } from 'react'
import { Button, Group, useMantineColorScheme } from '@mantine/core'
import { BiPlay, BiPlayCircle } from 'react-icons/bi'

interface Props {
  activeAnimation: boolean
}

const AntimatedVoxel = (props: Props) => {
  const orbitRef = useRef(null)
  const { activeAnimation } = props

  useFrame(({ clock }) => {
    let frame = clock.getElapsedTime()

    orbitRef.current.autoRotateSpeed =
      frame <= 1.25 ? 800 - 100 * frame - 100 : 8
  })
  return (
    <>
      <OrbitControls ref={orbitRef} autoRotate />
      <ambientLight />
      <group position={[0, -1, 0]}>
        <Model activeAnimation={activeAnimation} />
      </group>
    </>
  )
}

export default function VoxelMegaman() {
  const [activeAnimation, setActiveAnimation] = useState(false)
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  function handleClick() {
    setActiveAnimation(!activeAnimation)
  }

  return (
    <MegamanContainer>
      <Canvas
        shadows
        camera={{
          position: [-1.5, -1, 2.5],
          fov: 50
        }}
      >
        <AntimatedVoxel activeAnimation={activeAnimation} />
      </Canvas>
      <Group position="center" mt={0}>
        <Button
        radius="xl"
          compact
          leftIcon={
            <BiPlayCircle
              style={{ marginRight: -5, marginLeft: -2.5 }}
              size={18}
            />
          }
          color={colorScheme === 'dark' ? 'cyan.3' : 'cyan.6'}
          variant={activeAnimation ? 'light' : 'filled'}
          styles={theme => ({
            root: {
              color: activeAnimation
                ? colorScheme === 'dark'
                  ? undefined
                  : undefined
                : colorScheme === 'light'
                ? theme.colors.gray[0]
                : theme.colors.dark[7],
              scroll: false
            }
          })}
          onClick={handleClick}
        >
          Play RGB
        </Button>
      </Group>
    </MegamanContainer>
  )
}
