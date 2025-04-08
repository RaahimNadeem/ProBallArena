"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Courts", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Events", href: "#" },
    { name: "Contact", href: "#" },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            PRO<span className="text-primary">BALL</span> ARENA
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.href} className="text-white/80 hover:text-white transition-colors">
                {item.name}
              </Link>
            ))}

            <Button className="bg-primary hover:bg-primary/90 text-black rounded-full">BOOK NOW</Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
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
                <Link href="/" className="text-2xl font-bold tracking-tighter">
                  PRO<span className="text-primary">BALL</span> ARENA
                </Link>

                <Button variant="ghost" size="icon" className="text-white" onClick={() => setIsOpen(false)}>
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
                    <Link href={item.href} className="text-2xl font-medium" onClick={() => setIsOpen(false)}>
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                  className="mt-8"
                >
                  <Button className="bg-primary hover:bg-primary/90 text-black rounded-full px-8 py-6 text-lg">
                    BOOK NOW
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

