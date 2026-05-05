"use client"

import { useState } from "react"
import YouTube from "react-youtube"
import { 
  ExternalLink, 
  Github, 
  Zap, 
  Users, 
  Shield, 
  Star, 
  Activity, 
  Database, 
  Cpu, 
  Play,
  ArrowRight,
  Terminal,
  Search,
  CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "../mprojects/projects-data"

const mainProject = projects[0] // Use the first project as featured

export default function ProjectSection() {
  const [showVideo, setShowVideo] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  const videoOptions = {
    height: '100%',
    width: '100%',
    playerVars: { autoplay: 1, modestbranding: 1, rel: 0 },
  }

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Selected Work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">Featured Project</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Pushing the boundaries of real-time web applications with integrated artificial intelligence.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Showcase Card */}
          <div className="glass rounded-[3rem] overflow-hidden border border-white/5 relative group">
            <div className="grid lg:grid-cols-2">
              
              <div className="relative aspect-video lg:aspect-auto bg-gray-900 overflow-hidden">
                {!showVideo ? (
                  <div className="absolute inset-0 group/media">
                    <img 
                      src={mainProject.youtubeId ? `https://img.youtube.com/vi/${mainProject.youtubeId}/maxresdefault.jpg` : mainProject.videoUrl} 
                      className="w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover/media:scale-110"
                      alt={mainProject.title}
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=400&width=600";
                      }}
                    />
                    {mainProject.videoAvailable && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button 
                          onClick={() => setShowVideo(true)}
                          className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white shadow-2xl transition-all hover:scale-110 active:scale-95 group-hover/media:bg-primary/90"
                        >
                          <Play className="w-8 h-8 fill-current ml-1" />
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="w-full h-full">
                    {mainProject.youtubeId ? (
                      <YouTube
                        videoId={mainProject.youtubeId}
                        opts={videoOptions}
                        className="w-full h-full"
                        containerClassName="w-full h-full"
                      />
                    ) : (
                      <video 
                        src={mainProject.videoUrl} 
                        controls 
                        autoPlay 
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-14 flex flex-col justify-center">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                    <span className="text-xs font-bold text-accent uppercase tracking-widest">{mainProject.subtitle}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">{mainProject.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg mb-8">{mainProject.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {mainProject.technologies.map(t => (
                      <span key={t} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button className="rounded-full px-8 h-12 font-bold bg-white text-black hover:bg-gray-200 transition-all">
                    Live Preview
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="rounded-full px-8 h-12 font-bold glass border-white/10 text-white hover:bg-white/5 transition-all">
                    <Github className="mr-2 w-4 h-4" />
                    Source Code
                  </Button>
                </div>
              </div>

            </div>

            {/* Metrics Footer */}
            <div className="border-t border-white/5 bg-white/[0.02] grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
              {Object.entries(mainProject.metrics).map(([key, value], i) => (
                <div key={i} className="p-6 md:p-8 text-center group/metric">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-2 group-hover/metric:text-accent transition-colors">{key}</p>
                  <p className="text-2xl font-bold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Highlight Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
               { title: "Distributed Engine", icon: Terminal, desc: "Ultra-low latency bidding processing." },
               { title: "AI Moderation", icon: Search, desc: "Real-time content safety filtering." },
               { title: "Global Payments", icon: CheckCircle2, desc: "Secure multi-currency transactions." }
            ].map((f, i) => (
              <div key={i} className="glass rounded-[2rem] p-8 border border-white/5 hover:border-white/10 transition-all">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                  <f.icon className="w-5 h-5 text-gray-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{f.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
