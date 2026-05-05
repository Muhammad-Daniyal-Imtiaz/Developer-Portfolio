"use client"

import { FileText, Download, Sparkles, CheckCircle2, MessageCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CVSection({ onOpenChat }) {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/Muhammad_Daniyal_Imtiaz.pdf"
    link.download = "Muhammad_Daniyal_Imtiaz_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleOpenCV = () => {
    window.open("/Muhammad_Daniyal_Imtiaz.pdf", "_blank")
  }

  return (
    <section id="cv" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <FileText className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Resume</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Professional Profile</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive look at my technical expertise, professional journey, and the impact I&apos;ve delivered across various projects.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Preview Placeholder */}
          <div className="lg:col-span-7">
            <div className="glass rounded-[2.5rem] p-4 border border-white/5 relative group">
              <div className="aspect-[1/1.4] bg-white/5 rounded-[2rem] overflow-hidden relative">
                {/* Visual Representation of a Resume */}
                <div className="absolute inset-0 p-12 space-y-8 opacity-20">
                  <div className="h-8 w-48 bg-white/20 rounded-lg" />
                  <div className="space-y-3">
                    <div className="h-4 w-full bg-white/10 rounded" />
                    <div className="h-4 w-5/6 bg-white/10 rounded" />
                    <div className="h-4 w-4/6 bg-white/10 rounded" />
                  </div>
                  <div className="pt-8 space-y-6">
                    <div className="h-6 w-32 bg-white/20 rounded-lg" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 bg-white/5 rounded-xl" />
                      <div className="h-20 bg-white/5 rounded-xl" />
                    </div>
                  </div>
                </div>
                
                {/* Overlay Action */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Button 
                    variant="outline" 
                    className="rounded-full h-16 px-8 border-white/20 hover:bg-white hover:text-black transition-all font-bold text-lg"
                    onClick={handleOpenCV}
                  >
                    <ExternalLink className="mr-2 w-5 h-5" />
                    Full Preview
                  </Button>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-primary flex items-center justify-center shadow-2xl animate-bounce">
                <Sparkles className="text-white w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Right: Content & Actions */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white tracking-tight">Ready for New Opportunities</h3>
              <p className="text-gray-400 leading-relaxed">
                I&apos;m currently seeking roles where I can apply my Full-stack development skills and AI integration experience to solve complex business problems.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Full-stack Web Development (React/Next.js)",
                "AI/ML Integration & RAG Systems",
                "Scalable Backend Architecture",
                "Available for Remote Work"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-gray-300 font-medium">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-6">
              <Button 
                onClick={handleDownload}
                className="h-16 rounded-2xl bg-white text-black hover:bg-gray-200 transition-all font-bold text-lg"
              >
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </Button>
              
              <Button 
                variant="outline"
                onClick={onOpenChat}
                className="h-16 rounded-2xl border-white/10 hover:bg-white/5 transition-all font-bold text-lg text-white"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Ask AI about my CV
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
