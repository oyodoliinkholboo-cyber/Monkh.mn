"use client";
import useLenis from "@/hooks/useLenis";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import useLuxuryCursor from "@/hooks/useLuxuryCursor";

import IntroVideo from "@/components/ui/IntroVideo";
import Field from "@/components/ui/Field";
import Cursor from "@/components/ui/Cursor";
import Preloader from "@/components/ui/Preloader";
import ThreadRail from "@/components/ui/ThreadRail";
import Header from "@/components/ui/Header";

import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Years from "@/components/sections/Years";
import History from "@/components/sections/History";
import Mission from "@/components/sections/Mission";
import Projects from "@/components/sections/Projects";
import Uniform from "@/components/sections/Uniform";
import Members from "@/components/sections/Members";
import Factories from "@/components/sections/Factories";
import WorldMap from "@/components/sections/WorldMap";
import Future from "@/components/sections/Future";
import Closing from "@/components/sections/Closing";
import Footer from "@/components/sections/Footer";

export default function SiteShell() {
  useLenis();
  useScrollAnimations();
  useLuxuryCursor();

  return (
    <>
      <IntroVideo />
      <Field />
      <Cursor />
      <Preloader />
      <ThreadRail />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Years />
        <History />
        <Mission />
        <Projects />
        <Uniform />
        <Members />
        <Factories />
        <WorldMap />
        <Future />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
