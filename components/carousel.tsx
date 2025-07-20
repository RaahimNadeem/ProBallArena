"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Carousel() {
  // Array of carousel images
  const carouselImages = [
    "/carousel/2025-03-22.webp",
    "/carousel/2025-03-22 (1).webp", 
    "/carousel/2025-04-04.webp",
    "/carousel/2025-04-04 (1).webp",
    "/carousel/2025-04-04 (2).webp"
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...carouselImages, ...carouselImages];

  return (
    <div className="bg-white min-h-screen py-16 md:py-20 lg:py-36 xl:py-48 relative z-10">
      {/* Top Left Text */}
      <div className="mb-12 md:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-relaxed max-w-4xl"
        >
          A shared space for sport and spirit — for the game and the people who love it.
        </motion.p>
      </div>

      {/* Horizontal Sliding Carousel with Individual Frames - Edge to Edge */}
      <div className="relative h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden w-full">
          <motion.div
            className="flex gap-3 md:gap-4 h-full items-center"
            animate={{
              x: [0, -1500], // Move from right to left
            }}
            transition={{
              duration: 20, // Smooth movement
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 relative w-[200px] sm:w-[250px] md:w-[300px] h-[240px] sm:h-[300px] md:h-[360px]  overflow-hidden bg-white shadow-md border border-gray-100"
              >
                <Image
                  src={image}
                  alt={`Carousel image ${(index % carouselImages.length) + 1}`}
                  fill
                  className="object-cover"
                  quality={100}
                  priority={index < carouselImages.length}
                />
              </div>
            ))}
          </motion.div>
        </div>
    </div>
  );
} 