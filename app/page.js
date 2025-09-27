import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import GitHubActivity from '@/components/GithubActivity';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import AskMaaz from '@/components/AskMaaz';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-transparent">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <GitHubActivity />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <AskMaaz />
    </>
  );
}