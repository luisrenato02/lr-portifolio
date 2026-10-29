import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Stack } from "./components/Stack";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact, Footer } from "./components/Contact";
import { WaterDistortion } from "./components/WaterDistortion";

export default function Home() {
  return (
    <>
      <WaterDistortion />
      <Header />
      <main id="topo" className="max-w-[1200px] mx-auto px-5 md:px-8">
        <Hero />
        <Stack />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
