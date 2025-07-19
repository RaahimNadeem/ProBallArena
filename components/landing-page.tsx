"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronDownIcon, Menu } from "lucide-react";

export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/Banner.jpg"
          alt="ProBall Arena"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        
        {/* Top Descriptions */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-8">
          <div className="w-full max-w-7xl mx-auto">
            {/* Top Row with Descriptions */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8 mb-16 lg:mb-24">
             
              
            </div>

            {/* Main Heading - Centered */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1 }}
              className="text-center mb-16 lg:mb-24"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none tracking-tight">
                ULTIMATE PADEL EXPERIENCE
              </h1>
            </motion.div>

            {/* Book Now Button */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-center"
            >
              <Button 
                size="lg"
                className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-4 text-lg md:text-xl transition-all duration-300"
              >
                BOOK NOW
              </Button>
            </motion.div>

           
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDownIcon className="w-8 h-8 text-white/60 animate-bounce" />
        </motion.div>

        {/* Vertical Text */}

      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md"
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <span className="sr-only">Close</span>
              ✕
            </button>
            
            {['Home', 'About', 'Courts', 'Pricing', 'Contact'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href="#"
                  className="text-white text-2xl font-medium hover:text-white/70 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
} 