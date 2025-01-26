import type React from "react"
import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Box, Text } from "@react-three/drei"
import * as THREE from "three";

interface Dice3DProps {
  value: number
  rolling: boolean
}

const DiceObject: React.FC<{ value: number; rolling: boolean }> = ({ value, rolling }) => {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [rotation, setRotation] = useState([0, 0, 0])

  useFrame(() => {
    if (rolling) {
      setRotation([Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI])
    }
  })

  return (
    <Box ref={meshRef} rotation={rotation as any}>
      <meshStandardMaterial color="white" />
      {[...Array(6)].map((_, index) => (
        <Text
          key={index}
          position={[0, 0, 0.51]}
          rotation={[0, 0, 0]}
          fontSize={0.5}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          {(index + 1).toString()}
        </Text>
      ))}
    </Box>
  )
}

export const Dice3D: React.FC<Dice3DProps> = ({ value, rolling }) => {
  return (
    <div className="w-24 h-24">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <DiceObject value={value} rolling={rolling} />
      </Canvas>
    </div>
  )
}

