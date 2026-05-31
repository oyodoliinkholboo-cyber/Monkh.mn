"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Smooth scroll (Lenis) + anchor scrolling, synced with ScrollTrigger. */
export default function useLenis() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 1 });
    window.__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    let rafId;
    const raf = (t) => { lenis.raf(t); rafId = requestAnimationFrame(raf); };
    rafId = requestAnimationFrame(raf);

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (id.length > 1) {
        const el = document.querySelector(id);
        if (el) { e.preventDefault(); lenis.scrollTo(el, { offset: -10 }); }
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);
}
