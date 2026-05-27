"use client"

import { motion } from "framer-motion"
import { Trophy, ExternalLink, Code2, Sparkles, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HackathonSection() {
  const hackathons = [
    {
      title: "Gemma 4 Challenge",
      project: "Form Sync",
      role: "Creator & Developer",
      date: "May 6 to May 24",
      description: "Built Form Sync, a Gemma 4 powered AI form builder that turns prompts, voice, and images into fully functional forms with real-time sync. Pushed the boundaries of what's possible with Google's Gemma 4 LLM in web development.",
      link: "https://dev.to/muhammad_daniyal_5b5f5a29/i-built-form-sync-a-gemma-4-powered-ai-form-builder-that-turns-prompts-voice-and-images-into-25a7",
      technologies: ["Gemma 4", "Next.js", "AI/ML", "React", "Tailwind CSS"],
      badge: "Featured Submission",
      icon: Flame
    }
  ]

  return (
    <section id="hackathons" className="py-32 relative overflow-hidden bg-[#0a0a0a]">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/20 mb-8"
          >
            <Trophy className="w-4 h-4 text-accent" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Hackathons & Challenges</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-6 md:mb-8 leading-none"
          >
            Competitive <span className="text-gradient">Edge.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl text-base md:text-lg leading-relaxed font-medium px-4 md:px-0"
          >
            Pushing boundaries and exploring bleeding-edge AI models in global hackathons and developer challenges.
          </motion.p>
        </div>

        {/* Hackathon Cards Grid */}
        <div className="max-w-5xl mx-auto">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 border border-white/5 hover:border-accent/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[100px] group-hover:bg-accent/20 transition-all duration-700 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
                
                {/* Visual / Icon Side */}
                <div className="w-full lg:w-1/3 shrink-0 relative aspect-video lg:aspect-square bg-white/5 rounded-[1.5rem] md:rounded-[2rem] border border-white/10 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-50"></div>
                  <div className="relative z-10 w-20 h-20 md:w-28 md:h-28 rounded-full glass border border-accent/30 flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.2)] group-hover:scale-110 group-hover:shadow-[0_0_80px_rgba(34,211,238,0.4)] transition-all duration-500">
                    <hackathon.icon className="w-10 h-10 md:w-14 md:h-14 text-accent" />
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 animate-pulse">
                    <Sparkles className="w-5 h-5 text-accent/70" />
                  </div>
                  <div className="absolute bottom-4 left-4 animate-pulse delay-700">
                    <Code2 className="w-5 h-5 text-accent/50" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 w-full flex flex-col">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-bold text-accent uppercase tracking-widest">
                      {hackathon.badge}
                    </span>
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                      {hackathon.date}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight tracking-tight">
                    {hackathon.title}
                  </h3>
                  
                  <div className="mb-6 md:mb-8">
                    <p className="text-sm md:text-base font-bold text-white/70">Project: <span className="text-white">{hackathon.project}</span></p>
                  </div>

                  <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
                    {hackathon.description}
                  </p>

                  <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10">
                    {hackathon.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-4 py-2 rounded-xl glass border border-white/10 text-[10px] md:text-xs font-bold text-gray-300 tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Button 
                      onClick={() => window.open(hackathon.link, "_blank")}
                      className="w-full sm:w-auto h-14 md:h-16 px-8 rounded-xl md:rounded-2xl bg-white text-black font-bold hover:bg-gray-200 text-base md:text-lg transition-all group/btn"
                    >
                      <ExternalLink className="mr-2 w-5 h-5 transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                      View Submission
                    </Button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
