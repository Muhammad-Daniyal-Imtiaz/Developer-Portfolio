"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, ExternalLink, Github, Star, Calendar } from "lucide-react"
import YouTube from "react-youtube"
import { Button } from "@/components/ui/button"
import { projects } from "./projects-data"

export default function ProjectsCarousel() {
  const [current, setCurrent] = useState(0)
  const [showVideo, setShowVideo] = useState(false)

  const next = () => {
    setShowVideo(false)
    setCurrent((prev) => (prev + 1) % projects.length)
  }

  const prev = () => {
    setShowVideo(false)
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const project = projects[current]

  return (
    <section className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="container mx-auto px-6">
        
        {/* Navigation & Counter */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <h2 className="text-2xl font-bold text-white">More Projects</h2>
            <div className="px-3 py-1 rounded-full glass border-white/10 text-[10px] font-bold text-gray-400 tracking-widest">
              {current + 1} / {projects.length}
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={prev} className="w-12 h-12 rounded-full glass border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full glass border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="grid lg:grid-cols-12 gap-12 items-center"
            >
              {/* Media Side */}
              <div className="lg:col-span-7">
                <div className="glass rounded-[2rem] overflow-hidden border border-white/5 aspect-video relative group">
                  {!showVideo ? (
                    <div className="absolute inset-0">
                      <img 
                        src={project.youtubeId ? `https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg` : project.videoUrl}
                        className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
                        alt={project.title}
                        onError={(e) => {
                          e.target.src = "/placeholder.svg?height=400&width=600";
                        }}
                      />
                      {project.videoAvailable && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button 
                            onClick={() => setShowVideo(true)}
                            className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all shadow-2xl"
                          >
                            <Play className="w-6 h-6 fill-current ml-1" />
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="w-full h-full">
                      {project.youtubeId ? (
                        <YouTube 
                          videoId={project.youtubeId} 
                          opts={{ height: '100%', width: '100%', playerVars: { autoplay: 1 } }}
                          className="w-full h-full"
                          containerClassName="w-full h-full"
                        />
                      ) : (
                        <video 
                          src={project.videoUrl} 
                          controls 
                          autoPlay 
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="w-4 h-4 text-accent" />
                    <span className="text-xs font-bold text-accent uppercase tracking-widest">{project.status}</span>
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">{project.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map(t => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  {project.liveUrl && (
                    <Button variant="link" className="text-white font-bold p-0 group" onClick={() => window.open(project.liveUrl, '_blank')}>
                      View Live <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="link" className="text-gray-500 font-bold p-0 group hover:text-white" onClick={() => window.open(project.githubUrl, '_blank')}>
                      Code <Github className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
