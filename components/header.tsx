"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Volume2, VolumeX } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [showBackground, setShowBackground] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBackground(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/court-ambiance.mp3')
    audioRef.current.loop = true
    
    // Clean up on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioEnabled) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error)
        })
      }
      setAudioEnabled(!audioEnabled)
    }
  }

  const menuItems = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 transition-all duration-300 ${
          showBackground ? "bg-transparent" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20"
          >
            <span className="text-white font-bold text-xl md:text-2xl">PB</span>
          </motion.div>
        </div>

        {/* Center Text */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:block"
        >
          {/* <p className="text-white/90 text-sm md:text-base font-medium tracking-wider uppercase text-center">
            PREMIER SPORTS FACILITY COMMITTED<br />
            TO THE FUTURE OF PADEL TENNIS.
          </p> */}
        </motion.div>

        {/* Menu Button */}
        <motion.button
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <Menu className="w-5 h-5 text-white" />
          <span className="text-white font-medium hidden md:block">MENU</span>
        </motion.button>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center px-6 py-4">
                <Link href="/" className="text-3xl font-extrabold tracking-tighter">
                  PRO<span className="text-accent">BALL</span> ARENA
                </Link>

                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white transition-all duration-300 hover:bg-white/10 hover:scale-110" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="flex flex-col items-center justify-center flex-1 gap-8">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`text-3xl font-bold transition-all duration-300 hover:scale-110 ${
                        pathname === item.href ? "text-accent" : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name.toUpperCase()}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                  className="mt-8"
                >
                  <Link href="/booking" onClick={() => setIsMenuOpen(false)}>
                    <Button className="bg-accent hover:bg-accent/90 text-black rounded-full px-8 py-6 text-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:scale-105">
                      BOOK NOW
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

