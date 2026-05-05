"use client"

import { useState, useEffect, useRef, Suspense, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { 
  Float, 
  Sphere, 
  MeshDistortMaterial, 
  MeshWobbleMaterial, 
  OrbitControls, 
  Points, 
  PointMaterial,
  Icosahedron,
  Box
} from "@react-three/drei"
import * as THREE from "three"
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Twitter, 
  Sparkles,
  Cpu,
  Terminal,
  Code2
} from "lucide-react"

function Particles({ count = 2000 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20
      p[i * 3 + 1] = (Math.random() - 0.5) * 20
      p[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return p
  }, [count])

  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.x = state.clock.getElapsedTime() * 0.05
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.03
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        color="#22d3ee"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </points>
  )
}

function Scene() {
  const meshRef = useRef()
  const boxRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.cos(t / 4) / 8
      meshRef.current.rotation.y = Math.sin(t / 4) / 8
      meshRef.current.position.y = (1 + Math.sin(t / 1.5)) / 10
    }
    if (boxRef.current) {
      boxRef.current.rotation.x += 0.01
      boxRef.current.rotation.y += 0.01
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#22d3ee" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
      <spotLight position={[0, 5, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
      
      <Particles />

      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Icosahedron args={[1, 15]} position={[4, 1, -2]}>
          <MeshDistortMaterial
            color="#22d3ee"
            attach="material"
            distort={0.3}
            speed={4}
            roughness={0}
            metalness={1}
            emissive="#22d3ee"
            emissiveIntensity={0.2}
          />
        </Icosahedron>
      </Float>

      <Float speed={3} rotationIntensity={2} floatIntensity={1.5}>
        <Sphere args={[0.8, 100, 100]} position={[-5, -1, -3]}>
          <MeshWobbleMaterial
            color="#8b5cf6"
            attach="material"
            factor={0.4}
            speed={3}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={3} floatIntensity={1}>
        <Box args={[0.5, 0.5, 0.5]} position={[2, -2, 1]}>
          <meshStandardMaterial color="#ffffff" wireframe />
        </Box>
      </Float>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#050505" opacity={0.3} transparent />
      </mesh>
    </>
  )
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  
  // 3D Tilt Effect Values
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const rotateX = useSpring(useTransform(y, [-300, 300], [10, -10]), { stiffness: 100, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-300, 300], [-10, 10]), { stiffness: 100, damping: 30 })

  useEffect(() => {
    setMounted(true)
  }, [])

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(event.clientX - centerX)
    y.set(event.clientY - centerY)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  if (!mounted) return null

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative pt-32 pb-20 overflow-hidden bg-[#050505]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Enhanced 3D Background Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }} shadows>
          <Suspense fallback={null}>
            <Scene />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Atmospheric Fog Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#050505]/20 via-transparent to-[#050505] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 pointer-events-none">
        <motion.div 
          style={{ rotateX, rotateY, perspective: 1000 }}
          initial={{ opacity: 0, scale: 0.5, rotateY: 90, z: -500 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center text-center"
        >
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center pointer-events-auto"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full glass border border-white/10 mb-12 mt-12 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 whitespace-nowrap">Neural Systems Architect</span>
            </div>

            <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-black tracking-tighter mb-12 leading-[0.8] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <span className="block text-white">Future</span>
              <span className="text-gradient block">Built.</span>
            </h1>

            <p className="text-xl md:text-3xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-16 font-medium">
              Engineering high-concurrency 
              <span className="text-white font-black"> AI ecosystems</span> with architectural precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-10 items-center justify-center">
              <Button
                size="lg"
                className="rounded-[2rem] px-14 h-24 text-xl font-black uppercase tracking-[0.2em] bg-accent text-black hover:bg-accent/90 transition-all hover:scale-105 shadow-[0_0_70px_rgba(34,211,238,0.5)] active:scale-95"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                Launch
                <ArrowRight className="ml-4 w-7 h-7" />
              </Button>

              <div className="flex items-center gap-4 p-3 glass rounded-[2.5rem] border border-white/5">
                {[
                  { icon: Github, href: "https://github.com/Muhammad-Daniyal-Imtiaz" },
                  { icon: Linkedin, href: "https://linkedin.com/in/muhammad-daniyal-imtiaz" },
                  { icon: Twitter, href: "#" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-2xl glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent/50 hover:bg-accent/10 transition-all hover:-translate-y-2 hover:scale-110"
                  >
                    <social.icon className="w-8 h-8" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="mt-40 w-full pointer-events-auto"
          >
            <div className="text-center mb-8">
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.5em]">Select Destination Sector</span>
            </div>
            
            <div className="flex overflow-x-auto pb-8 gap-6 custom-scrollbar snap-x snap-mandatory px-4 md:px-0 md:justify-center">
              {[
                { id: "experience", label: "Experience", desc: "Professional Journey", icon: Terminal, color: "from-blue-500/20" },
                { id: "skills", label: "Skills", desc: "Technical Arsenal", icon: Code2, color: "from-purple-500/20" },
                { id: "projects", label: "Projects", desc: "System Deployments", icon: Cpu, color: "from-cyan-500/20" },
                { id: "contact", label: "Contact", desc: "Comm Channel", icon: Sparkles, color: "from-emerald-500/20" },
              ].map((m, i) => (
                <button 
                  key={i} 
                  onClick={() => {
                    const duration = Math.floor(Math.random() * 5000) + 5000;
                    window.dispatchEvent(new CustomEvent('warp-travel', {
                      detail: { duration, destination: m.label.toUpperCase() + ' SECTOR' }
                    }));
                    setTimeout(() => {
                      const element = document.getElementById(m.id);
                      if (element) {
                        const offset = 100;
                        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
                      }
                    }, duration);
                  }}
                  className="flex-shrink-0 snap-center w-[280px] p-8 rounded-[3rem] glass border border-white/5 flex flex-col items-center justify-center group hover:bg-white/10 transition-all hover:-translate-y-4 hover:border-accent/30 shadow-2xl relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-t ${m.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="w-16 h-16 rounded-full glass border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all z-10 relative">
                    <m.icon className="w-8 h-8 text-gray-400 group-hover:text-accent transition-colors" />
                  </div>
                  
                  <span className="text-2xl font-black text-white z-10 relative mb-2">{m.label}</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] z-10 relative text-center">{m.desc}</span>
                  
                  {/* Wheel Decoration */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full border border-white/5 group-hover:border-accent/20 transition-all group-hover:scale-150"></div>
                </button>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}