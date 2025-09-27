'use client';
import { me } from '@/data/profile';
import { Github, Linkedin, Instagram, Mail, ExternalLink, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroPhoto from './HeroPhoto';
import AnimatedButton from './AnimatedButton';

export default function Hero() {
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const MotionDiv = reduceMotion ? 'div' : motion.div;

  return (
    <section id="home" className="scroll-mt-24 py-24 relative min-h-screen flex items-center bg-transparent">
      <div className="container mx-auto px-4 h-screen flex items-center justify-center relative">
        <div className="max-w-4xl mx-auto text-center z-10 relative glass rounded-2xl p-12 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
          <MotionDiv initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-lg cosmic-glow">
            <span className="block">Maaz Ansari</span>
            <span className="block text-lg md:text-xl mt-2 text-blue-100 leading-relaxed drop-shadow-md">
              Software Engineer | Full-Stack Web Developer (MERN) | AI/ML & Data Analytics | Open to Web Development, Backend, Frontend & Software Engineering Roles
            </span>
          </h1>
          <div className="mt-6 flex flex-wrap gap-3">
            <AnimatedButton href="#projects" className="btn btn-primary">View Projects</AnimatedButton>
            <AnimatedButton href="#contact" variant="secondary">Contact Me</AnimatedButton>
          </div>
          <div className="mt-6 flex gap-4">
            <a aria-label="Email" href={me.socials.email} className="social-icon text-blue-100 hover:text-white glow-hover"><Mail className="w-5 h-5"/></a>
            <a aria-label="GitHub" href={me.socials.github} target="_blank" rel="noreferrer noopener" className="social-icon text-blue-100 hover:text-white glow-hover"><Github className="w-5 h-5"/></a>
            <a aria-label="LinkedIn" href={me.socials.linkedin} target="_blank" rel="noreferrer noopener" className="social-icon text-blue-100 hover:text-white glow-hover"><Linkedin className="w-5 h-5"/></a>
            <a aria-label="Instagram" href={me.socials.instagram} target="_blank" rel="noreferrer noopener" className="social-icon text-blue-100 hover:text-white glow-hover"><Instagram className="w-5 h-5"/></a>
            <a aria-label="Phone" href={me.socials.phone} className="social-icon text-blue-100 hover:text-white glow-hover"><Phone className="w-5 h-5"/></a>
            <a aria-label="Postman" href={me.socials.postman} target="_blank" rel="noreferrer noopener" className="social-icon text-blue-100 hover:text-white glow-hover"><ExternalLink className="w-5 h-5"/></a>
          </div>
        </MotionDiv>

        <MotionDiv className="justify-self-center"
          initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <HeroPhoto 
            src={me.about.photo} 
            alt={`${me.name} portrait`} 
            width={480} 
            height={480}
            className="w-80 h-80"
          />
        </MotionDiv>
        </div>
      </div>
    </section>
  );
}