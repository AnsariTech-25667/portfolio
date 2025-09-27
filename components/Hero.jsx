"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 py-24">
      <div className="container mx-auto px-4 grid items-center gap-10 md:grid-cols-[1.2fr_.8fr]">
        <div className="space-y-4">
          <h1 className="headline text-3xl md:text-5xl font-extrabold leading-tight">
            Maaz Ansari
            <br />
            <span className="text-brand-aqua">Software Engineer</span> · Full-Stack (MERN) · AI/ML & Data Analytics
          </h1>
          <p className="text-slate-300">
            Building scalable, intelligent systems that solve real problems.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-[50%_50%_46%_54%/54%_46%_54%_46%] blur-2xl bg-brand-aqua/20 animate-pulse-soft"></div>
            <Image
              src="/Maaz_Ansari_pic.png"
              alt="Maaz Ansari portrait"
              width={320}
              height={400}
              priority
              className="relative z-10 [clip-path:ellipse(45%_50%_at_50%_50%)] shadow-elevated transition-transform duration-300 ease-snappy hover:scale-110 hover:drop-shadow-glow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}