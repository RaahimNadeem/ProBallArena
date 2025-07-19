"use client";

import { motion } from "framer-motion";

export function SloganAlt() {
  return (
    <div className="bg-white relative py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-full"
      >
        <div className="w-full max-w-none space-y-8">
          {/* Row 1 - Center Aligned */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center px-6 md:px-8"
          >
            <h2 className="text-black text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tight leading-none">
              THE BEST
            </h2>
          </motion.div>

          {/* Separator */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="w-full h-px bg-black"
          />

          {/* Row 2 - Left Aligned */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-left px-6 md:px-8"
          >
            <h2 className="text-[#5fcf6a] text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tight leading-none">
              PADEL FACILITY
            </h2>
          </motion.div>

          {/* Separator */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="w-full h-px bg-black"
          />

          {/* Row 3 - Right Aligned */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-right px-6 md:px-8"
          >
            <h2 className="text-black text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tight leading-none">
              IN LAHORE
            </h2>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 