"use client";
import { useEffect } from "react";
import gsap from "gsap";

/** Oryzo-style cursor ring + trailing dot + spotlight, magnetic buttons, 3D tilt. */
export default function useLuxuryCursor() {
  useEffect(() => {
    if (!window.matchMedia("(hover:hover)").matches) return;
    const cur = document.getElementById("cursor");
    const trail = document.getElementById("cursorTrail");
    const spot = document.getElementById("spot");
    if (!cur || !trail) return;

    const xT = gsap.quickTo(cur, "left", { duration: 0.4, ease: "power3" });
    const yT = gsap.quickTo(cur, "top", { duration: 0.4, ease: "power3" });
    const xD = gsap.quickTo(trail, "left", { duration: 0.12, ease: "power3" });
    const yD = gsap.quickTo(trail, "top", { duration: 0.12, ease: "power3" });

    const onMove = (e) => {
      xT(e.clientX); yT(e.clientY); xD(e.clientX); yD(e.clientY);
      if (spot) gsap.to(spot, { left: e.clientX, top: e.clientY, duration: 0.8, ease: "power2.out" });
    };
    window.addEventListener("mousemove", onMove);

    const hoverEls = document.querySelectorAll("a,button,[data-mag],.proj,.fac,.dir-row.has,.panel,.logo-card");
    const grow = () => cur.classList.add("big");
    const shrink = () => cur.classList.remove("big");
    hoverEls.forEach((el) => { el.addEventListener("mouseenter", grow); el.addEventListener("mouseleave", shrink); });

    const magCleanup = [];
    document.querySelectorAll("[data-mag]").forEach((b) => {
      const mm = (e) => { const r = b.getBoundingClientRect(); gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * 0.32, y: (e.clientY - r.top - r.height / 2) * 0.32, duration: 0.4 }); };
      const ml = () => gsap.to(b, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1,.4)" });
      b.addEventListener("mousemove", mm); b.addEventListener("mouseleave", ml);
      magCleanup.push(() => { b.removeEventListener("mousemove", mm); b.removeEventListener("mouseleave", ml); });
    });

    const tiltCleanup = [];
    document.querySelectorAll(".logo-card,.mcard,.fac").forEach((el) => {
      const amt = el.classList.contains("logo-card") ? 16 : 7;
      const tm = (e) => { const r = el.getBoundingClientRect(); const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5; gsap.to(el, { rotateY: px * amt, rotateX: -py * amt, duration: 0.5, ease: "power2.out", transformPerspective: 900, transformOrigin: "center" }); };
      const tl = () => gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.8, ease: "elastic.out(1,.5)" });
      el.addEventListener("mousemove", tm); el.addEventListener("mouseleave", tl);
      tiltCleanup.push(() => { el.removeEventListener("mousemove", tm); el.removeEventListener("mouseleave", tl); });
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      hoverEls.forEach((el) => { el.removeEventListener("mouseenter", grow); el.removeEventListener("mouseleave", shrink); });
      magCleanup.forEach((f) => f()); tiltCleanup.forEach((f) => f());
    };
  }, []);
}
