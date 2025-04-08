"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check, ArrowLeft, ChevronUp, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function CourtBookingPage({ params }: { params: { court: string } }) {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [bookingComplete, setBookingComplete] = useState(false)

  const [showFeatures, setShowFeatures] = useState(false);

  const toggleFeatures = () => {
    setShowFeatures(!showFeatures);
  };

  
  const courtData = {
    tennis: {
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
    padel: {
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
    cricket: {
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
  }

  const court = courtData[params.court as keyof typeof courtData] || courtData.tennis

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
      window.scrollTo(0, 0)
    } else {
      // Submit booking
      setBookingComplete(true)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
      window.scrollTo(0, 0)
    }
  }

  const resetBooking = () => {
    router.push("/booking")
  }

  

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container px-4 md:px-6">
          {bookingComplete ? (
            <div className="max-w-2xl mx-auto bg-[#1A1A1A] rounded-xl p-8 text-center">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-10 w-10 text-accent" />
              </div>

              <h1 className="text-4xl font-extrabold mb-4">BOOKING CONFIRMED!</h1>
              <p className="text-xl text-gray-300 mb-8">
                Your court has been reserved. A confirmation email has been sent to your inbox.
              </p>

              <div className="bg-black/40 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
                <div className="grid grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="text-gray-400">Court:</p>
                    <p className="font-bold">{court.title}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Date:</p>
                    <p className="font-bold">
                      {selectedDate?.toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400">Time:</p>
                    <p className="font-bold">{selectedTime}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Duration:</p>
                    <p className="font-bold">1 hour</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Price:</p>
                    <p className="font-bold">{court.price}</p>
                  </div>
                </div>
              </div>

              <Button onClick={resetBooking} className="bg-accent hover:bg-accent/90 text-black font-bold px-8 py-6">
                BOOK ANOTHER COURT
              </Button>
            </div>
          ) : (
            <>
              {/* Court Header */}
              <div className="max-w-4xl mx-auto mb-12">
                <div className="flex items-center mb-6">
                  <Button 
                    variant="ghost" 
                    className="text-white hover:bg-white/10 mr-4"
                    onClick={() => router.push("/booking")}
                  >
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    BACK TO COURTS
                  </Button>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="relative w-full md:w-1/3 h-56 md:h-64 rounded-xl overflow-hidden">
                    <Image
                      src={court.image}
                      alt={court.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent`} />
                  </div>
                  
                  <div className="md:w-2/3">
                    <h1 className="text-4xl font-extrabold mb-2">{court.title}</h1>
                    <div className="flex items-baseline mb-4">
                      <span className="text-3xl font-extrabold">{court.price}</span>
                      <span className="ml-2 text-sm opacity-80">{court.period}</span>
                    </div>
                    
                    {/* Features Section - Visible on md and above */}
<div className="md:block hidden">
  <ul className="space-y-2 mb-6">
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
        <span className="text-white">{feature}</span>
      </li>
    ))}
  </ul>
</div>

{/* Toggle Button for Features on Small Screens */}
<div className="block md:hidden mb-2">
<button
    onClick={toggleFeatures}
    className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none"
  >
    {showFeatures ? (
      <>
        <ChevronUp className="w-4 h-4 mr-2" /> Hide Details
      </>
    ) : (
      <>
        <ChevronDown className="w-4 h-4 mr-2" /> Show Details
      </>
    )}
  </button>
  {showFeatures && (
    <ul className="mt-4 space-y-2">
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
          <span className="text-white">{feature}</span>
        </li>
      ))}
    </ul>
  )}
</div>
                  </div>
                </div>
              </div>

              {/* Booking Progress */}
              <div className="max-w-4xl mx-auto mb-12">
                <div className="flex items-center justify-between">
                  {[1, 2, 3].map((stepNumber) => (
                    <div key={stepNumber} className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-2 ${
                          step >= stepNumber ? `bg-${court.color} text-white` : "bg-white/10 text-white"
                        }`}
                      >
                        {stepNumber}
                      </div>
                      <div className="text-center">
                        <p className={step >= stepNumber ? "font-bold" : "text-gray-400"}>
                          {stepNumber === 1 && "Choose Date & Time"}
                          {stepNumber === 2 && "Player Information"}
                          {stepNumber === 3 && "Confirm Booking"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="relative flex items-center justify-between mt-4">
                  <div className="absolute left-0 right-0 top-1/2 h-1 bg-white/10 -translate-y-1/2"></div>
                  <div
                    className={`absolute left-0 top-1/2 h-1 bg-${court.color} -translate-y-1/2 transition-all duration-300 ${
                      step === 1 ? "w-0" : step === 2 ? "w-1/2" : "w-full"
                    }`}
                  ></div>
                </div>
              </div>

              {/* Step 1: Date & Time Selection */}
              {step === 1 && (
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-extrabold mb-6 text-center">
                    CHOOSE <span className={`text-${court.color}`}>DATE & TIME</span>
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 text-center">Select when you'd like to play</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-[#1A1A1A] rounded-xl p-6">
                      <h3 className="text-2xl font-bold mb-4">Select Date</h3>
                      <div className="bg-black/40 rounded-lg p-4">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          className="mx-auto"
                        />
                      </div>
                    </div>

                    <div className="bg-[#1A1A1A] rounded-xl p-6">
                      <h3 className="text-2xl font-bold mb-4">Select Time</h3>
                      <div className="grid grid-cols-3 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-3 px-4 rounded-lg text-center transition-all ${
                              selectedTime === time
                                ? `bg-${court.color} text-white font-bold`
                                : "bg-black/40 hover:bg-black/60"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 flex justify-end">
                    <Button
                      onClick={nextStep}
                      disabled={!selectedTime}
                      className={`bg-${court.color} hover:bg-${court.color}/90 text-white font-bold px-8 py-6`}
                    >
                      CONTINUE
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Player Information */}
              {step === 2 && (
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-extrabold mb-6 text-center">
                    PLAYER <span className={`text-${court.color}`}>INFORMATION</span>
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 text-center">Enter your details to complete the booking</p>

                  <div className="bg-[#1A1A1A] rounded-xl p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm text-gray-300">Full Name</label>
                        <input
                          type="text"
                          className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm text-gray-300">Email</label>
                        <input
                          type="email"
                          className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm text-gray-300">Phone</label>
                        <input
                          type="tel"
                          className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                      </div>

                      
                    </div>
                  </div>

                  <div className="mt-12 flex justify-between">
                    <Button
                      onClick={prevStep}
                      variant="outline"
                      className="text-white border-white hover:bg-white hover:text-black font-bold px-8 py-6"
                    >
                      BACK
                    </Button>
                    <Button
                      onClick={nextStep}
                      className={`bg-${court.color} hover:bg-${court.color}/90 text-white font-bold px-8 py-6`}
                    >
                      CONTINUE
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {step === 3 && (
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-extrabold mb-6 text-center">
                    CONFIRM <span className={`text-${court.color}`}>BOOKING</span>
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 text-center">
                    Review your booking details and complete your reservation
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#1A1A1A] rounded-xl p-6">
                      <h3 className="text-2xl font-bold mb-4">Booking Summary</h3>

                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Court:</span>
                          <span className="font-medium">{court.title}</span>
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
                          <span className="font-medium">{court.price}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#1A1A1A] rounded-xl p-6">
                      <h3 className="text-2xl font-bold mb-4">Payment Information</h3>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm text-gray-300">Card Number</label>
                          <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm text-gray-300">Expiry Date</label>
                            <input
                              type="text"
                              placeholder="MM/YY"
                              className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm text-gray-300">CVV</label>
                            <input
                              type="text"
                              placeholder="123"
                              className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 flex justify-between">
                    <Button
                      onClick={prevStep}
                      variant="outline"
                      className="text-white border-white hover:bg-white hover:text-black font-bold px-8 py-6"
                    >
                      BACK
                    </Button>
                    <Button
                      onClick={nextStep}
                      className={`bg-${court.color} hover:bg-${court.color}/90 text-white font-bold px-8 py-6`}
                    >
                      CONFIRM BOOKING
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}