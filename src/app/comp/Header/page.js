"use client"

import { useState, useEffect } from "react"
import { Menu, X, Lock, Linkedin, Github, Mail, Phone } from "lucide-react"

// Button component with cn utility included
function Button({ variant = "default", size = "default", className, children, ...props }) {
  // Variant styles
  const variants = {
    default: "bg-cyan-600 text-white hover:bg-cyan-700",
    ghost: "bg-transparent hover:bg-gray-800 text-gray-300",
    outline: "border border-gray-700 hover:bg-gray-800",
  }

  // Size styles
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3",
    lg: "h-11 px-8",
    icon: "h-10 w-10",
  }

  // Combined class names
  const buttonClasses = `
    inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500
    disabled:opacity-50 disabled:pointer-events-none
    ${variants[variant] || variants.default}
    ${sizes[size] || sizes.default}
    ${cn(className)}
  `

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
}

// cn utility function (originally from @/lib/utils)
function cn(...inputs) {
  return inputs.filter(Boolean).join(' ')
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

  const ADMIN_PASSWORD = "gocscs@041"; // Your admin password
  const CONTACT_LINKS = {
    whatsapp: "https://wa.me/923265608168",
    phone: "tel:+923265608168",
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
    element?.scrollIntoView({ behavior: "smooth" })
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
      // Replace with your actual API endpoint
      const response = await fetch('/api/fetmessage', {
        headers: {
          'Authorization': `Bearer ${password}`
        }
      })

      if (!response.ok) {
        throw new Error('Failed to fetch messages')
      }

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

  const renderSocialIcon = (platform, size = 20) => {
    const icons = {
      linkedin: <Linkedin size={size} />,
      github: <Github size={size} />,
      whatsapp: <Phone size={size} />,
      phone: <Phone size={size} />,
      email: <Mail size={size} />
    };
    return icons[platform] || null;
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-900/95 backdrop-blur-sm border-b border-cyan-500/20" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Muhammad Daniyal Imtiaz
              </div>
              
              {/* Social Links - Desktop */}
              <div className="hidden md:flex items-center gap-4">
                {/* WhatsApp Number */}
                <a 
                  href={CONTACT_LINKS.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  923265608168
                </a>
                
                {/* LinkedIn */}
                <a 
                  href={CONTACT_LINKS.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  title="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                
                {/* GitHub */}
                <a 
                  href={CONTACT_LINKS.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  title="GitHub"
                >
                  <Github size={20} />
                </a>
                
                {/* Email */}
                <a 
                  href={CONTACT_LINKS.email} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  title="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              {["About", "Skills", "Projects", "Experience"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
                </button>
              ))}
              
              {/* Admin Icon */}
              <button
                onClick={() => setShowAdminModal(true)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800/50"
                title="Admin"
              >
                <Lock size={20} />
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-cyan-400 hover:text-cyan-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-cyan-500/20">
              <div className="flex flex-col space-y-4 pt-4">
                {["About", "Skills", "Projects", "Experience"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-left py-2"
                  >
                    {item}
                  </button>
                ))}
                <div className="flex flex-col gap-3 mt-4">
                  {/* WhatsApp Number - Mobile */}
                  <a 
                    href={CONTACT_LINKS.whatsapp}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyan-400 transition-colors py-2"
                  >
                    WhatsApp: 923265608168(only WhatsApp)
                  </a>
                  
                  {/* LinkedIn - Mobile */}
                  <a 
                    href={CONTACT_LINKS.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors py-2"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn Profile</span>
                  </a>
                  
                  {/* GitHub - Mobile */}
                  <a 
                    href={CONTACT_LINKS.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors py-2"
                  >
                    <Github size={20} />
                    <span>GitHub Profile</span>
                  </a>
                  
                  {/* Email - Mobile */}
                  <a 
                    href={CONTACT_LINKS.email} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors py-2"
                  >
                    <Mail size={20} />
                    <span>daniyalimtiaz041@gmail.com</span>
                  </a>
                  
                  <button
                    onClick={() => {
                      setShowAdminModal(true)
                      setIsMobileMenuOpen(false)
                    }}
                    className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors py-2"
                  >
                    <Lock size={16} /> Admin Panel
                  </button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Admin Modal */}
      {showAdminModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg shadow-xl border border-cyan-500/30 max-w-md w-full max-h-[80vh] overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-200">
                  {authenticated ? "Messages" : "Admin Login"}
                </h2>
                <button
                  onClick={() => {
                    setShowAdminModal(false)
                    if (!authenticated) {
                      setPassword('')
                      setError('')
                    }
                  }}
                  className="text-gray-400 hover:text-gray-200"
                >
                  <X size={20} />
                </button>
              </div>

              {authenticated ? (
                <div className="space-y-4">
                  {loading ? (
                    <div className="flex justify-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-500"></div>
                    </div>
                  ) : messages.length > 0 ? (
                    <div className="max-h-[60vh] overflow-y-auto pr-2">
                      {messages.map((message) => (
                        <div key={message.id} className="bg-gray-700/50 rounded p-3 mb-3">
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium text-cyan-400">{message.name}</h3>
                            <span className="text-xs text-gray-400">
                              {new Date(message.created_at).toLocaleString()}
                            </span>
                          </div>
                          <p className="text-gray-300 text-sm mt-1">{message.message}</p>
                          <p className="text-gray-400 text-xs mt-2">{message.email}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400 text-center py-4">No messages found</p>
                  )}
                  <Button
                    onClick={handleLogout}
                    className="w-full mt-4"
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
                    />
                  </div>
                  {error && <p className="text-red-400 text-sm">{error}</p>}
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? "Authenticating..." : "Login"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}