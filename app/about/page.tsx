import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32">
          <div className="absolute inset-0 z-0">
            <Image
              src="/about-us.jpg"
              alt="Padel Courts"
              fill
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
                ABOUT <span className="text-accent">US</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                ProBall Arena is on a mission to bring the world's fastest growing sport to everyone. Our
                state-of-the-art facilities and passionate team create the ultimate padel and tennis experience.
              </p>
              <Link href="/booking">
                <Button className="bg-accent hover:bg-accent/90 text-black font-bold">
                  BOOK A COURT
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="py-20 bg-[#1A1A1A]">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                  OUR <span className="text-primary">PHILOSOPHY</span>
                </h2>
                <p className="text-lg text-gray-300 mb-4">
                  Founded in 2025 by a group of sports enthusiasts, ProBall Arena was born from a vision to create a space where passion meets excellence. We believe that sports have the power to transform lives, build communities, and create lasting memories.
                </p>
                <p className="text-lg text-gray-300 mb-4">
                  Our philosophy is simple: we're not just building courts; we're creating experiences. Every detail, from the court surfaces to the ambient lighting, is designed to enhance your playing experience and elevate your game.
                </p>
                <p className="text-lg text-gray-300">
                  We're committed to making padel, tennis, and cricket accessible to everyone, regardless of skill level. Whether you're a beginner taking your first steps or a seasoned player looking for competition, ProBall Arena is your home.
                </p>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src="/padel-about-us.jpg"
                  alt="Our Philosophy"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
              OUR <span className="text-secondary">VALUES</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Excellence",
                  description:
                    "We strive for excellence in everything we do, from the quality of our facilities to the service we provide to our members.",
                },
                {
                  title: "Community",
                  description:
                    "We believe in the power of community and are committed to creating a welcoming environment where players can connect and grow together.",
                },
                {
                  title: "Innovation",
                  description:
                    "We continuously innovate to provide the best possible experience for our members, embracing new technologies and approaches.",
                },
              ].map((value, index) => (
                <div key={index} className="bg-[#1A1A1A] rounded-lg overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 p-8">
                  <h3 className="text-2xl font-bold mb-3 text-accent">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        {/* <section className="py-20 bg-[#1A1A1A]">
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
              MEET OUR <span className="text-accent">TEAM</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  name: "Alex Rodriguez",
                  role: "Founder & Head Coach",
                  bio: "Former professional player with 15+ years of coaching experience.",
                  image: "/placeholder.svg?height=400&width=300&text=Alex",
                },
                {
                  name: "Maria Sanchez",
                  role: "Professional Coach",
                  bio: "International tournament champion and certified instructor.",
                  image: "/placeholder.svg?height=400&width=300&text=Maria",
                },
                {
                  name: "David Kim",
                  role: "Operations Manager",
                  bio: "Ensures our facilities run smoothly for the perfect playing experience.",
                  image: "/placeholder.svg?height=400&width=300&text=David",
                },
                {
                  name: "Sophie Chen",
                  role: "Community Director",
                  bio: "Organizes events, tournaments and builds our padel community.",
                  image: "/placeholder.svg?height=400&width=300&text=Sophie",
                },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative h-[300px] w-[225px] mx-auto mb-4 rounded-lg overflow-hidden border border-accent/30">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-accent font-medium mb-2">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Call to Action */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                JOIN THE <span className="text-accent">REVOLUTION</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Whether you're a beginner looking to try padel for the first time or an experienced player seeking
                competition, we have everything you need to elevate your game.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <Button className="bg-primary hover:bg-accent/90 text-white font-bold">
                    BOOK A COURT
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    className="text-white bg-secondary border-accent hover:bg-accent/90 hover:text-white font-bold"
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

