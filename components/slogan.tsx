"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

export function Slogan() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="py-16 min-h-[120vh] md:py-20 bg-white relative flex items-center justify-center">
      {/* Large Background Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-black/20 leading-none tracking-tight uppercase">
            <span className="block">THE BEST</span>
            <span className="block">PADEL FACILITY</span>
            <span className="block">IN LAHORE</span>
          </h1>
        </div>
      </motion.div>

      {/* Video Container */}
      <div className="relative w-full max-w-sm mx-auto aspect-[9/14] z-10">
        <video
          ref={videoRef}
          className="w-full h-full object-cover shadow-2xl"
          muted
          loop
          playsInline
        >
          <source src="/Slogan.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Text Overlay Inside Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute inset-0 flex items-center justify-center bg-black/30"
        >
          <div className="text-center px-6">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight tracking-wide uppercase drop-shadow-lg"
            >
              <span className="block">THE BEST PADEL FACILLITY IN LAHORE</span>
              
            </motion.h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 