"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#achievements", label: "Achievements" },
  { href: "/#experience", label: "Experience" },
  { href: "/#github", label: "GitHub" },
  { href: "/#contact", label: "Contact" },
  { href: "/certifications", label: "Certifications" },
  { href: "/publications", label: "Publications" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname() || "/";
  const [activeId, setActiveId] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to section handler for hash links
  const scrollToSection = (href) => {
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveId(id);
      }
    }
    setMobileMenuOpen(false);
  };

  // Intersection observer for active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.6, rootMargin: '-20% 0px -20% 0px' }
    );

    const sections = ['home', 'about', 'projects', 'skills', 'achievements', 'experience', 'github', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Check if link is active
  const isLinkActive = (href) => {
    if (href === '/') return pathname === '/' && activeId === 'home';
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2);
      return pathname === '/' && activeId === sectionId;
    }
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className="
            relative flex h-14 items-center justify-between
            rounded-2xl border border-white/10
            bg-[rgba(10,14,22,0.55)] backdrop-blur-xl
            shadow-[0_10px_40px_-12px_rgba(56,189,248,.40)]
          "
        >
          {/* Brand */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('/#home');
            }}
            className="
              ml-3 text-lg md:text-xl font-semibold tracking-tight
              bg-gradient-to-r from-sky-300 via-fuchsia-300 to-cyan-300
              bg-clip-text text-transparent
              drop-shadow-[0_0_22px_rgba(56,189,248,.55)]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 rounded-md px-1
            "
          >
            Maaz Ansari
          </Link>

          {/* Desktop Nav links */}
          <div className="hidden md:flex items-center gap-1 pr-2">
            {links.map(({ href, label }) => {
              const active = isLinkActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={(e) => {
                    if (href.startsWith('/#')) {
                      e.preventDefault();
                      scrollToSection(href);
                    }
                  }}
                  aria-current={active ? "page" : undefined}
                  className={`
                    group relative px-3 py-2 text-sm font-medium rounded-lg
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70
                    ${active ? "text-white" : "text-slate-200/95 hover:text-white"}
                  `}
                >
                  <span
                    className="
                      relative z-10
                      bg-gradient-to-r from-sky-200 via-fuchsia-200 to-cyan-200
                      bg-clip-text text-transparent
                      group-hover:drop-shadow-[0_0_16px_rgba(56,189,248,.55)]
                    "
                  >
                    {label}
                  </span>

                  {/* gradient underline */}
                  <span
                    className={`
                      pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-1
                      h-0.5 w-0 rounded-full transition-all duration-300
                      ${active
                        ? "w-8 bg-gradient-to-r from-sky-400 via-fuchsia-400 to-cyan-300 shadow-[0_0_18px_2px_rgba(56,189,248,.55)]"
                        : "group-hover:w-8 group-hover:bg-gradient-to-r group-hover:from-sky-400/80 group-hover:via-fuchsia-400/80 group-hover:to-cyan-300/80"}
                    `}
                  />
                </Link>
              );
            })}
          </div>

          {/* Static brand/AI badge and mobile menu */}
          <div className="flex items-center gap-2 pr-3">
            {/* Static brand/AI badge — decorative only */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none select-none
                ml-2 rounded-2xl p-2.5
                ring-1 ring-white/12
                bg-[radial-gradient(120%_120%_at_30%_20%,#9bbcff1a_0%,#6ee7ff1a_35%,#b388ff1a_70%,transparent_100%)]
                shadow-[0_10px_30px_-10px_rgba(147,197,253,.35)]
              "
            >
              <Cpu className="h-5 w-5 text-white/90" />
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-[rgba(10,14,22,0.55)] backdrop-blur-xl shadow-[0_10px_40px_-12px_rgba(56,189,248,.40)]">
            <div className="py-4 space-y-1 px-4">
              {links.map(({ href, label }) => {
                const active = isLinkActive(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={(e) => {
                      if (href.startsWith('/#')) {
                        e.preventDefault();
                        scrollToSection(href);
                      } else {
                        setMobileMenuOpen(false);
                      }
                    }}
                    className={`
                      group relative block px-4 py-3 text-sm font-medium rounded-lg
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70
                      ${active ? "text-white" : "text-slate-200/95 hover:text-white"}
                    `}
                  >
                    <span
                      className="
                        bg-gradient-to-r from-sky-200 via-fuchsia-200 to-cyan-200
                        bg-clip-text text-transparent
                        group-hover:drop-shadow-[0_0_16px_rgba(56,189,248,.55)]
                      "
                    >
                      {label}
                    </span>
                    {active && (
                      <span className="absolute left-4 right-4 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-400 to-cyan-300 shadow-[0_0_18px_2px_rgba(56,189,248,.55)]" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}