"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import {
  GraduationCap,
  Code,
  Award,
  Calendar,
  MapPin,
  TrendingUp,
  Briefcase,
  Trophy,
  BookOpen,
  Lightbulb,
  ExternalLink,
  CheckCircle2,
  ChevronRight,
  Sparkles
} from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      company: "LeadsFlow180",
      role: "Software Developer",
      duration: "Aug 2025 - Present · 10 mos",
      location: "Boston, Massachusetts, United States · Remote",
      type: "Part-time",
      description: "Driving growth through innovative software solutions, specializing in automated lead generation systems and high-conversion landing pages.",
      highlights: ["Implemented real-time data synchronization", "Optimized database queries for 40% faster performance", "Developed reusable UI component library"]
    },
    {
      company: "CodeAlpha",
      role: "Full-stack Developer Intern",
      duration: "Jun 2025 - Aug 2025 · 3 mos",
      location: "Remote",
      type: "Internship",
      description: "Contributed to full-stack development projects, focusing on responsive frontend designs and robust backend API integrations.",
      highlights: ["Built dynamic dashboards with React", "Integrated third-party payment gateways", "Streamlined CI/CD deployment pipelines"]
    },
    {
      company: "Arch Technologies",
      role: "FULL STACK DEVELOPMENT INTERN",
      duration: "Jun 2025 - Aug 2025 · 3 mos",
      location: "Remote",
      type: "Internship",
      description: "Focused on developing scalable web applications and enhancing user experiences through modern JavaScript frameworks.",
      highlights: ["Collaborated on microservices architecture", "Implemented automated unit testing", "Improved SEO rankings by 25% through performance tuning"]
    },
  ]

  const coursework = [
    { name: "Distributed Systems", progress: 95, icon: "🌐" },
    { name: "Artificial Intelligence", progress: 92, icon: "🤖" },
    { name: "Database Management", progress: 90, icon: "🗄️" },
    { name: "Software Engineering", progress: 94, icon: "⚙️" },
    { name: "Web Technologies", progress: 96, icon: "🌍" },
    { name: "Machine Learning", progress: 88, icon: "🧠" },
  ]

  const certifications = [
    {
      name: "Introduction to Generative AI",
      issuer: "Google Cloud",
      link: "https://drive.google.com/file/d/1KDyuq2pCTR7NKEx2UxcL4Qn7lwyjZiuv/view?usp=sharing"
    },
    {
      name: "Front-End Development",
      issuer: "Meta",
      link: "https://coursera.org/share/82d4d66418ed351b6c38dd79ab2fd9bd"
    },
    {
      name: "Advanced Theoretical JavaScript",
      issuer: "codedamn",
      link: "https://codedamn.com/certificate/verify/1d6bce6e754a4cf6db8ab82f184f32e0e2d60a9c"
    }
  ]

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Resume</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Experience & Education</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A track record of academic excellence combined with high-impact professional experience in software engineering.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Experience */}
          <div className="lg:col-span-7 space-y-12">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Briefcase className="w-6 h-6 text-primary" />
               </div>
               <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>

            <div className="relative space-y-8">
              <div className="absolute left-[23px] top-4 bottom-4 w-px bg-white/5"></div>
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-14 group">
                  <div className="absolute left-0 top-1 w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center z-10 transition-all group-hover:border-primary/50 group-hover:scale-110">
                    <span className="text-sm font-bold text-gray-500 group-hover:text-primary">{index + 1}</span>
                  </div>

                  <div className="glass rounded-[2rem] p-8 border border-white/5 transition-all duration-500 hover:border-white/10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                        <div className="flex items-center gap-2 text-primary text-sm font-medium mt-1">
                          <span>{exp.company}</span>
                          <span className="text-gray-700">•</span>
                          <span className="text-gray-400">{exp.type}</span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        <div className="flex items-center gap-2 justify-md-end">
                           <Calendar className="w-3 h-3" />
                           <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{exp.description}</p>
                    <div className="space-y-2">
                       {exp.highlights.map((h, i) => (
                         <div key={i} className="flex items-start gap-3 text-xs text-gray-500">
                            <CheckCircle2 className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                            <span>{h}</span>
                         </div>
                       ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certs */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Education */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                    <GraduationCap className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="glass rounded-[2rem] p-8 border border-white/5">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white">B.E. Computer Science</h4>
                  <div className="flex items-center gap-2 text-secondary text-sm font-medium mt-1">
                    <span>University of Engineering</span>
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-400">2021 - 2025</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">Core Focus Areas</p>
                  <div className="grid grid-cols-1 gap-4">
                    {coursework.slice(0, 4).map((course) => (
                      <div key={course.name} className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-300 font-medium">{course.name}</span>
                          <span className="text-secondary font-bold">{course.progress}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-secondary rounded-full" style={{ width: `${course.progress}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-8 pt-8">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20">
                      <Trophy className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Certifications</h3>
               </div>

               <div className="space-y-4">
                  {certifications.map((cert, i) => (
                    <a 
                      key={i} 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="glass block rounded-2xl p-5 border border-white/5 hover:border-accent/30 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-bold text-white group-hover:text-accent transition-colors">{cert.name}</p>
                          <p className="text-xs text-gray-500 mt-1">{cert.issuer}</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-accent transition-all" />
                      </div>
                    </a>
                  ))}
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
