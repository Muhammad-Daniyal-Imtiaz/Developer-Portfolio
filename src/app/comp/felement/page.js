'use client';

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { checkWebGLAvailability } from "@/lib/webglUtils";

function FloatingBox({ position, color, size = 0.2 }) {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={position}>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial color={color} transparent opacity={0.1} />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />

      <FloatingBox position={[-5, 2, -5]} color="#ffffff" size={0.3} />
      <FloatingBox position={[5, -2, -5]} color="#ffffff" size={0.2} />
      <FloatingBox position={[-3, -3, -3]} color="#ffffff" size={0.15} />
      <FloatingBox position={[3, 3, -3]} color="#ffffff" size={0.25} />
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
    </>
  );
}

export default function FloatingElements() {
  const [webGLAvailable, setWebGLAvailable] = useState(false);

  useEffect(() => {
    setWebGLAvailable(checkWebGLAvailability());
  }, []);

  if (!webGLAvailable) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}