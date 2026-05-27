"use client"

import { useState, useEffect } from "react"
import { Menu, X, Lock, Linkedin, Github, Mail, ShieldCheck, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showAdminModal, setShowAdminModal] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)

  const ADMIN_PASSWORD = "gocscs@041";
  const CONTACT_LINKS = {
    linkedin: "https://www.linkedin.com/in/muhammad-daniyal-imtiaz-2b3180283/",
    github: "https://github.com/Muhammad-Daniyal-Imtiaz",
    email: "mailto:daniyalimtiaz041@gmail.com"
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    // Generate random travel time between 5s and 10s
    const duration = Math.floor(Math.random() * 5000) + 5000;
    
    // Trigger warp travel effect with destination and duration
    window.dispatchEvent(new CustomEvent('warp-travel', {
      detail: {
        duration,
        destination: sectionId.toUpperCase() + ' SECTOR'
      }
    }));

    setIsMobileMenuOpen(false);

    // Delay the scroll until the spaceship arrives
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
      }
    }, duration);
  }

  const handleAdminLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true)
      fetchMessages()
    } else {
      setError('Incorrect password')
    }
  }

  const fetchMessages = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/fetmessage', {
        headers: { 'Authorization': `Bearer ${password}` }
      })
      if (!response.ok) throw new Error('Failed to fetch')
      const data = await response.json()
      setMessages(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="fixed top-6 left-0 w-full z-[100] px-6">
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`mx-auto max-w-5xl transition-all duration-500 rounded-[2rem] border ${
            isScrolled 
              ? "bg-black/60 backdrop-blur-xl border-white/10 py-3 px-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
              : "bg-transparent border-transparent py-4 px-4"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center rotate-3 group-hover:rotate-0 transition-all duration-500">
                <span className="text-black font-black text-xl">D</span>
              </div>
              <span className="text-xl font-bold tracking-tighter text-white hidden sm:block">Daniyal<span className="text-accent">.</span></span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-2 bg-white/5 p-1 rounded-2xl border border-white/5">
              {["Experience", "Skills", "Hackathons", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <div className="hidden lg:flex items-center gap-1">
                <a href={CONTACT_LINKS.github} target="_blank" className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all"><Github size={18} /></a>
                <a href={CONTACT_LINKS.linkedin} target="_blank" className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all"><Linkedin size={18} /></a>
              </div>
              <button
                onClick={() => setShowAdminModal(true)}
                className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-400 hover:text-accent hover:bg-accent/5 transition-all"
              >
                <ShieldCheck size={20} />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl glass text-white"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="pt-6 pb-4 space-y-2">
                  {["Experience", "Skills", "Hackathons", "Projects", "Contact"].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="w-full text-left px-6 py-4 rounded-2xl text-lg font-bold text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      </div>

      {/* Admin Modal (Simplified logic remains same, UI improved) */}
      <AnimatePresence>
        {showAdminModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md" 
              onClick={() => setShowAdminModal(false)} 
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-lg glass rounded-[2rem] md:rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl mx-4"
            >
              <div className="p-6 md:p-10">
                <div className="flex justify-between items-center mb-8 md:mb-10">
                  <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-white">{authenticated ? "Inbound Messages" : "Control Center"}</h2>
                  <button onClick={() => setShowAdminModal(false)} className="w-8 h-8 md:w-10 md:h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white shrink-0"><X size={20} /></button>
                </div>

                {authenticated ? (
                  <div className="space-y-6">
                    <div className="max-h-[50vh] overflow-y-auto pr-4 space-y-4 custom-scrollbar">
                      {messages.map((m) => (
                        <div key={m.id} className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="font-bold text-accent">{m.name}</h4>
                            <span className="text-[10px] text-gray-500 font-mono">{new Date(m.created_at).toLocaleDateString()}</span>
                          </div>
                          <p className="text-sm text-gray-300 mb-4 leading-relaxed">{m.message}</p>
                          <a href={`mailto:${m.email}`} className="text-[10px] font-bold text-gray-500 hover:text-white flex items-center gap-2 uppercase tracking-widest"><Mail size={12} /> {m.email}</a>
                        </div>
                      ))}
                    </div>
                    <button onClick={() => setAuthenticated(false)} className="w-full py-4 rounded-2xl glass border-white/10 text-white font-bold hover:bg-red-500/10 hover:text-red-500 transition-all">System Logout</button>
                  </div>
                ) : (
                  <form onSubmit={handleAdminLogin} className="space-y-6">
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Access Key</label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-accent/50 text-white placeholder:text-gray-700"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                    {error && <p className="text-red-500 text-xs font-medium ml-1">{error}</p>}
                    <button type="submit" className="w-full py-5 rounded-2xl bg-accent text-black font-black uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all">Verify Identity</button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}