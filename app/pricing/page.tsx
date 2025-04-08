import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent" />
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
            </div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
                MEMBERSHIP <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">PLANS</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Choose the perfect plan for your padel journey. From casual players to serious competitors, we have
                options designed for every level and commitment.
              </p>
            </div>
          </div>
        </section>

        {/* Membership Plans */}
        <section className="py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 pointer-events-none"></div>
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "CASUAL",
                  price: "$15",
                  period: "per session",
                  description: "Perfect for occasional players who want to enjoy padel without commitment.",
                  features: [
                    "Single court booking",
                    "Equipment rental available",
                    "Locker access",
                    "Access to open play sessions",
                    "Online booking system",
                  ],
                  highlight: false,
                  color: "primary",
                },
                {
                  title: "REGULAR",
                  price: "$99",
                  period: "per month",
                  description: "Our most popular plan for dedicated players who want regular court time.",
                  features: [
                    "Unlimited court bookings",
                    "Free equipment rental",
                    "2 pro coaching sessions monthly",
                    "Tournament entry discounts",
                    "Member-only events",
                    "Locker storage",
                    "Guest passes (2 per month)",
                  ],
                  highlight: true,
                  color: "secondary",
                },
                {
                  title: "PRO",
                  price: "$199",
                  period: "per month",
                  description: "The ultimate padel experience for serious players and competitors.",
                  features: [
                    "Priority court bookings",
                    "Personal coach assignment",
                    "Performance analysis sessions",
                    "Unlimited pro coaching",
                    "VIP lounge access",
                    "Exclusive pro events",
                    "Free tournament entries",
                    "Premium equipment usage",
                    "Dedicated locker",
                  ],
                  highlight: false,
                  color: "accent",
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-xl overflow-hidden ${
                    plan.highlight
                      ? `bg-${plan.color} text-black border-4 border-accent`
                      : "bg-black/40 border border-white/10"
                  }`}
                >
                  <div className={`p-8 ${plan.highlight ? `bg-${plan.color}` : "bg-black/40"}`}>
                    <h3 className="text-3xl font-extrabold">{plan.title}</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-5xl font-extrabold">{plan.price}</span>
                      <span className="ml-2 text-lg opacity-80">{plan.period}</span>
                    </div>
                    <p className={`mt-4 ${plan.highlight ? "text-black/80" : "text-gray-300"}`}>{plan.description}</p>
                  </div>
                  <div className="p-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check
                            className={`w-5 h-5 mr-2 mt-0.5 ${plan.highlight ? "text-black" : `text-${plan.color}`}`}
                          />
                          <span className={`${plan.highlight ? "text-black" : "text-gray-300"}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Link href="/booking">
                        <Button
                          className={`w-full py-6 font-bold ${
                            plan.highlight
                              ? "bg-black text-white hover:bg-black/80"
                              : `bg-${plan.color} text-white hover:bg-${plan.color}/90`
                          }`}
                        >
                          SELECT PLAN
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Court Rental */}
        <section className="py-20 bg-[#1A1A1A]">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/5 to-accent/5 pointer-events-none"></div>
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                COURT <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">RENTAL</span>
              </h2>
              <p className="text-xl text-gray-300">
                Book individual court time for you and your friends. No membership required.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-black/40 rounded-xl overflow-hidden border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                  {[
                    {
                      title: "WEEKDAY",
                      time: "7AM - 4PM",
                      price: "$30",
                      period: "per hour",
                      color: "primary",
                    },
                    {
                      title: "PEAK HOURS",
                      time: "4PM - 10PM",
                      price: "$45",
                      period: "per hour",
                      color: "secondary",
                    },
                    {
                      title: "WEEKEND",
                      time: "All day",
                      price: "$50",
                      period: "per hour",
                      color: "accent",
                    },
                  ].map((option, index) => (
                    <div key={index} className="p-8 text-center">
                      <h3 className={`text-xl font-bold mb-2 text-${option.color}`}>{option.title}</h3>
                      <p className="text-gray-400 mb-4">{option.time}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-extrabold">{option.price}</span>
                        <span className="ml-2 text-sm text-gray-400">{option.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link href="/booking">
                  <Button className="bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-white font-bold px-8 py-6 shadow-lg shadow-accent/20">
                    BOOK A COURT NOW
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Group Packages */}
        <section className="py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 pointer-events-none"></div>
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                GROUP <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">PACKAGES</span>
              </h2>
              <p className="text-xl text-gray-300">Special rates for corporate events, parties, and group lessons.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "CORPORATE EVENT",
                  description: "Team building through padel. Includes court rental, equipment, and basic instruction.",
                  price: "$500",
                  details: "Up to 16 people, 3 hours",
                  color: "primary",
                },
                {
                  title: "BIRTHDAY PACKAGE",
                  description:
                    "Celebrate with a fun padel session. Includes court rental, equipment, and a dedicated host.",
                  price: "$350",
                  details: "Up to 12 people, 2 hours",
                  color: "secondary",
                },
                {
                  title: "GROUP LESSON",
                  description: "Learn padel with friends or colleagues. Professional coach and all equipment included.",
                  price: "$200",
                  details: "Up to 4 people, 1.5 hours",
                  color: "accent",
                },
                {
                  title: "TOURNAMENT PACKAGE",
                  description: "Organize your own mini-tournament. Includes court rental, referee, and prizes.",
                  price: "$800",
                  details: "Up to 16 people, 4 hours",
                  color: "primary",
                },
              ].map((package_, index) => (
                <div key={index} className="bg-[#1A1A1A] rounded-xl p-8 border border-white/10 hover:border-${package_.color}/50 transition-all duration-300">
                  <h3 className={`text-2xl font-bold mb-2 text-${package_.color}`}>{package_.title}</h3>
                  <p className="text-gray-300 mb-4">{package_.description}</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-3xl font-extrabold">{package_.price}</span>
                      <p className="text-sm text-gray-400 mt-1">{package_.details}</p>
                    </div>
                    <Link href="/contact">
                      <Button
                        variant="outline"
                        className={`border-${package_.color} text-${package_.color} hover:bg-${package_.color} hover:text-white`}
                      >
                        INQUIRE
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#1A1A1A]">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/5 to-accent/5 pointer-events-none"></div>
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                FREQUENTLY <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">ASKED</span>
              </h2>
              <p className="text-xl text-gray-300">Common questions about our pricing and membership options.</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "Can I cancel my membership at any time?",
                  answer:
                    "Yes, all memberships can be canceled with 30 days notice. There are no long-term contracts or cancellation fees.",
                },
                {
                  question: "Do you offer family discounts?",
                  answer: "Yes, we offer a 15% discount on additional family memberships when purchased together.",
                },
                {
                  question: "Is equipment rental included in court bookings?",
                  answer:
                    "Basic equipment rental is available for $5 per session for non-members. Regular and Pro members receive free equipment rental.",
                },
                {
                  question: "Can I upgrade my membership plan?",
                  answer:
                    "Yes, you can upgrade your membership at any time. The new rate will be prorated for the remainder of your billing cycle.",
                },
                {
                  question: "Do you offer student discounts?",
                  answer: "Yes, students receive a 10% discount on all membership plans with valid student ID.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-black/40 rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 pointer-events-none"></div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
          </div>
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">JOIN?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your padel journey today with the plan that's right for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <Button className="bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-white font-bold px-8 py-6 shadow-lg shadow-accent/20">
                    BECOME A MEMBER
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="text-white border-secondary hover:bg-secondary hover:text-white font-bold px-8 py-6"
                  >
                    CONTACT US
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

