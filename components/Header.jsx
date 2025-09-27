// src/components/Header.jsx
import React from "react";
import { me } from "@/data/profile";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg shadow z-50 h-16">
      <div className="max-w-6xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo / Name */}
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-xl">{me.name}</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#experience" className="hover:text-blue-600">Experience</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <a href="#home" className="text-sm font-medium hover:text-blue-600">
            Menu
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
