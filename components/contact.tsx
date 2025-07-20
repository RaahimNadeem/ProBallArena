"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Contact() {
  return (
    <div className="bg-white min-h-screen relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        
        {/* Left Side - Aerial Image */}
        <div className="relative h-[50vh] lg:h-screen bg-gradient-to-br from-green-400 via-green-500 to-green-600">
          <Image
            src="/Banner.jpg"
            alt="ProBall Arena Aerial View"
            fill
            className="object-cover transition-opacity duration-300"
            quality={25}
            priority={false}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx4f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyuwjRFHzSq6XTaYgsNcJdjvltnAij3xuyouu+WVU/czqvOVl+bKp5Xqaqb/k="
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Gradient overlay for better contrast and faster perceived loading */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        </div>

        {/* Right Side - Contact Information */}
        <div className="flex items-center justify-center p-8 md:p-12 lg:p-16 xl:p-20">
          <div className="max-w-lg w-full">
            
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-6 md:mb-8"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-black leading-tight">
                WOULD YOU LIKE TO KNOW MORE ABOUT THE PROBALL ARENA?
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="mb-6 md:mb-8"
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Our team is available 7 days a week to answer your questions by e-mail, telephone or WhatsApp.
              </p>
            </motion.div>

            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: 0.15, ease: "easeOut" }}
              viewport={{ once: true, margin: "-25px" }}
            >
              <Button 
                className="bg-black hover:bg-gray-800 text-white font-bold px-8 py-4 md:px-12 md:py-6 text-lg md:text-xl rounded-none transition-all duration-150 hover:scale-105 active:scale-95"
              >
                CONTACT
              </Button>
            </motion.div>

            {/* Additional Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 md:mt-8 space-y-3"
            >
              <div className="text-gray-600">
                <p className="font-semibold text-black mb-2">Contact Information:</p>
                <p>📧 info@proballarena.com</p>
                <p>📞 +92 300 1234567</p>
                <p>📱 WhatsApp: +92 300 1234567</p>
                <p>📍 Lahore, Pakistan</p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
} 