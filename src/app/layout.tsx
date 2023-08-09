import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suleiman Karim Eddin",
  description: "Suleiman Karim Eddin portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="snap-y snap-mandatory scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100  overflow-y-scroll overflow-x-hidden"
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
