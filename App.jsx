import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * App.jsx
 * - Adds smooth scrolling for anchors using documentElement style.
 * - Adds top padding equal to header height (64px) so fixed header doesn't overlap sections.
 */
function App() {
  useEffect(() => {
    // enable smooth scrolling for anchors
    document.documentElement.style.scrollBehavior = "smooth";

    // add padding-top so fixed header doesn't overlap content
    const prev = document.body.style.paddingTop;
    document.body.style.paddingTop = "64px"; // header height

    return () => {
      document.body.style.paddingTop = prev;
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <>
      <Header />
      <main className="antialiased text-gray-900">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
