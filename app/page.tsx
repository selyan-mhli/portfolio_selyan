import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Privasee from "@/components/sections/Privasee";
import Projects from "@/components/sections/Projects";
import Press from "@/components/sections/Press";
import Stack from "@/components/sections/Stack";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import Passions from "@/components/sections/Passions";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Privasee />
      <Projects />
      <Press />
      <Stack />
      <Experience />
      <Education />
      <Certifications />
      <Passions />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
