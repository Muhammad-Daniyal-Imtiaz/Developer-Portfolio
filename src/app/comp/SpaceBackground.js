"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Stars, Sphere, MeshDistortMaterial, Float } from "@react-three/drei"
import * as THREE from "three"

function ParticleField() {
  const count = 3000
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 60
      p[i * 3 + 1] = (Math.random() - 0.5) * 60
      p[i * 3 + 2] = (Math.random() - 0.5) * 60
    }
    return p
  }, [])
  const ref = useRef()
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02
      ref.current.rotation.x += delta * 0.01
    }
  })
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <PointMaterial transparent color="#8b5cf6" size={0.04} sizeAttenuation depthWrite={false} opacity={0.5} />
    </points>
  )
}

function Nebula() {
  return (
    <group>
      <Float speed={0.5} rotationIntensity={1} floatIntensity={1}>
        <Sphere args={[8, 32, 32]} position={[15, -10, -20]}>
          <MeshDistortMaterial color="#8b5cf6" speed={1} distort={0.5} opacity={0.06} transparent />
        </Sphere>
      </Float>
      <Float speed={0.8} rotationIntensity={0.5} floatIntensity={1.5}>
        <Sphere args={[6, 32, 32]} position={[-15, 10, -25]}>
          <MeshDistortMaterial color="#22d3ee" speed={2} distort={0.4} opacity={0.06} transparent />
        </Sphere>
      </Float>
    </group>
  )
}

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#010101]">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <ParticleField />
        <Nebula />
        <Stars radius={150} depth={50} count={5000} factor={4} saturation={0} fade speed={0.5} />
      </Canvas>
    </div>
  )
}
