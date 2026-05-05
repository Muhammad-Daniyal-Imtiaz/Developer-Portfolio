"use client"

import { useState, useEffect } from "react"
import { Menu, X, Lock, Linkedin, Github, Mail, Phone } from "lucide-react"

function Button({ variant = "default", size = "default", className, children, ...props }) {
  const variants = {
    default: "bg-primary text-white hover:bg-primary/90 shadow-sm",
    ghost: "bg-transparent hover:bg-white/5 text-gray-300 hover:text-white",
    outline: "border border-white/10 hover:bg-white/5 text-gray-300 hover:text-white",
  }

  const sizes = {
    default: "h-10 px-5 py-2",
    sm: "h-9 px-3 text-xs",
    lg: "h-11 px-8",
    icon: "h-10 w-10",
  }

  const buttonClasses = `
    inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
    disabled:opacity-50 disabled:pointer-events-none active:scale-95
    ${variants[variant] || variants.default}
    ${sizes[size] || sizes.default}
    ${className || ""}
  `

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
}

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
    whatsapp: "https://wa.me/923265608168",
    linkedin: "https://www.linkedin.com/in/muhammad-daniyal-imtiaz-2b3180283/",
    github: "https://github.com/Muhammad-Daniyal-Imtiaz",
    email: "mailto:daniyalimtiaz041@gmail.com"
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false)
  }

  const handleAdminLogin = (e) => {
    e.preventDefault()
    setError('')
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
        headers: {
          'Authorization': `Bearer ${password}`
        }
      })
      if (!response.ok) throw new Error('Failed to fetch messages')
      const data = await response.json()
      setMessages(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    setAuthenticated(false)
    setShowAdminModal(false)
    setPassword('')
    setMessages([])
    setError('')
  }

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "py-3 bg-background/80 backdrop-blur-md border-b border-white/5" : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
              >
                <span className="text-gradient">Daniyal.</span>
              </button>
              
              <div className="hidden lg:flex items-center gap-5 border-l border-white/10 pl-8">
                <a href={CONTACT_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={18} /></a>
                <a href={CONTACT_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={18} /></a>
                <a href={CONTACT_LINKS.email} className="text-gray-400 hover:text-white transition-colors"><Mail size={18} /></a>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {["About", "Skills", "Projects", "Experience"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              
              <button
                onClick={() => setShowAdminModal(true)}
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
              >
                <Lock size={18} />
              </button>
            </nav>

            <button
              className="md:hidden text-gray-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 glass rounded-2xl p-6 animate-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col gap-6">
                {["About", "Skills", "Projects", "Experience"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-lg font-medium text-gray-300 hover:text-white text-left"
                  >
                    {item}
                  </button>
                ))}
                <div className="pt-4 border-t border-white/10 flex gap-6">
                   <a href={CONTACT_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
                   <a href={CONTACT_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Github size={20} /></a>
                   <a href={CONTACT_LINKS.email} className="text-gray-400 hover:text-white"><Mail size={20} /></a>
                   <button onClick={() => setShowAdminModal(true)} className="text-gray-400 hover:text-white"><Lock size={20} /></button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {showAdminModal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100] flex items-center justify-center p-6">
          <div className="glass rounded-3xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">{authenticated ? "Inbox" : "Admin Portal"}</h2>
                <button onClick={() => setShowAdminModal(false)} className="text-gray-400 hover:text-white"><X size={24} /></button>
              </div>

              {authenticated ? (
                <div className="space-y-4">
                  {loading ? (
                    <div className="flex justify-center py-12"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-primary"></div></div>
                  ) : messages.length > 0 ? (
                    <div className="max-h-[50vh] overflow-y-auto pr-2 space-y-4">
                      {messages.map((message) => (
                        <div key={message.id} className="bg-white/5 rounded-2xl p-5 border border-white/5">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-primary">{message.name}</h3>
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest">{new Date(message.created_at).toLocaleDateString()}</span>
                          </div>
                          <p className="text-sm text-gray-300 mb-2">{message.message}</p>
                          <p className="text-xs text-gray-500">{message.email}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8">No messages yet.</p>
                  )}
                  <Button onClick={handleLogout} className="w-full mt-4">Logout</Button>
                </div>
              ) : (
                <form onSubmit={handleAdminLogin} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                      required
                      placeholder="••••••••"
                    />
                  </div>
                  {error && <p className="text-red-400 text-xs">{error}</p>}
                  <Button type="submit" className="w-full py-4 text-base font-bold">Access Panel</Button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}