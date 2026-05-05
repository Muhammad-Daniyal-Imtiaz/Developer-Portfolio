"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Twitter, 
  Sparkles,
  Code2,
  Terminal,
  Cpu
} from "lucide-react"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-32 pb-20 overflow-hidden bg-[#050505]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/grid.svg')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Added more margin-top (mt-12) to create a clear gap from the floating header */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-12 mt-12">
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 whitespace-nowrap">Available for Innovation</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-12 leading-[0.9]">
              <span className="block text-white">Architecting</span>
              <span className="text-gradient block">The Future.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-16 font-medium">
              High-concurrency ecosystems and AI-driven platforms built with 
              <span className="text-white font-black"> modern engineering excellence</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-10 items-center justify-center">
              <Button
                size="lg"
                className="rounded-2xl px-12 h-20 text-lg font-black uppercase tracking-widest bg-accent text-black hover:bg-accent/90 transition-all hover:scale-105 shadow-[0_0_50px_rgba(34,211,238,0.4)] active:scale-95"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                Launch Projects
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>

              <div className="flex items-center gap-4 p-2 glass rounded-[2rem] border border-white/5">
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
                    className="w-16 h-16 rounded-2xl glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent/30 hover:bg-accent/5 transition-all hover:-translate-y-1"
                  >
                    <social.icon className="w-7 h-7" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Spaced out metrics bar */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-6 w-full"
          >
            {[
              { label: "Performance", value: "99.9%", icon: Cpu },
              { label: "Uptime", value: "100%", icon: Terminal },
              { label: "Security", value: "Elite", icon: Code2 },
              { label: "Delivery", value: "Rapid", icon: Sparkles },
            ].map((m, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] glass border border-white/5 flex flex-col items-center justify-center group hover:bg-white/5 transition-all">
                <m.icon className="w-5 h-5 text-accent/50 mb-3 group-hover:text-accent transition-colors" />
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{m.label}</span>
                <span className="text-xl font-black text-white">{m.value}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}