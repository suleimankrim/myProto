import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suleiman Karim Eddin",
  description: "Explore Suleiman Karim Eddin's portfolio showcasing expertise in fullstack and frontend development.",
  keywords: [
    "Suleiman Karim Eddin",
    "Fullstack Developer",
    "Frontend Developer",
    "Web Developer",
    "Portfolio",
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
  ],  
applicationName:"Suleiman Karim Eddin",
abstract:"Explore Suleiman Karim Eddin's portfolio showcasing expertise",
publisher:"Suleiman Karim Eddin",
  robots: "index, follow",


};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="snap-y snap-mandatory scrollbar-thin
       scrollbar-thumb-gray-900 scrollbar-track-gray-100  overflow-y-scroll overflow-x-hidden"
    >
        <Head>
        <title>Suleiman Karim Eddin </title>
        <link
          rel="canonical"
          href="https://suleimna-karim-eddin.vercel.app/"
          key="canonical"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
