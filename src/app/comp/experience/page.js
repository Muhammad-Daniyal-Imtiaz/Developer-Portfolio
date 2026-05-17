"use client"

import { motion } from "framer-motion"
import { 
  Briefcase, 
  GraduationCap, 
  Trophy, 
  Calendar, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles,
  ArrowUpRight,
  MapPin
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ExperienceSection() {
  const experiences = [
    {
      company: "LeadsFlow180",
      role: "Software Developer",
      duration: "Aug 2025 - Present",
      location: "Boston, US (Remote)",
      type: "Part-time",
      description: "Leading the development of high-conversion lead generation ecosystems and automated sales funnels.",
      highlights: [
        "Architected real-time data sync pipeline",
        "Optimized DB latency by 40% via advanced indexing",
        "Built a modular enterprise UI component library"
      ],
      color: "accent"
    },
    {
      company: "CodeAlpha",
      role: "Full-stack Intern",
      duration: "Jun 2025 - Aug 2025",
      location: "Remote",
      type: "Internship",
      description: "Developed production-ready features for core SaaS dashboards and API integrations.",
      highlights: [
        "Implemented secure JWT auth flows",
        "Integrated multi-currency payment gateways",
        "Reduced build times by 30% using Turbopack"
      ],
      color: "primary"
    },
    {
      company: "Arch Technologies",
      role: "Full Stack Intern",
      duration: "Jun 2025 - Aug 2025",
      location: "Remote",
      type: "Internship",
      description: "Focused on modernizing legacy systems and enhancing SEO performance.",
      highlights: [
        "Refactored PHP monolith to Next.js microservices",
        "Boosted SEO core web vitals by 25 points",
        "Automated deployment via GitHub Actions"
      ],
      color: "secondary"
    },
  ]

  const certifications = [
    {
      name: "Generative AI Fundamentals",
      issuer: "Google Cloud",
      link: "https://drive.google.com/file/d/1KDyuq2pCTR7NKEx2UxcL4Qn7lwyjZiuv/view?usp=sharing"
    },
    {
      name: "Professional Front-End",
      issuer: "Meta",
      link: "https://coursera.org/share/82d4d66418ed351b6c38dd79ab2fd9bd"
    },
    {
      name: "Theoretical JavaScript",
      issuer: "Codedamn",
      link: "https://codedamn.com/certificate/verify/1d6bce6e754a4cf6db8ab82f184f32e0e2d60a9c"
    }
  ]

  return (
    <section id="experience" className="py-32 relative bg-[#080808]">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Column: Vertical Timeline */}
          <div className="lg:col-span-8">
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                <Sparkles className="w-3 h-3 text-accent" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Professional Path</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Work Experience</h2>
              <p className="text-gray-500 max-w-xl">
                A track record of high-impact roles where I've delivered scalable code and modern user experiences.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8 relative">
              {/* Timeline Line */}
              <div className="absolute left-[19px] md:left-[31px] top-8 bottom-8 w-px bg-gradient-to-b from-accent/50 via-white/5 to-transparent"></div>

              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-14 md:pl-20 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-2 w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl glass border border-white/10 flex items-center justify-center z-10 transition-all group-hover:border-accent/50 group-hover:scale-110 shadow-2xl">
                    <Briefcase className={`w-4 h-4 md:w-6 md:h-6 text-${exp.color}`} />
                  </div>

                  <div className="glass rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border border-white/5 hover:border-white/10 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 md:p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                       <Briefcase size={80} className="md:w-[120px] md:h-[120px]" />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 mb-6 md:mb-8">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{exp.role}</h3>
                          <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm font-medium">
                            <span className="text-accent">{exp.company}</span>
                            <div className="w-1 h-1 rounded-full bg-gray-700 hidden sm:block"></div>
                            <span className="text-gray-400 flex items-center gap-1.5 w-full sm:w-auto mt-1 sm:mt-0">
                              <MapPin className="w-3.5 h-3.5" /> {exp.location}
                            </span>
                          </div>
                        </div>
                        <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl bg-white/5 border border-white/10 text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap self-start md:self-auto mt-2 md:mt-0">
                          {exp.duration}
                        </div>
                      </div>

                      <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6 md:mb-8 max-w-2xl">
                        {exp.description}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                        {exp.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-white/10 transition-all">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span className="text-[11px] md:text-xs text-gray-500 leading-relaxed">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certs */}
          <div className="lg:col-span-4 space-y-10 md:space-y-12">
            
            {/* Education Bento Box */}
            <div>
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                <h3 className="text-xl md:text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="glass rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border border-white/5 relative overflow-hidden group">
                <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[40px] md:blur-[60px]"></div>
                
                <div className="relative z-10">
                  <Badge variant="outline" className="mb-4 md:mb-6 rounded-lg glass border-primary/20 text-primary px-3 py-1 text-xs">2021 - 2025</Badge>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-2">B.E. Computer Science</h4>
                  <p className="text-gray-400 text-xs md:text-sm mb-6 md:mb-8 leading-relaxed">
                    Focused on scalable systems, deep learning architectures, and modern web engineering.
                  </p>

                  <div className="space-y-4">
                    {[
                      { name: "Distributed Systems", score: 95 },
                      { name: "Artificial Intelligence", score: 92 },
                      { name: "Software Engineering", score: 94 }
                    ].map((item) => (
                      <div key={item.name} className="space-y-2">
                        <div className="flex justify-between text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-500">
                          <span>{item.name}</span>
                          <span className="text-primary">{item.score}%</span>
                        </div>
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.score}%` }}
                            className="h-full bg-primary" 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications List */}
            <div>
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <Trophy className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                <h3 className="text-xl md:text-2xl font-bold text-white">Certifications</h3>
              </div>

              <div className="space-y-3 md:space-y-4">
                {certifications.map((cert, i) => (
                  <motion.a 
                    key={i}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass flex items-center justify-between p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/5 hover:border-accent/30 hover:bg-white/[0.02] transition-all group"
                  >
                    <div>
                      <p className="text-xs md:text-sm font-bold text-white mb-1 group-hover:text-accent transition-colors">{cert.name}</p>
                      <p className="text-[9px] md:text-[10px] text-gray-500 font-medium uppercase tracking-widest">{cert.issuer}</p>
                    </div>
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl glass border border-white/10 flex items-center justify-center text-gray-600 group-hover:text-accent group-hover:border-accent/20 transition-all shrink-0 ml-4">
                      <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
