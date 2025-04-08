"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32">
          <div className="absolute inset-0 z-0">
            <Image
              src="/contact-us.jpg"
              alt="Contact Us"
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent" />
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
                GET IN <span className="text-accent">TOUCH</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Have questions about our facilities, memberships, or events?
                We're here to help you get started on your padel journey.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-[#1A1A1A] rounded-xl p-8">
                <h2 className="text-3xl font-bold mb-6">
                  SEND US A <span className="text-accent">MESSAGE</span>
                </h2>

                {isSubmitted ? (
                  <div className="bg-primary/20 border border-primary/30 rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-300">
                      Thank you for contacting us. We'll get back to you as soon
                      as possible.
                    </p>
                    <Button
                      className="mt-6 bg-accent hover:bg-accent/90 text-black font-bold"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-black/50 border-white/10 focus:border-accent"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-black/50 border-white/10 focus:border-accent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-black/50 border-white/10 focus:border-accent"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="subject"
                          className="text-sm font-medium"
                        >
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="bg-black/50 border-white/10 focus:border-accent"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="bg-black/50 border-white/10 focus:border-accent resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent/90 text-black font-bold py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          SENDING...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Send className="mr-2 h-5 w-5" />
                          SEND MESSAGE
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  CONTACT <span className="text-accent">INFORMATION</span>
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-accent p-3 rounded-lg text-black mr-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Our Location</h3>
                      <p className="text-gray-300">
                        Pine Ave, Green Acres Extension
                      </p>
                      <p className="text-gray-300">
                        T & T Aabpara Housing Society
                      </p>
                      <p className="text-gray-300">Lahore, 54000</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-accent p-3 rounded-lg text-black mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Call Us</h3>
                      <p className="text-gray-300">+92 310 8888764</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-accent p-3 rounded-lg text-black mr-4">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Open 24/7</h3>
                      <p className="text-gray-300">
                        We're here whenever the mood strikes. Midnight tennis?
                        Sunrise cricket? Go wild.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com/proballarena"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1A1A1A] hover:bg-accent hover:text-black transition-colors p-3 rounded-full"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5Zm8.375 2.125a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75Zm-4.125 2a4.875 4.875 0 1 0 0 9.75 4.875 4.875 0 0 0 0-9.75Zm0 1.5a3.375 3.375 0 1 1 0 6.75 3.375 3.375 0 0 1 0-6.75Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-20 bg-[#1A1A1A]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">
              FIND <span className="text-accent">US</span>
            </h2>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="relative w-full h-[400px]">
                <iframe
                  title="Proball Arena Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0276524972783!2d74.24784149999999!3d31.4133642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190188b89eb7b1%3A0x69267f7902f569b0!2sPro%20Ball%20Arena!5e0!3m2!1sen!2s!4v1744095904575!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                />
                <a
                  href="https://maps.google.com/?q=Pro%20Ball%20Arena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label="Open map in new tab"
                >
                  <span className="sr-only">Open map in new tab</span>
                </a>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/70 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-bold mb-2">ProBall Arena</h3>
                  <p className="text-gray-300">
                    Pine Ave, Green Acres Extension
                  </p>
                  <p className="text-gray-300">
                    T & T Aabpara Housing Society, Lahore, 54000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                FREQUENTLY <span className="text-accent">ASKED</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    question: "How do I book a court?",
                    answer:
                      "You can book a court online through our booking system, or by texting or calling us.",
                  },
                  {
                    question: "Do I need my own equipment?",
                    answer:
                      "We offer racquet and ball when you book a court. However, you can bring your own equipment as well, if you want to.",
                  },
                  {
                    question: "Do you host tournaments?",
                    answer:
                      "Yes, we host regular tournaments for different skill levels. Check our social media feed for upcoming tournaments.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-[#1A1A1A] rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
