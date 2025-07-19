import { Header } from "@/components/header";
import { LandingPage } from "@/components/landing-page";
import { Slogan } from "@/components/slogan";
import { SloganAlt } from "@/components/slogan-alt";
import { SloganAlternative } from "@/components/slogan-alternative";
import { AboutUs } from "@/components/about-us";

export default function Home() {
  return (
    <>
      <Header />
      <LandingPage />
      <SloganAlternative />
      <AboutUs />

      {/* <Slogan /> */}
      {/* <SloganAlt /> */}
    </>
  );
}
