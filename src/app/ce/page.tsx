"use client";

import Head from "next/head";

import About from "@/components/about";
import Footer from "@/components/footer";
import GetInvolved from "@/components/get-involved";
import Hero from "@/components/hero";
import Navbar from "@/components/nav-bar";
import Powered from "@/components/powered";

export default function Page() {
  return (
    <div className="bg-[var(--background-rgb)] font-mono">
      <Head>
        <title>pygame</title>
        <meta name="description" content="Anything and everything pygame." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Powered />
        <GetInvolved />
        <Footer />
      </main>
    </div>
  );
}
