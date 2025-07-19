"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform to show all 4 slides (3 slides worth of movement)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

  return (
    <div ref={containerRef} className="relative bg-[#5fcf6a]">
      <div className="h-[400vh] relative">
        <div className="slides w-full h-screen overflow-hidden sticky top-0 left-0 flex">
          <motion.div 
            style={{ x }}
            className="flex h-full w-[400%]"
          >
                        {/* Slide 1: Introduction */}
            <div className="w-full h-screen flex items-center justify-center flex-shrink-0 relative">
              <div className="text-center relative">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none">
                  ABOUT US
                </h1>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                  Real Padel, Real Impact
                </h2>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute w-20 h-20 md:w-24 md:h-24 top-1/4 right-16 md:right-20 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl md:text-3xl">🎾</span>
                </div>
                
                <div className="absolute w-16 h-16 md:w-20 md:h-20 bottom-1/4 left-16 md:left-20 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl md:text-2xl">🏆</span>
                </div>
            </div>

            {/* Slide 2: Players Served */}
            <div className="w-full h-screen flex items-center justify-center flex-shrink-0 relative">
              <div className="text-center relative">
                <h3 className="text-lg md:text-xl font-semibold text-black max-w-md mx-auto">
                  We're on a mission to bring world-class padel to Pakistan and build the best facility while we do it.
                </h3>
                
                <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-white leading-none">
                  2.5K+
                </h1>
                
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight">
                  Players Served Monthly
                </h3>
              </div>

              {/* Decorative Elements */}
              <div className="absolute w-18 h-18 md:w-22 md:h-22 top-20 left-16 md:left-20 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl md:text-2xl">⚡</span>
              </div>
              
              <div className="absolute w-20 h-20 md:w-24 md:h-24 bottom-20 right-16 md:right-20 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl">🌟</span>
              </div>
                
            </div>

            {/* Slide 3: Court Quality */}
            <div className="w-full h-screen flex items-center justify-center flex-shrink-0 relative">
              <div className="text-center relative">
                <h3 className="text-lg md:text-xl font-semibold text-black max-w-md mx-auto">
                  Our courts meet international standards with premium surfaces and professional lighting.
                </h3>
                
                <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-white leading-none">
                  4
                </h1>
                
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight">
                  Professional Grade Courts
                </h3>
              </div>

              {/* Decorative Elements */}
              <div className="absolute w-20 h-20 md:w-24 md:h-24 top-16 right-16 md:right-20 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl">🏅</span>
              </div>
              
              <div className="absolute w-16 h-16 md:w-20 md:h-20 bottom-16 left-16 md:left-20 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg md:text-xl">🎯</span>
              </div>
            </div>

            {/* Slide 4: Community Impact */}
            <div className="w-full h-screen flex items-center justify-center flex-shrink-0 relative">
              <div className="text-center relative">
                <h3 className="text-lg md:text-xl font-semibold text-black max-w-md mx-auto">
                  Building the largest padel community in Lahore with players from all backgrounds.
                </h3>
                
                <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-white leading-none">
                  100%
                </h1>
                
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight">
                  Customer Satisfaction Rate
                </h3>
              </div>

              {/* Decorative Elements */}
              <div className="absolute w-20 h-20 md:w-24 md:h-24 top-20 left-16 md:left-20 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl">❤️</span>
              </div>
              
              <div className="absolute w-16 h-16 md:w-20 md:h-20 bottom-20 right-16 md:right-20 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg md:text-xl">🎉</span>
              </div>
              
              <div className="absolute w-18 h-18 md:w-22 md:h-22 top-1/2 right-32 md:right-40 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl md:text-2xl">🚀</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 