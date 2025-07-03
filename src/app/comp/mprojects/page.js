'use client';
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import YouTube from "react-youtube";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Play,
  Calendar,
  Users,
  Star,
  Code,
  X,
  Maximize2,
  Volume2,
  VolumeX,
  Pause
} from "lucide-react";
import { projects } from "./projects-data";

export default function ProjectsCarousel() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("right");
  const [particles, setParticles] = useState([]);
  const [fullscreenVideo, setFullscreenVideo] = useState(false);
  const [player, setPlayer] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const videoContainerRef = useRef(null);

  useEffect(() => {
    setParticles(
      Array(20)
        .fill()
        .map(() => ({
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 2}s`,
        }))
    );
  }, []);

  const nextProject = () => {
    setAnimationDirection("right");
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setIsPlaying(false);
    setUserInteracted(false);
    if (player) {
      player.stopVideo();
    }
  };

  const prevProject = () => {
    setAnimationDirection("left");
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setIsPlaying(false);
    setUserInteracted(false);
    if (player) {
      player.stopVideo();
    }
  };

  const goToProject = (index) => {
    setAnimationDirection(index > currentProject ? "right" : "left");
    setCurrentProject(index);
    setIsPlaying(false);
    setUserInteracted(false);
    if (player) {
      player.stopVideo();
    }
  };

  const project = projects[currentProject];

  const onPlayerReady = (event) => {
    setPlayer(event.target);
    if (isMuted) {
      event.target.mute();
    } else {
      event.target.unMute();
    }

    if (project.id === 11) {
      event.target.unMute();
      setIsMuted(false);
    }
  };

  const onPlayerStateChange = (event) => {
    if (event.data === YouTube.PlayerState.PLAYING) {
      setIsPlaying(true);
    } else if (event.data === YouTube.PlayerState.PAUSED || event.data === YouTube.PlayerState.ENDED) {
      setIsPlaying(false);
    }
  };

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: userInteracted ? 1 : 0,
      controls: 0,
      disablekb: 1,
      modestbranding: 1,
      rel: 0,
      fs: 0,
      enablejsapi: 1
    },
  };

  const toggleFullscreen = () => {
    setFullscreenVideo(!fullscreenVideo);
  };

  const togglePlay = () => {
    if (!userInteracted) {
      setUserInteracted(true);
    }

    if (player) {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
        if (project.id === 11) {
          player.unMute();
          setIsMuted(false);
        }
      }
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (player) {
      if (isMuted) {
        player.unMute();
      } else {
        player.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  const getYouTubeThumbnail = (youtubeId, isPdfProject = false) => {
    if (isPdfProject) {
      return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg?t=0.2`;
    }
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  };

  return (
    <section id="projects-carousel" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {fullscreenVideo && project.youtubeId && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <YouTube videoId={project.youtubeId} opts={opts} onReady={onPlayerReady} onStateChange={onPlayerStateChange} className="w-full h-full" />
            <div className="absolute bottom-4 left-4 flex gap-2">
              <button onClick={togglePlay} className="p-2 rounded-full bg-gray-900/80 text-white hover:bg-gray-800 transition-colors z-10">
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              <button onClick={toggleMute} className="p-2 rounded-full bg-gray-900/80 text-white hover:bg-gray-800 transition-colors z-10">
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>
            <button onClick={toggleFullscreen} className="absolute top-4 right-4 p-2 rounded-full bg-gray-900/80 text-white hover:bg-gray-800 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-purple-500/5"></div>
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div key={i} className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-30" style={{ left: particle.left, top: particle.top, animationDelay: particle.animationDelay, animationDuration: particle.animationDuration }} />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-3 mb-6">
            <Code className="w-6 h-6 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-medium">Portfolio Showcase</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Featured Projects</h2>
          <p className="text-gray-200 text-xl max-w-3xl mx-auto leading-relaxed mb-8">Explore my collection of innovative projects showcasing cutting-edge technologies and creative solutions</p>
          <div className="inline-flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-full px-6 py-3">
            <span className="text-gray-300">Project</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-cyan-400">{currentProject + 1}</span>
              <span className="text-gray-400">/</span>
              <span className="text-gray-300">{projects.length}</span>
            </div>
            <div className="w-px h-6 bg-gray-600"></div>
            <span className="text-gray-300">Total: {projects.length} Projects</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <button onClick={prevProject} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 p-3 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-600 hover:bg-cyan-500/20 hover:border-cyan-500/50 text-gray-300 hover:text-cyan-400 transition-all duration-300">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button onClick={nextProject} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 p-3 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-600 hover:bg-cyan-500/20 hover:border-cyan-500/50 text-gray-300 hover:text-cyan-400 transition-all duration-300">
            <ChevronRight className="w-8 h-8" />
          </button>

          <Card className={`bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border-gray-600 overflow-hidden relative group shadow-2xl transform transition-all duration-700 hover:scale-[1.02]`}>
            <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
            <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
            <CardContent className="p-0 relative z-10">
              <div className="grid lg:grid-cols-2 gap-0">
                {project.videoAvailable ? (
                  <div className="relative group/video" ref={videoContainerRef}>
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                      {isPlaying && userInteracted ? (
                        <div className="w-full h-full flex justify-center items-center relative">
                          <YouTube videoId={project.youtubeId} opts={opts} onReady={onPlayerReady} onStateChange={onPlayerStateChange} className="w-full h-full" />
                          <div className="absolute bottom-4 left-4 flex gap-2">
                            <button onClick={togglePlay} className="p-2 rounded-full bg-gray-900/80 text-white hover:bg-gray-800 transition-colors z-10">
                              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                            </button>
                            <button onClick={toggleMute} className="p-2 rounded-full bg-gray-900/80 text-white hover:bg-gray-800 transition-colors z-10">
                              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                            </button>
                          </div>
                          <button onClick={toggleFullscreen} className="absolute top-4 right-4 p-2 rounded-full bg-gray-900/80 text-white hover:bg-gray-800 transition-colors z-10">
                            <Maximize2 className="w-5 h-5" />
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
                            {project.youtubeId && (
                              <img src={getYouTubeThumbnail(project.youtubeId, project.id === 3 || project.id === 10)} alt="YouTube thumbnail" className="w-full h-full object-cover opacity-70" onError={(e) => { e.target.onerror = null; e.target.src = "/placeholder-image.jpg"; }} />
                            )}
                          </div>
                          <Button size="lg" className={`absolute bg-gradient-to-r ${project.gradient} hover:scale-110 text-white border-0 rounded-full w-20 h-20 group-hover/video:scale-125 transition-all duration-300 shadow-2xl z-10`} onClick={() => { setUserInteracted(true); setIsPlaying(true); if (project.id === 11) { setIsMuted(false); } }}>
                            <Play className="w-8 h-8 ml-1" />
                          </Button>
                        </>
                      )}
                      <div className="absolute inset-0 bg-black/20 group-hover/video:bg-black/10 transition-colors duration-300"></div>
                      <div className="absolute top-4 left-4">
                        <Badge className={`${project.status === "Live" ? "bg-green-500/20 text-green-400 border-green-500/30" : project.status === "Demo" ? "bg-blue-500/20 text-blue-400 border-blue-500/30" : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"} backdrop-blur-sm`}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 flex gap-3">
                      {project.liveUrl && (
                        <Button size="sm" className="bg-gray-900/80 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 backdrop-blur-sm group" onClick={() => window.open(project.liveUrl, "_blank")}>
                          <ExternalLink className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                          Live Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="outline" className="bg-gray-900/80 border-gray-600 text-gray-300 hover:border-purple-500/50 hover:text-purple-400 backdrop-blur-sm group" onClick={() => window.open(project.githubUrl, "_blank")}>
                          <Github className="w-4 h-4 mr-2 group-hover:animate-spin" />
                          GitHub
                        </Button>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                      <Code className="w-16 h-16 text-white opacity-50 mb-2" />
                      <p className="text-white text-lg font-medium">Video not added yet</p>
                    </div>
                  </div>
                )}
                <div className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className={`text-3xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>{project.title}</h3>
                        <p className="text-gray-300 text-lg">{project.subtitle}</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{project.startDate} - {project.endDate}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-200 leading-relaxed">{project.description}</p>
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                          <div key={index} className="flex items-center gap-3 group">
                            <div className="p-2 rounded-lg bg-gray-800/50 border border-gray-600 group-hover:border-cyan-500/50 transition-colors duration-200">
                              <IconComponent className={`w-4 h-4 ${feature.color}`} />
                            </div>
                            <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-200">{feature.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} className="bg-gray-800/50 text-gray-300 border-gray-600 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors duration-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold">Project Metrics:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Performance</span>
                          <span className="text-cyan-400 font-semibold">{project.metrics.performance}%</span>
                        </div>
                        <Progress value={project.metrics.performance} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Security</span>
                          <span className="text-green-400 font-semibold">{project.metrics.security}%</span>
                        </div>
                        <Progress value={project.metrics.security} className="h-2" />
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-cyan-400">{project.metrics.users}</div>
                        <div className="text-xs text-gray-400">Active Users</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-400">{project.metrics.uptime}</div>
                        <div className="text-xs text-gray-400">Uptime</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex items-center justify-center gap-8 mt-12">
            <Button size="lg" variant="outline" className="border-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 backdrop-blur-sm group relative overflow-hidden" onClick={prevProject}>
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="ml-2">Previous</span>
            </Button>
            <div className="flex gap-3">
              {projects.map((_, index) => (
                <button key={index} onClick={() => goToProject(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentProject ? "bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50" : "bg-gray-600 hover:bg-gray-500"}`} />
              ))}
            </div>
            <Button size="lg" variant="outline" className="border-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 backdrop-blur-sm group relative overflow-hidden" onClick={nextProject}>
              <span className="mr-2">Next</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {projects.map((proj, index) => (
              <Card key={proj.id} className={`cursor-pointer transition-all duration-300 overflow-hidden group ${index === currentProject ? "ring-2 ring-cyan-400 scale-105 shadow-xl shadow-cyan-400/20" : "hover:scale-105 hover:shadow-lg"}`} onClick={() => goToProject(index)}>
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${proj.gradient} opacity-20`}></div>
                    <div className="text-center relative z-10 w-full h-full">
                      {proj.youtubeId ? (
                        <>
                          <img src={getYouTubeThumbnail(proj.youtubeId, proj.id === 3 || proj.id === 10)} alt="YouTube thumbnail" className="w-full h-full object-cover opacity-70" onError={(e) => { e.target.onerror = null; e.target.src = "/placeholder-image.jpg"; }} />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg className="w-12 h-12 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                          </div>
                        </>
                      ) : (
                        <>
                          <Code className="w-8 h-8 text-white mx-auto mb-2" />
                          <p className="text-white text-xs font-medium">{proj.title}</p>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
