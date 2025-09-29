import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import PromptPilotDemo from '@/components/PromptPilotDemo';
import Skills from '@/components/Skills';
import Research from '@/components/Research';
import Achievements from '@/components/Achievements';
import GitHubActivity from '@/components/GithubActivity';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AskMaaz from '@/components/AskMaaz';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-transparent">
        <Hero />
        <About />
        <Projects />
        <PromptPilotDemo />
        <Skills />
        <Achievements />
        <GitHubActivity />
        <Experience />
        <Research />
        <Contact />
      </main>
      <Footer />
      <AskMaaz />
    </>
  );
}