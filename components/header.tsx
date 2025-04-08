"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Volume2, VolumeX } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [audioEnabled, setAudioEnabled] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-2 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="text-3xl font-extrabold tracking-tighter group">
            <span className="inline-block transition-transform duration-300 group-hover:scale-105">PRO</span>
            <span className="inline-block text-accent transition-transform duration-300 group-hover:scale-110">BALL</span>
            <span className="inline-block transition-transform duration-300 group-hover:scale-105"> ARENA</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-white/90 hover:text-white transition-all duration-300 font-bold relative group ${
                  pathname === item.href ? "text-accent" : ""
                }`}
              >
                {item.name.toUpperCase()}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-black hover:bg-accent transition-all duration-300 relative overflow-hidden group"
              onClick={toggleAudio}
            >
              <span className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                {audioEnabled ? (
                  <Volume2 className="h-5 w-5" />
                ) : (
                  <VolumeX className="h-5 w-5" />
                )}
              </span>
            </Button>

            <Link href="/booking">
              <Button className="bg-accent hover:bg-accent/90 text-black rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:scale-105">
                BOOK NOW
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-black hover:bg-accent transition-all duration-300 relative overflow-hidden group"
              onClick={toggleAudio}
            >
              <span className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                {audioEnabled ? (
                  <Volume2 className="h-5 w-5" />
                ) : (
                  <VolumeX className="h-5 w-5" />
                )}
              </span>
            </Button>

            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white transition-all duration-300 hover:bg-white/10 hover:scale-110" 
              onClick={() => setIsOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
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
                  onClick={() => setIsOpen(false)}
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
                      onClick={() => setIsOpen(false)}
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
                  <Link href="/booking" onClick={() => setIsOpen(false)}>
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

