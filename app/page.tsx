import { Header } from "@/components/header";
import { LandingPage } from "@/components/landing-page";
import { Slogan } from "@/components/slogan";
import { SloganAlt } from "@/components/slogan-alt";
import { SloganAlternative } from "@/components/slogan-alternative";

export default function Home() {
  return (
    <>
      <Header />
      <LandingPage />
      <SloganAlternative />

      {/* <Slogan /> */}
      {/* <SloganAlt /> */}
    </>
  );
}
