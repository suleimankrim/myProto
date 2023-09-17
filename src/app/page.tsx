import Header from "@/app/components/Header";
import React from "react";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Experience from "@/app/components/Experience";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Head from "next/head";

export default function Home() {
  return (<>

<Head>
        <title>Suleiman Karim Eddin </title>
        <meta name="google-site-verification" content="ZDg5w2pmn3R2hjCq0xEybp6KbFzMttTYBQvm3l68Eyw" />
        <link
          rel="canonical"
          href="https://suleimna-karim-eddin.vercel.app/"
          key="canonical"
        />
      </Head>
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
  </>);
}
