import Header from "@/app/components/Header";
import React from "react";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Experience from "@/app/components/Experience";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";

export default function Home() {
  return (
    <main className="">
      <Header />
      <section id={"hero"} className="snap-start">
        <Hero />
      </section>
      <section id={"about"} className="snap-center">
        <About />
      </section>
      <section id={"experience"} className="snap-center">
        <Experience />
      </section>
      <section id={"skills"} className="snap-center">
        <Skills />
      </section>
      <section id={"projects"} className="snap-center">
        <Projects />
      </section>
    </main>
  );
}
