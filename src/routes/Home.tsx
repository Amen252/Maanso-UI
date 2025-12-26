import Hero from "../Components/Hero";
import UpHero from "@/Components/upHero";
import FeaturesTimeline from "@/Components/features";
import About from "@/Components/about";
import TestimonialsSection from "@/Components/testmonial";
import Contact from "@/Components/contact";
export default function Home() {
  return (
    <>
      <UpHero/>
      <Hero />
      <FeaturesTimeline />
      <About />
      <TestimonialsSection />
      <Contact />
    </>
  );
}
