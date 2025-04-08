"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function BookingPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedCourt, setSelectedCourt] = useState<string | null>(null)

  // Check if a specific court was selected from the landing page
  useEffect(() => {
    const courtType = searchParams.get("court")
    if (courtType) {
      setSelectedCourt(courtType)
    }
  }, [searchParams])

  const courts = [
    {
      id: "tennis",
      title: "TENNIS COURT",
      price: "PKR 4,800",
      period: "per hour",
      features: [
        "Professional-grade surface",
        "LED lighting for night play",
        "Equipment rental available",
        "Changing rooms access",
      ],
      color: "primary",
      image: "/tennis.jpg",
    },
    {
      id: "padel",
      title: "PADEL COURT",
      price: "PKR 4,800",
      period: "per hour",
      features: [
        "Glass-walled enclosure",
        "Premium artificial turf",
        "Professional equipment",
        "Dedicated seating area",
      ],
      color: "secondary",
      image: "/padel.jpg",
    },
    {
      id: "cricket",
      title: "CRICKET GROUND",
      price: "PKR 2,500",
      period: "per hour",
      features: [
        "Professional cricket pitch",
        "Practice nets available",
        "Equipment rental included",
        "Pavilion access",
      ],
      color: "accent",
      image: "/cricket.jpg",
    },
  ]

  const handleCourtSelection = (courtId: string) => {
    setSelectedCourt(courtId)
    router.push(`/booking/${courtId}`)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <main className=" min-h-screen pt-24 pb-16">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 mt-6 tracking-tight">
              BOOK YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">COURT</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select your preferred court type and proceed to choose your booking time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {courts.map((court, index) => (
              <motion.div
                key={court.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={`relative rounded-xl overflow-hidden h-[400px] sm:h-[600px] group cursor-pointer ${
                  selectedCourt === court.id
                    ? `border-4 border-${court.color}`
                    : "border border-white/10"
                }`}
                onClick={() => handleCourtSelection(court.id)}
              >
                <div className="absolute inset-0 h-full">
                  <Image
                    src={court.image}
                    alt={court.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                  <div>
                    <h3 className="text-3xl font-extrabold mb-2 text-white">{court.title}</h3>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-extrabold text-white">{court.price}</span>
                      <span className="ml-2 text-sm opacity-80 text-white">{court.period}</span>
                    </div>
                  </div>

                  <div>
                    <ul className="space-y-3 mb-6">
                      {court.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg
                            className={`w-5 h-5 mr-2 text-${court.color}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-white font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div
  className={`w-full rounded-lg py-4 font-bold text-center transition-all duration-300 bg-${court.color} ${
    selectedCourt === court.id ? "text-white" : "text-white"
  }`}
>

                      {selectedCourt === court.id ? "SELECTED" : "SELECT"}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}