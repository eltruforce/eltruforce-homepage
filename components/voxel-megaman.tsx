import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Model } from '../lib/model'
import { MegamanContainer, MegamanSpinner } from './voxel-megaman-loader'
import { useRef } from 'react'

const AntimatedVoxel = () => {
  const orbitRef = useRef(null)

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
        <Model />
      </group>
    </>
  )
}

export default function VoxelMegaman() {
  return (
    <MegamanContainer>
      <Canvas
        shadows
        camera={{
          position: [-1.5, -1, 2.5],
          fov: 35
        }}
      >
        <AntimatedVoxel />
      </Canvas>
    </MegamanContainer>
  )
}
