"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform to show all 4 slides - mobile needs less movement due to smaller screen
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
            <div className="w-full h-screen flex items-center justify-center flex-shrink-0 relative px-4 md:px-8">
              <div className="text-center relative">
                <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none">
                  ABOUT US
                </h1>
                <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mt-2 md:mt-0">
                  Real Padel, Real Impact
                </h2>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 top-1/4 right-4 sm:right-8 md:right-20 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-lg sm:text-xl md:text-3xl">🎾</span>
                </div>
                
                <div className="absolute w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 bottom-1/4 left-4 sm:left-8 md:left-20 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm sm:text-lg md:text-2xl">🏆</span>
                </div>
              </div>

            {/* Slide 2: Players Served */}
            <div className="w-full h-screen flex items-center justify-center flex-shrink-0 relative px-4 md:px-8">
              <div className="text-center relative">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-black max-w-xs sm:max-w-sm md:max-w-md mx-auto px-2">
                  We're on a mission to bring world-class padel to Pakistan and build the best facility while we do it.
                </h3>
                
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black text-white leading-none mt-4 md:mt-2">
                  2.5K+
                </h1>
                
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black leading-tight">
                  Players Served Monthly
                </h3>
              </div>

              {/* Decorative Elements */}
              <div className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 top-16 sm:top-20 left-4 sm:left-8 md:left-20 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg sm:text-xl md:text-2xl">⚡</span>
              </div>
              
              <div className="absolute w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24 bottom-16 sm:bottom-20 right-4 sm:right-8 md:right-20 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl sm:text-2xl md:text-3xl">🌟</span>
              </div>
                
            </div>

            {/* Slide 3: Court Quality */}
            <div className="w-full h-screen flex items-center justify-center flex-shrink-0 relative px-4 md:px-8">
              <div className="text-center relative">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-black max-w-xs sm:max-w-sm md:max-w-md mx-auto px-2">
                  Our courts meet international standards with premium surfaces and professional lighting.
                </h3>
                
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black text-white leading-none mt-4 md:mt-2">
                  4
                </h1>
                
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black leading-tight">
                  Professional Grade Courts
                </h3>
              </div>

              {/* Decorative Elements */}
              <div className="absolute w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24 top-12 sm:top-16 right-4 sm:right-8 md:right-20 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl sm:text-2xl md:text-3xl">🏅</span>
              </div>
              
              <div className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bottom-12 sm:bottom-16 left-4 sm:left-8 md:left-20 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm sm:text-lg md:text-xl">🎯</span>
              </div>
            </div>

            {/* Slide 4: Community Impact */}
            <div className="w-full h-screen flex items-center justify-center flex-shrink-0 relative px-4 md:px-8">
              <div className="text-center relative">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-black max-w-xs sm:max-w-sm md:max-w-md mx-auto px-2">
                  Building the largest padel community in Lahore with players from all backgrounds.
                </h3>
                
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black text-white leading-none mt-4 md:mt-2">
                  100%
                </h1>
                
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black leading-tight">
                  Customer Satisfaction Rate
                </h3>
              </div>

              {/* Decorative Elements */}
              <div className="absolute w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24 top-16 sm:top-20 left-4 sm:left-8 md:left-20 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl sm:text-2xl md:text-3xl">❤️</span>
              </div>
              
              <div className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bottom-16 sm:bottom-20 right-4 sm:right-8 md:right-20 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm sm:text-lg md:text-xl">🎉</span>
              </div>
              
              <div className="absolute w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 top-1/2 right-16 sm:right-24 md:right-40 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg sm:text-xl md:text-2xl">🚀</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 