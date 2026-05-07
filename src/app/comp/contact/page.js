"use client"

import { Mail, MapPin, Phone, Sparkles } from 'lucide-react'

export default function ContactPage() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Let's Connect</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Interested in working together or have a question? I&apos;m always open to discussing new projects and opportunities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          
          {/* Info Side - Centered */}
          <div className="glass rounded-[2.5rem] p-10 border border-white/5 space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 text-center">Contact Information</h3>
              <p className="text-gray-500 text-sm text-center">Reach out via any of these channels.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Mail, label: "Email", value: "daniyalimtiaz041@gmail.com" },
                { icon: Phone, label: "Phone", value: "+923229505771" },
                { icon: MapPin, label: "Location", value: "Islamabad, Pakistan (Remote Worldwide)" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-4 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-primary/30 transition-all">
                    <item.icon className="w-6 h-6 text-gray-500 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{item.label}</p>
                    <p className="text-gray-200 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/5 flex justify-center">
              <div className="flex items-center gap-2 text-primary">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">Available for Hire</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

