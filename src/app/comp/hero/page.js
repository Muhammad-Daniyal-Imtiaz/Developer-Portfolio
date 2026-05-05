"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Rocket, Star, Globe, Database, Brain, Cpu, Shield, Sparkles } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-20">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Available for new opportunities</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
              <span className="block text-white mb-2">Architecting Digital</span>
              <span className="text-gradient block">Experiences.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
              Full-stack developer specializing in building high-performance web applications with 
              <span className="text-white"> Next.js</span>, <span className="text-white">TypeScript</span>, and <span className="text-white">AI-driven solutions</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button
                size="lg"
                className="rounded-full px-10 h-14 text-base font-bold bg-primary hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-10 h-14 text-base font-bold glass hover:bg-white/10 border-white/10 transition-all hover:scale-105 active:scale-95"
                onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Experience
              </Button>
            </div>
          </div>

          {/* Featured Highlight Card */}
          <div className="glass rounded-[2rem] p-8 md:p-12 border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu size={120} className="text-primary" />
            </div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/20">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-primary">Featured Case Study</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Neon-Nexus: Real-time AI Auction Engine</h2>
                
                <p className="text-gray-400 mb-8 leading-relaxed">
                  A high-concurrency bidding platform featuring WebSocket-driven updates, 
                  automated AI moderation, and seamless multi-method payment integrations.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["Next.js 15", "Supabase", "WebSockets", "AI Integration"].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <button 
                   onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                   className="inline-flex items-center gap-2 text-white font-bold hover:text-primary transition-colors group/btn"
                >
                  Deep Dive into Case Study
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="hidden md:block">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                      <Code size={48} className="text-white/20" />
                   </div>
                   {/* This would ideally be a project screenshot */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}