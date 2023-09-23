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
      <section id={"hero"} className="md:snap-start">
        <Hero />
      </section>
      <section id={"about"} className="md:snap-center">
        <About />
      </section>
      <section id={"experience"} className="md:snap-center">
        <Experience />
      </section>
      <section id={"skills"} className="md:snap-center">
        <Skills />
      </section>
      <section id={"projects"} className="md:snap-center">
        <Projects />
      </section>
    </main>
  </>);
}
