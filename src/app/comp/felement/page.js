"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Text3D, OrbitControls, Environment } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";

function FloatingIcon({ position, text, color }) {
  const [font, setFont] = useState(null);

  useEffect(() => {
    // Dynamically import the FontLoader and load the font
    import('three/examples/jsm/loaders/FontLoader').then(({ FontLoader }) => {
      new FontLoader().load('/Inter_Bold.json', setFont);
    });
  }, []);

  if (!font) return null;

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color={color} transparent opacity={0.7} />
      </mesh>
      <Text3D
        position={[position[0], position[1] - 0.8, position[2]]}
        font={font}
        size={0.2}
        height={0.05}
      >
        {text}
        <meshStandardMaterial color={color} />
      </Text3D>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      <FloatingIcon position={[-8, 2, -5]} text="React" color="#06b6d4" />
      <FloatingIcon position={[8, -2, -5]} text="Next.js" color="#8b5cf6" />
      <FloatingIcon position={[-6, -3, -3]} text="AI/ML" color="#22d3ee" />
      <FloatingIcon position={[6, 3, -3]} text="Node.js" color="#a855f7" />
      <FloatingIcon position={[0, 4, -8]} text="TypeScript" color="#06b6d4" />
      <FloatingIcon position={[0, -4, -8]} text="Supabase" color="#8b5cf6" />

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
}

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
