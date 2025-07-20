"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

export function SloganAlternative() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="py-8 rounded-t-3xl sm:py-12 md:py-16 lg:py-24 bg-white relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16">
      <div id="firstpage-heading" className="space-y-1 sm:space-y-2 md:space-y-4 w-full max-w-7xl">
        {/* First line: "The best" */}
        <div className="bounding">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="boundingelem text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-none text-black text-left"
          >
            The best
          </motion.h1>
        </div>

        <div className="bounding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="boundingelem flex flex-col sm:flex-row items-start sm:items-center text-left gap-2 sm:gap-3 md:gap-4 lg:gap-6"
          >
            {/* Video container */}
            <div className="videoplay w-24 h-16 sm:w-32 sm:h-20 md:w-48 md:h-32 lg:w-56 lg:h-36 rounded-full overflow-hidden flex-shrink-0 mb-2 sm:mb-0">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/Slogan.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Text around video */}
             <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-none text-[#5fcf6a] italic">
               PADEL
             </h2>
             
             <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-none text-black italic">
               FACILITY
             </h2>
          </motion.div>
        </div>

        {/* Third line: "IN LAHORE" */}
        <div className="bounding">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="boundingelem text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-none text-black text-left"
          >
            IN LAHORE
          </motion.h1>
        </div>
      </div>
    </div>
  );
} 