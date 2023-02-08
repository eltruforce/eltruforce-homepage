import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Model } from '../lib/model'
import { MegamanContainer, MegamanSpinner } from './voxel-megaman-loader'


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
        <OrbitControls autoRotate autoRotateSpeed={7} />
        <ambientLight />
        <group position={[0, -1, 0]}>
          <Model />
        </group>
      </Canvas>
    </MegamanContainer>
  )
}
