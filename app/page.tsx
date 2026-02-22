import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Proyects";
import Stack from "@/components/Stacks";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}