"use client"

import { useState } from "react"
import YouTube from "react-youtube"
import { 
  ExternalLink, 
  Github, 
  Star, 
  Play,
  ArrowUpRight,
  Monitor,
  Smartphone,
  Layout,
  Code2,
  Cpu,
  Video,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { projects } from "../mprojects/projects-data"

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [playingInline, setPlayingInline] = useState(null)
  const [filter, setFilter] = useState("All")

  const categories = ["All", "Live", "Demo", "Research"]
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.status === filter)

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-black/20">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6"
          >
            <Star className="w-4 h-4 text-accent" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Portfolio</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            A showcase of my work ranging from high-performance web ecosystems to advanced AI research and desktop applications.
          </motion.p>
        </div>


        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group glass rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-white/20 transition-all flex flex-col relative"
              >
                {/* Media Section */}
                <div className="relative aspect-video bg-gray-900 overflow-hidden">
                  {/* Persistent Top Action Bar */}
                  <div className="absolute top-4 right-4 flex gap-2 z-[30]">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="w-10 h-10 rounded-full glass border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-xl"
                      title="Expand View"
                    >
                      <Layout className="w-4 h-4" />
                    </button>
                    {project.youtubeId && (
                      <a 
                        href={`https://youtube.com/watch?v=${project.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full glass border-white/10 text-white flex items-center justify-center hover:bg-red-600 transition-all shadow-xl"
                        title="Watch on YouTube"
                      >
                        <Video className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full glass border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-xl"
                        title="Source Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <AnimatePresence mode="wait">
                    {playingInline === project.id ? (
                      <motion.div 
                        key="video"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black"
                      >
                        {project.youtubeId ? (
                          <YouTube 
                            videoId={project.youtubeId}
                            opts={{ height: '100%', width: '100%', playerVars: { autoplay: 1, modestbranding: 1 } }}
                            className="w-full h-full"
                            containerClassName="w-full h-full"
                          />
                        ) : (
                          <video src={project.videoUrl} controls autoPlay className="w-full h-full object-contain" />
                        )}
                        <button 
                          onClick={(e) => {
                            e.stopPropagation()
                            setPlayingInline(null)
                          }}
                          className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-black transition-colors z-[40] border border-white/10"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="thumbnail"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0"
                      >
                        <img 
                          src={project.youtubeId ? `https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg` : project.videoUrl}
                          className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                          alt={project.title}
                          onError={(e) => {
                            e.target.src = "/placeholder.svg?height=400&width=600";
                          }}
                        />
                        
                        {/* Permanent Play Button (Visible if videoAvailable) */}
                        {project.videoAvailable && (
                          <div className="absolute inset-0 flex items-center justify-center z-10">
                            <button 
                              onClick={() => setPlayingInline(project.id)}
                              className="w-20 h-20 rounded-full bg-accent/90 text-black flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] hover:scale-110 transition-all duration-300 relative group/play"
                            >
                              <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30 group-hover/play:opacity-50 transition-opacity" />
                              <div className="absolute inset-[-4px] rounded-full border-2 border-accent/20 animate-pulse" />
                              <Play className="w-8 h-8 fill-current ml-1 relative z-10" />
                            </button>
                          </div>
                        )}

                        {/* Empty overlay to maintain structure */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 z-[5]">
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">{project.status}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors truncate pr-2">{project.title}</h3>
                      <button onClick={() => setSelectedProject(project)}>
                        <ArrowUpRight className="w-5 h-5 text-gray-600 hover:text-white transition-colors" />
                      </button>
                    </div>
                    <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-4 opacity-80">{project.subtitle}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2 italic">
                      &quot;{project.description}&quot;
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[9px] font-bold text-gray-500 uppercase tracking-widest">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-[9px] font-bold text-gray-700">+{project.technologies.length - 3}</span>
                    )}
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Case Study / Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" onClick={() => setSelectedProject(null)} />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-6xl glass rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col lg:flex-row h-[90vh] lg:h-[70vh]"
            >
              {/* Media Side */}
              <div className="lg:w-3/5 bg-black relative">
                {selectedProject.videoAvailable ? (
                  selectedProject.youtubeId ? (
                    <YouTube 
                      videoId={selectedProject.youtubeId}
                      opts={{ height: '100%', width: '100%', playerVars: { autoplay: 1 } }}
                      className="w-full h-full"
                      containerClassName="w-full h-full"
                    />
                  ) : (
                    <video src={selectedProject.videoUrl} controls autoPlay className="w-full h-full object-contain" />
                  )
                ) : (
                  <img 
                    src={selectedProject.videoUrl} 
                    className="w-full h-full object-cover opacity-50" 
                    alt={selectedProject.title} 
                  />
                )}
              </div>

              {/* Content Side */}
              <div className="lg:w-2/5 p-8 md:p-12 overflow-y-auto custom-scrollbar flex flex-col">
                <div className="mb-10">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="mb-8 w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <h3 className="text-4xl font-bold text-white mb-2 leading-tight">{selectedProject.title}</h3>
                  <p className="text-accent text-sm font-bold uppercase tracking-widest mb-6">{selectedProject.subtitle}</p>
                  <div className="h-1 w-20 bg-accent rounded-full mb-8" />
                  <p className="text-gray-400 leading-relaxed text-lg mb-8">{selectedProject.description}</p>
                </div>

                <div className="space-y-10 mt-auto">
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-[0.3em] mb-6 opacity-50">Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map(t => (
                        <span key={t} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-gray-400 uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {selectedProject.liveUrl && (
                      <Button 
                        onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                        className="flex-1 rounded-2xl h-16 bg-white text-black font-bold hover:bg-gray-200 text-lg"
                      >
                        <ExternalLink className="mr-2 w-5 h-5" /> Preview
                      </Button>
                    )}
                    <Button 
                      variant="outline" 
                      onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                      className="flex-1 rounded-2xl h-16 glass border-white/10 text-white font-bold hover:bg-white/5 text-lg"
                    >
                      <Github className="mr-2 w-5 h-5" /> Source
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
