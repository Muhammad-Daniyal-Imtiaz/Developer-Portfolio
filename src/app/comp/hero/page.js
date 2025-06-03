"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Rocket, Star, Globe, Database, Brain, Cpu, Shield } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const floatingIcons = [
    { Icon: Code, delay: 0, color: "text-cyan-400" },
    { Icon: Rocket, delay: 200, color: "text-purple-400" },
    { Icon: Star, delay: 400, color: "text-yellow-400" },
    { Icon: Globe, delay: 600, color: "text-green-400" },
    { Icon: Database, delay: 800, color: "text-blue-400" },
    { Icon: Brain, delay: 1000, color: "text-pink-400" },
    { Icon: Cpu, delay: 1200, color: "text-orange-400" },
    { Icon: Shield, delay: 1400, color: "text-red-400" },
  ]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Advanced Background with Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-cyan-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-purple-500/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, color }, index) => (
        <div
          key={index}
          className={`absolute ${color} opacity-30 animate-float`}
          style={{
            left: `${10 + index * 12}%`,
            top: `${20 + (index % 3) * 20}%`,
            animationDelay: `${delay}ms`,
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        >
          <Icon size={40 + (index % 3) * 10} />
        </div>
      ))}

      <div className="container mx-auto px-4 text-center relative z-20">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-3 mb-8 group hover:scale-105 transition-transform duration-300">
            <Zap className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Full-Stack Developer | AI & FinTech Specialist
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
          </div>

          {/* Main Title with Advanced Typography */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 relative">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent animate-pulse">
              Building the Future
            </span>
            <br />
            <span className="relative">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                One Line at a Time
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            </span>
          </h1>

          {/* Enhanced Description */}
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Crafting innovative full-stack solutions with cutting-edge{" "}
            <span className="text-cyan-300 font-semibold">AI integration</span>,{" "}
            <span className="text-purple-300 font-semibold">real-time systems</span>, and{" "}
            <span className="text-pink-300 font-semibold">modern web technologies</span>.
          </p>

          {/* Advanced Neon-Nexus Highlight */}
          <div className="relative group mb-10">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-sm border border-cyan-400/40 rounded-3xl p-8 max-w-5xl mx-auto shadow-2xl">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="relative">
                  <Code className="w-8 h-8 text-cyan-400 animate-spin-slow" />
                  <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-30"></div>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                  Featured Project: Neon-Nexus
                </h2>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current animate-pulse"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-200 mb-8 text-lg leading-relaxed">
                A revolutionary real-time auction platform powered by AI, featuring live bidding, intelligent product
                recommendations, and seamless payment integration with{" "}
                <span className="text-cyan-300 font-semibold">1000+ concurrent users</span>.
              </p>

              {/* Enhanced Tech Stack Pills */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {["Next.js 15", "WebSockets", "AI/ML", "Stripe", "Real-time"].map((tech, index) => (
                  <div
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 rounded-full text-sm font-medium text-cyan-200 hover:scale-110 transition-transform duration-200 backdrop-blur-sm"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 group relative overflow-hidden px-8 py-4 text-lg font-semibold shadow-xl"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="relative z-10 flex items-center gap-3">
                  View Live Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Button>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg group relative overflow-hidden"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Rocket className="w-5 h-5 group-hover:animate-bounce" />
                View My Work
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 backdrop-blur-sm px-8 py-4 text-lg group relative overflow-hidden"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Globe className="w-5 h-5 group-hover:animate-spin" />
                Get In Touch
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
    </section>
  )
}