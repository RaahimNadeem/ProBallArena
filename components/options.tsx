"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Options() {
  return (
    <div className="h-screen w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full">
          
          {/* Padel Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-full w-full overflow-hidden group"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/Padel.jpg"
                alt="Padel Court"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                quality={100}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
              {/* Top Left - Sport Name and Description */}
              <div className="space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight"
                >
                  PADEL
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-white/90 text-base md:text-lg max-w-sm leading-relaxed"
                >
                  Experience the fastest growing racquet sport in the world. Perfect blend of tennis and squash with glass walls and strategic gameplay.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-4"
                >
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    PKR 5,000/hour
                  </p>
                </motion.div>
              </div>

              {/* Bottom Right - Book Now Button */}
              <div className="flex justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Button 
                    className="bg-[#5fcf6a] hover:bg-[#4fb85a] text-black font-bold px-8 py-3 md:px-10 md:py-4 text-base md:text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    BOOK NOW
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Cricket Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-full w-full overflow-hidden group"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/Cricket.jpg"
                alt="Cricket Field"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                quality={100}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
              {/* Top Left - Sport Name and Description */}
              <div className="space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight"
                >
                  CRICKET
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-white/90 text-base md:text-lg max-w-sm leading-relaxed"
                >
                  Enjoy the gentleman's game on our professional cricket facilities. Perfect for casual matches, training sessions, and tournaments.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-4"
                >
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    PKR 4,000/hour
                  </p>
                </motion.div>
              </div>

              {/* Bottom Right - Book Now Button */}
              <div className="flex justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Button 
                    className="bg-[#5fcf6a] hover:bg-[#4fb85a] text-black font-bold px-8 py-3 md:px-10 md:py-4 text-base md:text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    BOOK NOW
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
    </div>
  );
} 