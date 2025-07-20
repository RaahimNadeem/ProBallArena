import { Header } from "@/components/header";
import { LandingPage } from "@/components/landing-page";
import { Slogan } from "@/components/slogan";
import { SloganAlt } from "@/components/slogan-alt";
import { SloganAlternative } from "@/components/slogan-alternative";
import { AboutUs } from "@/components/about-us";
import { Options } from "@/components/options";
import { Carousel } from "@/components/carousel";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <LandingPage />
      <SloganAlternative />
      <Options />
      <Carousel />
      <AboutUs />
      <Contact />
      <Footer />
    </>
  );
}
