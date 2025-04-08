"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PadelBall } from "@/components/padel-ball";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ChevronDownIcon } from "lucide-react";

export default function Home() {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6],
    [1, 0, 0, 1]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6],
    [1, 0.9, 0.9, 1]
  );
  const y = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6], [0, 50, -50, 0]);

  useEffect(() => {
    if (audioRef.current) {
      if (audioEnabled) {
        audioRef.current
          .play()
          .catch((e) => console.error("Audio playback failed:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [audioEnabled]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Background Video */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/Banner.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Header */}
      <Header />

      {/* Animated Ball */}
      <PadelBall scrollYProgress={scrollYProgress} />

      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale, y }}
        className="relative h-screen flex flex-col items-center justify-center px-4 z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-secondary/10 to-accent/10 pointer-events-none"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-center relative z-10"
        >
          <span className="text-white">PRO</span>
          <span className="block text-accent">BALL</span>
          <span className="text-white">ARENA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 text-xl md:text-2xl text-center max-w-2xl text-gray-300 font-medium relative z-10"
        >
          Experience the game that's taking the world by storm
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 relative z-10"
        >
          <Link href="/booking">
            <Button className="text-lg px-8 py-6 bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-white rounded-full font-bold shadow-lg shadow-accent/20">
              BOOK NOW
            </Button>
          </Link>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6, repeat: Infinity, repeatType: "reverse", yoyo: true }}
            className="text-white text-lg animate-bounce"
          >
            <ChevronDownIcon className="mt-6 w-6 h-6" />
          </motion.div>
          <p className="text-sm text-gray-400">Scroll down to see more</p>

      </motion.section>

      
      {/* About Section Preview */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <a
                href="https://maps.app.goo.gl/AnJpkavLwkD3K5Zr5"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src="/pinlocation.png"
                  alt="Padel Court"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/20 to-accent/30 rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/70 p-6 rounded-lg text-center border border-primary/30">
                    <h3 className="text-xl font-bold mb-2">ProBall Arena</h3>
                    <p className="text-gray-300">
                      Pine Ave, Green Acres Extension
                    </p>
                    <p className="text-gray-300">
                      T & T Aabpara Housing Society, Lahore, 54000
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, x: 50 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              THE GAME{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                REDEFINED
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Padel is a racquet sport that combines elements of tennis and
              squash. Played in doubles on an enclosed court, it's easy to learn
              but challenging to master.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Our state-of-the-art facilities feature premium courts,
              professional coaching, and a vibrant community of players at all
              levels.
            </p>
            <Link href="/about">
              <Button
                variant="outline"
                className="text-white border-primary hover:bg-primary hover:text-black font-bold"
              >
                LEARN MORE
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Court Options Preview */}
      <section className="relative py-24 z-10 bg-[#1A1A1A]">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/5 to-accent/5 pointer-events-none"></div>
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              COURT{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                OPTIONS
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect court for your game. From tennis to padel to
              cricket, we have premium facilities for every sport.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "TENNIS COURT",
                price: "PKR 4,800",
                tag:"tennis",
                period: "per hour",
                features: [
                  "Professional-grade surface",
                  "LED lighting for night play",
                  "Equipment rental available",
                  "Changing rooms access",
                ],
                highlight: false,
                color: "primary",
                image: "/tennis.jpg",
              },
              {
                title: "PADEL COURT",
                price: "PKR 4,800",
                period: "per hour",
                tag:"padel",
                features: [
                  "Glass-walled enclosure",
                  "Premium artificial turf",
                  "Professional equipment",
                  "Dedicated seating area",
                ],
                highlight: true,
                color: "secondary",
                image: "/padel.jpg",
              },
              {
                title: "CRICKET GROUND",
                price: "PKR 2,500",
                period: "per hour",
                tag:"cricket",
                features: [
                  "Professional cricket pitch",
                  "Practice nets available",
                  "Equipment rental included",
                  "Pavilion access",
                ],
                highlight: false,
                color: "accent",
                image: "/cricket.jpg",
              },
            ].map((court, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={`relative rounded-xl overflow-hidden h-[500px] group ${
                  court.highlight
                    ? `bg-${court.color} text-black border-4 border-accent`
                    : "bg-white/5 border border-white/10"
                }`}
              >
                {court.highlight && (
                  <div className="absolute top-0 right-0 bg-accent text-black font-bold px-4 py-1 rounded-bl-lg z-10">
                    POPULAR
                  </div>
                )}
                <div className="absolute inset-0 h-full">
                  <Image
                    src={court.image}
                    alt={court.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40`}
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                  <div>
                    <h3 className="text-3xl font-extrabold mb-2 text-white">
                      {court.title}
                    </h3>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-extrabold text-white">
                        {court.price}
                      </span>
                      <span className="ml-2 text-sm opacity-80 text-white">
                        {court.period}
                      </span>
                    </div>
                  </div>

                  <div>
                    <ul className="space-y-3 mb-6">
                      {court.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg
                            className={`w-5 h-5 mr-2 ${
                              court.highlight
                                ? "text-secondary"
                                : `text-${court.color}`
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span
                            className={`${
                              court.highlight
                                ? "text-white font-medium"
                                : "text-white font-medium"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/booking/${court.tag}`}>
                      <Button
                        className={`w-full py-4 font-bold transition-all duration-300 ${
                          court.highlight
                            ? "bg-secondary text-white hover:bg-secondary/90 hover:scale-105"
                            : `bg-${court.color} text-white hover:bg-${court.color}/90 hover:scale-105`
                        }`}
                      >
                        BOOK NOW
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="relative py-24 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 pointer-events-none"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              JOIN THE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                MOVEMENT
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Ready to experience the fastest growing sport in the world? Visit
              our facility or contact us to learn more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button className="text-lg px-8 py-6 bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-white rounded-full font-bold shadow-lg shadow-accent/20">
                  BOOK A COURT NOW
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="text-lg px-8 py-6 text-white border-secondary hover:bg-secondary hover:text-white rounded-full font-bold"
                >
                  CONTACT US
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
