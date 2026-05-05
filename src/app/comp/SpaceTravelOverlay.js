"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Star streak component for warp speed effect
function StarStreak({ delay, top, width, speed }) {
  return (
    <motion.div
      className="absolute h-[1px] rounded-full"
      style={{
        top: `${top}%`,
        right: 0,
        width: `${width}px`,
        background: `linear-gradient(to left, transparent, rgba(255,255,255,0.8))`,
      }}
      animate={{ x: [0, `-110vw`] }}
      transition={{
        duration: speed,
        delay,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: 0,
      }}
    />
  )
}

// The Spaceship SVG - a clean, sleek horizontal fighter
function SpaceshipSVG() {
  return (
    <svg width="180" height="80" viewBox="0 0 180 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Engine Exhaust Glow */}
      <ellipse cx="14" cy="40" rx="18" ry="6" fill="#8b5cf6" opacity="0.6" />
      <ellipse cx="8" cy="40" rx="10" ry="3" fill="#c4b5fd" opacity="0.9" />

      {/* Main Body */}
      <path d="M40 40 L170 28 L170 52 Z" fill="#1a1a2e" stroke="#6d28d9" strokeWidth="1" />

      {/* Cockpit Dome */}
      <ellipse cx="140" cy="40" rx="20" ry="14" fill="#0f172a" stroke="#22d3ee" strokeWidth="1.5" />
      <ellipse cx="144" cy="38" rx="10" ry="7" fill="#22d3ee" opacity="0.4" />
      <ellipse cx="146" cy="37" rx="5" ry="3" fill="#ffffff" opacity="0.5" />

      {/* Top Wing */}
      <path d="M80 35 L120 10 L140 28 Z" fill="#2d1b69" stroke="#7c3aed" strokeWidth="1" />

      {/* Bottom Wing */}
      <path d="M80 45 L120 70 L140 52 Z" fill="#2d1b69" stroke="#7c3aed" strokeWidth="1" />

      {/* Hull Detail Lines */}
      <line x1="60" y1="38" x2="120" y2="33" stroke="#4c1d95" strokeWidth="1" opacity="0.8" />
      <line x1="60" y1="42" x2="120" y2="47" stroke="#4c1d95" strokeWidth="1" opacity="0.8" />

      {/* Engine Nozzle */}
      <rect x="30" y="35" width="20" height="10" rx="2" fill="#374151" stroke="#6b7280" strokeWidth="0.5" />
      <rect x="26" y="37" width="8" height="6" rx="1" fill="#1f2937" />

      {/* Wing Lights */}
      <circle cx="110" cy="16" r="2" fill="#22d3ee">
        <animate attributeName="opacity" values="1;0.3;1" dur="0.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="110" cy="64" r="2" fill="#f43f5e">
        <animate attributeName="opacity" values="1;0.3;1" dur="0.6s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

export default function SpaceTravelOverlay() {
  const [travelState, setTravelState] = useState("idle") // idle | departing | traveling | arriving
  const [warpData, setWarpData] = useState(null)
  const [timeLeft, setTimeLeft] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    const handleWarp = (e) => {
      const data = e.detail || { duration: 7000, destination: "UNKNOWN" }
      setWarpData(data)
      setTimeLeft(data.duration / 1000)
      setTravelState("departing")

      // Start countdown
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 0.1) {
            clearInterval(intervalRef.current)
            return 0
          }
          return parseFloat((prev - 0.1).toFixed(1))
        })
      }, 100)

      // Shift to traveling after departure flash
      setTimeout(() => setTravelState("traveling"), 500)

      // Arrival phase (last 1.5s)
      setTimeout(() => setTravelState("arriving"), data.duration - 1500)

      // Done
      setTimeout(() => {
        setTravelState("idle")
        setWarpData(null)
        clearInterval(intervalRef.current)
      }, data.duration + 500)
    }

    window.addEventListener("warp-travel", handleWarp)
    return () => {
      window.removeEventListener("warp-travel", handleWarp)
      clearInterval(intervalRef.current)
    }
  }, [])

  const isVisible = travelState !== "idle"
  const isArriving = travelState === "arriving"
  const duration = warpData?.duration / 1000 ?? 7
  const starCount = 60

  return (
    <AnimatePresence>
      {isVisible && warpData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[999] overflow-hidden pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, #0a0a1a 0%, #000000 100%)" }}
        >
          {/* ─── STAR STREAKS (Warp Speed) ─── */}
          {Array.from({ length: starCount }).map((_, i) => (
            <StarStreak
              key={i}
              delay={Math.random() * 0.5}
              top={Math.random() * 100}
              width={Math.random() * 200 + 50}
              speed={Math.random() * 0.4 + 0.2}
            />
          ))}

          {/* ─── SPACESHIP (travels left → right) ─── */}
          <motion.div
            className="absolute"
            style={{ top: "50%", translateY: "-50%" }}
            initial={{ x: "-30vw", opacity: 0 }}
            animate={
              isArriving
                ? { x: "75vw", opacity: 1 }
                : { x: "35vw", opacity: 1 }
            }
            transition={
              isArriving
                ? { duration: 1.5, ease: [0.4, 0, 0.2, 1] }
                : { duration: duration - 1.5, ease: "linear" }
            }
          >
            {/* Engine Trail */}
            <motion.div
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full h-[3px] rounded-full"
              style={{ background: "linear-gradient(to left, #8b5cf6, transparent)" }}
              animate={{ width: ["60px", "300px", "60px"] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <SpaceshipSVG />
          </motion.div>

          {/* ─── DESTINATION CARD (comes in from right) ─── */}
          <motion.div
            className="absolute right-[8vw] top-1/2 -translate-y-1/2 flex flex-col items-center"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Planet / Orb */}
            <motion.div
              className="w-32 h-32 rounded-full mb-6 relative"
              style={{
                background: "radial-gradient(circle at 35% 35%, #7c3aed, #1e1b4b)",
                boxShadow: "0 0 60px rgba(139, 92, 246, 0.8), 0 0 120px rgba(139, 92, 246, 0.3)",
              }}
              animate={{ scale: [1, 1.06, 1], rotate: [0, 360] }}
              transition={{
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              }}
            >
              {/* Planet ring */}
              <div
                className="absolute inset-[-12px] rounded-full border-2 border-accent/40"
                style={{ transform: "rotateX(70deg)" }}
              />
              {/* Atmosphere glow */}
              <motion.div
                className="absolute inset-[-4px] rounded-full border border-accent/20"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>

            {/* Destination Name */}
            <motion.div
              className="text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping inline-block" />
                Destination
              </div>
              <div
                className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider"
                style={{ textShadow: "0 0 40px rgba(34,211,238,0.8), 0 0 80px rgba(34,211,238,0.3)" }}
              >
                {warpData.destination.replace(" SECTOR", "")}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-widest mt-2">Sector</div>
            </motion.div>

            {/* Arrival beacon lines */}
            {isArriving && (
              <motion.div
                className="absolute inset-[-30px] rounded-full border-2 border-accent/60"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: [1, 2], opacity: [1, 0] }}
                transition={{ duration: 1, repeat: 2 }}
              />
            )}
          </motion.div>

          {/* ─── HUD OVERLAY (top + bottom bars) ─── */}
          <div className="absolute inset-x-0 top-0 p-6 flex items-start justify-between">
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-400">
                Hyperspace Active
              </span>
            </motion.div>
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-right"
            >
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">Travel Time</div>
              <div
                className="text-5xl font-black tabular-nums text-white"
                style={{ textShadow: "0 0 20px rgba(255,255,255,0.5)" }}
              >
                {String(Math.floor(timeLeft)).padStart(2, "0")}.{String(Math.round((timeLeft % 1) * 10)).padStart(1, "0")}s
              </div>
            </motion.div>
          </div>

          {/* ─── PROGRESS BAR (bottom) ─── */}
          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-gray-500">Origin: HOME BASE</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-accent">
                {warpData.destination}
              </span>
            </div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden w-full">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(to right, #8b5cf6, #22d3ee)",
                  boxShadow: "0 0 12px rgba(34,211,238,0.8)",
                }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: duration, ease: "linear" }}
              />
            </div>
          </div>

          {/* ─── ARRIVAL FLASH ─── */}
          <AnimatePresence>
            {isArriving && (
              <motion.div
                className="absolute inset-0 bg-accent/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{ duration: 1.5, times: [0, 0.3, 1] }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
