"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { 
  Zap, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Terminal, 
  Globe, 
  CheckCircle2,
  Code2,
  Box
} from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    description: "Expertise in high-performance web interfaces and modern UI architectures.",
    skills: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    color: "accent"
  },
  {
    title: "Backend & Systems",
    icon: Terminal,
    description: "Architecting scalable server-side logic and real-time data ecosystems.",
    skills: ["Node.js", "Supabase", "PostgreSQL", "WebSockets", "REST APIs", "Prisma"],
    color: "primary"
  },
  {
    title: "AI Integration",
    icon: Cpu,
    description: "Deploying intelligent agents and generative AI features into production.",
    skills: ["LangChain", "OpenAI API", "Hugging Face", "Vector DBs", "RAG", "Prompt Eng."],
    color: "secondary"
  },
  {
    title: "DevOps & Scale",
    icon: Globe,
    description: "Ensuring seamless delivery and high availability across global infrastructure.",
    skills: ["Vercel", "GitHub Actions", "Docker", "CI/CD", "AWS", "Analytics"],
    color: "white"
  },
]

export default function SkillsShowcase() {
  return (
    <section id="skills" className="py-32 relative bg-[#050505]">
      {/* Decorative Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8">
            <Zap className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">Technical Mastery</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-none">
            Built with <span className="text-gradient">Precision.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl text-lg leading-relaxed font-medium">
            My engineering stack is curated for maximum performance, scalability, and maintainability.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass rounded-[3rem] p-10 md:p-12 border border-white/5 hover:border-accent/20 transition-all duration-500 relative overflow-hidden"
            >
              <div className={`absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-${cat.color}/10 rounded-full blur-[100px] group-hover:bg-${cat.color}/20 transition-all duration-700`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-10">
                  <div className={`w-16 h-16 rounded-[1.5rem] glass border border-${cat.color}/20 flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110`}>
                    <cat.icon className={`w-8 h-8 text-${cat.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white tracking-tight">{cat.title}</h3>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Core Domain</p>
                  </div>
                </div>

                <p className="text-gray-400 mb-10 leading-relaxed max-w-md font-medium">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <div 
                      key={skill} 
                      className="px-5 py-2.5 rounded-xl glass border border-white/10 text-xs font-bold text-gray-300 flex items-center gap-2 group/skill hover:border-accent/30 hover:bg-white/5 transition-all"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent opacity-50 group-hover/skill:opacity-100 transition-opacity" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: "Deployment Speed", value: "99th Percentile", icon: Zap, sub: "Vercel Edge Network" },
            { label: "Code Architecture", value: "Modular & Atomic", icon: Layers, sub: "Clean Code Principles" },
            { label: "System Security", value: "Military Grade", icon: ShieldCheck, sub: "JWT & RLS Enabled" },
          ].map((item, i) => (
            <div key={i} className="glass rounded-[2rem] p-8 border border-white/5 flex items-center gap-8 group hover:bg-white/5 transition-all">
              <div className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center shrink-0 shadow-xl transition-transform group-hover:-translate-y-1">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                <p className="text-lg font-black text-white tracking-tight leading-none mb-1">{item.value}</p>
                <p className="text-[10px] font-bold text-accent/50">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}