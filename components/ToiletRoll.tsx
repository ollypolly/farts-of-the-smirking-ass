import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export const ToiletRoll = () => {
  const ref = useRef(null)

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += 4 * delta
    }
  })

  return (
    <>
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <directionalLight position={[0, 0, 3]} />
      <mesh ref={ref} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[2, 2, 0.3, 128]} />
        <meshStandardMaterial color={'#D2E9FB'} />
      </mesh>
    </>
  )
}
