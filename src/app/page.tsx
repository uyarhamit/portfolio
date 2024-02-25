import About from "@/components/about";
import Contact from "@/components/contact";
import Experiences from "@/components/experiences";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-10">
      <Intro />
      <SectionDivider />
      <About />
      <Skills />
      <Projects />
      <Experiences />
      <Contact />
    </main>
  );
}
