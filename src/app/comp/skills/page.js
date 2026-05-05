"use client"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { 
  Code2, 
  Server, 
  Brain, 
  Cpu, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Palette, 
  Layout, 
  Layers, 
  Terminal,
  Cloud,
  CheckCircle2
} from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: Layout,
    description: "Building responsive, performant interfaces with modern frameworks.",
    skills: [
      { name: "Next.js 15", level: 95 },
      { name: "React Server Components", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
    ],
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  {
    title: "Backend & Systems",
    icon: Server,
    description: "Designing scalable server-side logic and real-time architectures.",
    skills: [
      { name: "Node.js & Express", level: 88 },
      { name: "Supabase & Postgres", level: 90 },
      { name: "WebSockets (Socket.io)", level: 85 },
      { name: "RESTful API Design", level: 92 },
    ],
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  },
  {
    title: "AI & Intelligence",
    icon: Brain,
    description: "Integrating machine learning and computer vision into web apps.",
    skills: [
      { name: "Google Vision AI", level: 82 },
      { name: "Prompt Engineering", level: 90 },
      { name: "RAG Architectures", level: 78 },
      { name: "OpenAI Integration", level: 85 },
    ],
    color: "text-emerald-400",
    bg: "bg-emerald-400/10"
  },
  {
    title: "Infrastructure & Tools",
    icon: Cloud,
    description: "Managing deployments, automation, and project infrastructure.",
    skills: [
      { name: "Vercel Deployment", level: 95 },
      { name: "CI/CD Pipelines", level: 85 },
      { name: "Git & Version Control", level: 92 },
      { name: "Stripe & Auth Integration", level: 88 },
    ],
    color: "text-orange-400",
    bg: "bg-orange-400/10"
  },
]

export default function SkillsShowcase() {
  const [animatedProgress, setAnimatedProgress] = useState({})

  useEffect(() => {
    const timer = setTimeout(() => {
      const newProgress = {}
      skillCategories.forEach((category) => {
        category.skills.forEach((skill) => {
          newProgress[skill.name] = skill.level
        })
      })
      setAnimatedProgress(newProgress)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <Zap className="w-4 h-4 text-secondary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Technical Arsenal</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive set of tools and technologies tailored for building modern, high-performance digital products.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass rounded-[2.5rem] p-8 md:p-10 border border-white/5 group hover:border-white/10 transition-all duration-500">
              <div className="flex items-start justify-between mb-8">
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-2xl ${category.bg} flex items-center justify-center border border-white/5`}>
                    <category.icon className={`w-7 h-7 ${category.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{category.description}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500 font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${category.color.replace('text', 'bg')} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${animatedProgress[skill.name] || 0}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Code Coverage", value: "95%", icon: CheckCircle2 },
            { label: "Uptime Rate", value: "99.9%", icon: Globe },
            { label: "API Latency", value: "<50ms", icon: Terminal },
            { label: "Project Velocity", value: "High", icon: Layers },
          ].map((item, i) => (
            <div key={i} className="glass rounded-3xl p-6 border border-white/5 flex items-center gap-5 group hover:bg-white/5 transition-all">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{item.label}</p>
                <p className="text-xl font-bold text-white mt-0.5">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}