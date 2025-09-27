'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { me } from '../data/profile';

export default function Navbar() {
  const [activeId, setActiveId] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'experience', label: 'Experience' },
    { id: 'github', label: 'GitHub' },
    { id: 'contact', label: 'Contact' }
  ];
  
  // External navigation items
  const externalItems = [
    { href: '/certifications', label: 'Certifications' },
    { href: '/publications', label: 'Publications' },
    { href: '/blog', label: 'Blog' }
  ];

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

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/70 dark:bg-neutral-950/60 backdrop-blur border-b border-neutral-200/60 dark:border-neutral-800/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className="text-xl font-bold text-neutral-900 dark:text-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
          >
            {me.name}
          </a>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(id); }}
                className={`text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 ${
                  activeId === id
                    ? 'font-semibold text-neutral-900 dark:text-white'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                }`}
              >
                {label}
              </a>
            ))}
            {externalItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
              >
                {label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
            <div className="py-4 space-y-2">
              {navItems.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(id); }}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 ${
                    activeId === id
                      ? 'font-semibold text-neutral-900 dark:text-white bg-blue-50 dark:bg-blue-950'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                  }`}
                >
                  {label}
                </a>
              ))}
              {externalItems.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}