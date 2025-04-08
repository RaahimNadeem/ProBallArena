"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { X } from "lucide-react"
import Image from "next/image"

interface BookingInterfaceProps {
  onClose: () => void
}

export function BookingInterface({ onClose }: BookingInterfaceProps) {
  const [step, setStep] = useState(1)
  const [selectedCourt, setSelectedCourt] = useState<number | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const courts = [
    { id: 1, name: "Court 1", image: "/placeholder.svg?height=200&width=300&text=Court1" },
    { id: 2, name: "Court 2", image: "/placeholder.svg?height=200&width=300&text=Court2" },
    { id: 3, name: "Court 3", image: "/placeholder.svg?height=200&width=300&text=Court3" },
    { id: 4, name: "Court 4", image: "/placeholder.svg?height=200&width=300&text=Court4" },
    { id: 5, name: "Court 5", image: "/placeholder.svg?height=200&width=300&text=Court5" },
    { id: 6, name: "Court 6", image: "/placeholder.svg?height=200&width=300&text=Court6" },
  ]

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ]

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Submit booking
      alert("Booking confirmed! A confirmation email will be sent shortly.")
      onClose()
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    } else {
      onClose()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-black border border-white/10 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold">
            {step === 1 && "Select a Court"}
            {step === 2 && "Choose Date & Time"}
            {step === 3 && "Confirm Booking"}
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {/* Step 1: Court Selection */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <p className="text-gray-300">Select your preferred court from our premium facilities:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courts.map((court) => (
                  <motion.div
                    key={court.id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedCourt(court.id)}
                    className={`relative rounded-lg overflow-hidden cursor-pointer transition-all border-2 ${
                      selectedCourt === court.id ? "border-emerald-500" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={court.image || "/placeholder.svg"}
                      alt={court.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                      <div className="p-4">
                        <h3 className="text-xl font-bold">{court.name}</h3>
                        <p className="text-sm text-gray-300">Premium Surface</p>
                      </div>
                    </div>
                    {selectedCourt === court.id && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-black"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Date & Time Selection */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Select Date</h3>
                  <div className="bg-white/5 rounded-lg p-4">
                    <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} className="text-white" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Select Time</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <motion.button
                        key={time}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 px-4 rounded-lg text-center transition-all ${
                          selectedTime === time ? "bg-emerald-500 text-black" : "bg-white/5 hover:bg-white/10"
                        }`}
                      >
                        {time}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Booking Summary</h3>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Court:</span>
                    <span className="font-medium">
                      {selectedCourt ? courts.find((c) => c.id === selectedCourt)?.name : "Not selected"}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-300">Date:</span>
                    <span className="font-medium">
                      {selectedDate
                        ? selectedDate.toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        : "Not selected"}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-300">Time:</span>
                    <span className="font-medium">{selectedTime || "Not selected"}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-300">Duration:</span>
                    <span className="font-medium">1 hour</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-300">Price:</span>
                    <span className="font-medium">$45.00</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Player Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Full Name</label>
                    <input
                      type="text"
                      className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Email</label>
                    <input
                      type="email"
                      className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Phone</label>
                    <input
                      type="tel"
                      className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Number of Players</label>
                    <select className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <div className="p-6 border-t border-white/10 flex justify-between">
          <Button variant="outline" onClick={prevStep}>
            {step === 1 ? "Cancel" : "Back"}
          </Button>

          <Button
            onClick={nextStep}
            disabled={(step === 1 && !selectedCourt) || (step === 2 && !selectedTime)}
            className="bg-emerald-500 hover:bg-emerald-600 text-black"
          >
            {step === 3 ? "Confirm Booking" : "Continue"}
          </Button>
        </div>
      </motion.div>
    </motion.div>
  )
}

