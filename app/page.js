import Loader from "@/components/Loader";
import ScrollEffects from "@/components/ScrollEffects";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <ScrollEffects />
      <Header />
      <main id="top">
        <Hero />
        <Stats />
        <Marquee />
        <Services />
        <Works />
        <Resume />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
