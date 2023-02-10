import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Model } from '../lib/model'
import { MegamanContainer, MegamanSpinner } from './voxel-megaman-loader'
import { useRef, useState } from 'react'
import { Button, Group, useMantineColorScheme } from '@mantine/core'

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
          fov: 40
        }}
      >
        <AntimatedVoxel activeAnimation={activeAnimation} />
      </Canvas>
      <Group position="center" mt={10}>
        <Button
          compact
          color={colorScheme === 'dark' ? 'cyan.3' : 'cyan.6'}
          variant={activeAnimation ? 'filled' : 'light'}
          styles={theme => ({
            root: {
              color: activeAnimation ? theme.colors.dark[7] : undefined,
              scroll: false
            }
          })}
          onClick={handleClick}
        >
          RGB Armor
        </Button>
      </Group>
    </MegamanContainer>
  )
}
