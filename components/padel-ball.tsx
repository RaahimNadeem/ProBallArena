"use client"

import { useRef } from "react"
import { motion, type MotionValue, useTransform } from "framer-motion"

interface PadelBallProps {
  scrollYProgress: MotionValue<number>
}

export function PadelBall({ scrollYProgress }: PadelBallProps) {
  const ballRef = useRef<HTMLDivElement>(null)

  // Transform scroll progress to x position (bouncing horizontally)
  const x = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], ["0vw", "70vw", "20vw", "60vw", "10vw", "80vw"])

  // Transform scroll progress to y position (bouncing vertically)
  const y = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    ["80vh", "30vh", "70vh", "20vh", "60vh", "30vh", "70vh", "20vh", "60vh", "40vh", "20vh"],
  )

  // Transform scroll progress to rotation
  const rotate = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 180, 360, 540, 720, 900])

  // Transform scroll progress to scale (ball gets slightly bigger and smaller)
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [1, 1.2, 0.9, 1.1, 0.8, 1])

  return (
    <motion.div
      ref={ballRef}
      style={{ x, y, rotate, scale }}
      className="fixed z-20 w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary shadow-lg shadow-primary/50 pointer-events-none overflow-hidden"
    >
      {/* Tennis ball texture */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        {/* Tennis ball curved lines with outward curvature */}
        <div className="absolute top-0 left-0 right-0 bottom-0">
          {/* Left curved line */}
          <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-white/80 rounded-full" 
               style={{ 
                 clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                 transform: 'perspective(100px) rotateY(-15deg)'
               }}></div>
          {/* Right curved line */}
          <div className="absolute top-0 bottom-0 right-1/3 w-1 bg-white/80 rounded-full"
               style={{ 
                 clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                 transform: 'perspective(100px) rotateY(15deg)'
               }}></div>
        </div>
        
        {/* Tennis ball fuzz texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)]"></div>
        
        {/* Subtle highlights */}
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-white/10"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1/3 h-1/3 rounded-full bg-white/5"></div>
      </div>
    </motion.div>
  )
}

