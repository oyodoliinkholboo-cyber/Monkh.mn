"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Master GSAP + ScrollTrigger engine: intro video, preloader, hero, reveals,
 *  split-text, counters, parallax, thread draw, horizontal pin, world map. */
export default function useScrollAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      function splitWords(el) {
        if (!el) return [];
        if (el.querySelector(".w")) return el.querySelectorAll(".w>i");
        const out = [];
        el.childNodes.forEach((node) => {
          if (node.nodeType === 3) {
            node.textContent.split(/(\s+)/).forEach((tok) => {
              if (tok === "") return;
              if (tok.trim() === "") { out.push(document.createTextNode(tok)); }
              else { const s = document.createElement("span"); s.className = "w"; const i = document.createElement("i"); i.textContent = tok; s.appendChild(i); out.push(s); }
            });
          } else {
            const s = document.createElement("span"); s.className = "w"; const i = document.createElement("i"); i.appendChild(node.cloneNode(true)); s.appendChild(i); out.push(s);
          }
        });
        el.innerHTML = ""; out.forEach((n) => el.appendChild(n));
        return el.querySelectorAll(".w>i");
      }

      function buildMap() {
        const countries = [
          { n: "АНУ", x: 165, y: 175 }, { n: "Казахстан", x: 480, y: 160 }, { n: "ОХУ", x: 560, y: 85 },
          { n: "Швед", x: 430, y: 78 }, { n: "ХБНГУ", x: 395, y: 135 }, { n: "БНХАУ", x: 700, y: 300 },
          { n: "Япон", x: 830, y: 235 }, { n: "Тайвань", x: 805, y: 330 }, { n: "Вьетнам", x: 740, y: 385 },
        ];
        const hub = { x: 640, y: 215 }, svgns = "http://www.w3.org/2000/svg";
        const lines = document.getElementById("mapLines"), nodes = document.getElementById("mapNodes");
        if (!lines || !nodes) return;
        countries.forEach((c, i) => {
          const p = document.createElementNS(svgns, "path");
          const mx = (c.x + hub.x) / 2, my = Math.min(c.y, hub.y) - 50;
          p.setAttribute("d", "M" + hub.x + "," + hub.y + " Q" + mx + "," + my + " " + c.x + "," + c.y);
          p.setAttribute("stroke", "#d4af77"); p.setAttribute("stroke-width", "1.2"); p.setAttribute("fill", "none"); p.setAttribute("opacity", ".28");
          p.style.strokeDasharray = 440; p.style.strokeDashoffset = 440; lines.appendChild(p);
          ScrollTrigger.create({ trigger: "#world", start: "top 62%", onEnter: () => gsap.to(p, { strokeDashoffset: 0, duration: 1.3, delay: i * 0.1, ease: "power2.out", onComplete: () => { p.style.strokeDasharray = "4 4"; } }) });
          const g = document.createElementNS(svgns, "g"); g.setAttribute("class", "country-node"); g.setAttribute("transform", "translate(" + c.x + "," + c.y + ")");
          const ring = document.createElementNS(svgns, "circle"); ring.setAttribute("r", "12"); ring.setAttribute("fill", "none"); ring.setAttribute("stroke", "rgba(207,32,42,.3)");
          const dot = document.createElementNS(svgns, "circle"); dot.setAttribute("class", "dot"); dot.setAttribute("r", "4"); dot.setAttribute("fill", "#cf202a");
          const t = document.createElementNS(svgns, "text"); t.setAttribute("y", "-16"); t.setAttribute("text-anchor", "middle"); t.textContent = c.n;
          g.append(ring, dot, t); nodes.appendChild(g);
          gsap.from(g, { opacity: 0, scale: 0, transformOrigin: "center", duration: 0.6, delay: 0.4 + i * 0.09, scrollTrigger: { trigger: "#world", start: "top 62%" } });
        });
      }

      function start() {
        const heroTitle = document.getElementById("heroTitle");
        const heroParts = splitWords(heroTitle);
        gsap.set(".hero-img", { clipPath: "inset(0 0 0 0)" });
        gsap.timeline({ delay: 0.05 })
          .from(".hero-img", { clipPath: "inset(0 0 100% 0)", duration: 1.3, ease: "power3.inOut" })
          .from("#heroImg", { scale: 1.2, duration: 1.8, ease: "power3.out" }, "<")
          .to("#hero .eyebrow", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=1")
          .from(heroParts, { yPercent: 115, duration: 1.1, stagger: 0.07, ease: "expo.out" }, "-=.55")
          .to(".hero-sub", { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, "-=.7")
          .from(".logo-card", { opacity: 0, y: 60, rotateX: 18, rotateY: -16, duration: 1.1, ease: "power3.out" }, "-=1");

        gsap.utils.toArray(".sec-head h2, .big-statement").forEach((el) => {
          const parts = splitWords(el);
          gsap.from(parts, { yPercent: 115, duration: 1, stagger: 0.06, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 88%" } });
        });

        gsap.utils.toArray(".reveal").forEach((el) => {
          gsap.to(el, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } });
        });
        gsap.utils.toArray(".clip").forEach((el) => {
          gsap.to(el, { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 86%" } });
        });

        document.querySelectorAll("[data-count]").forEach((el) => {
          const end = +el.dataset.count, pre = el.dataset.prefix || "", suf = el.dataset.suffix || "", o = { v: 0 };
          ScrollTrigger.create({ trigger: el, start: "top 90%", once: true, onEnter: () => {
            gsap.to(o, { v: end, duration: 1.6, ease: "power2.out", onUpdate: () => { el.textContent = pre + Math.floor(o.v).toLocaleString("en-US") + suf; } });
          } });
        });

        gsap.to("#heroImg", { yPercent: 14, ease: "none", scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true } });
        gsap.to("#uniImg", { yPercent: -12, ease: "none", scrollTrigger: { trigger: "#uniform", start: "top bottom", end: "bottom top", scrub: true } });
        gsap.utils.toArray(".bgmark").forEach((m) => {
          const sp = parseFloat(m.dataset.speed || "0.5");
          gsap.to(m, { yPercent: -30 * sp * 2, ease: "none", scrollTrigger: { trigger: m.closest("section"), start: "top bottom", end: "bottom top", scrub: true } });
        });

        ScrollTrigger.create({ start: 60, onUpdate: (s) => { const hd = document.getElementById("hd"); if (hd) hd.classList.toggle("scrolled", s.scroll() > 60); } });

        const path = document.getElementById("threadPath");
        if (path) {
          const len = path.getTotalLength();
          path.style.strokeDasharray = len; path.style.strokeDashoffset = len;
          ScrollTrigger.create({ trigger: document.body, start: "top top", end: "bottom bottom", scrub: 0.6, onUpdate: (s) => { path.style.strokeDashoffset = len * (1 - s.progress); } });
        }

        const mm = gsap.matchMedia();
        mm.add("(min-width:981px)", () => {
          const track = document.querySelector(".htrack");
          if (!track) return;
          const dist = () => track.scrollWidth - window.innerWidth + 80;
          const tw = gsap.to(track, { x: () => -dist(), ease: "none", scrollTrigger: { trigger: "#projects", start: "top top", end: () => "+=" + dist(), scrub: 1, pin: true, anticipatePin: 1, invalidateOnRefresh: true } });
          return () => tw.kill();
        });

        buildMap();
        ScrollTrigger.refresh();
      }

      function runPreloader() {
        const tl = gsap.timeline();
        tl.to("#pre img", { opacity: 1, scale: 1, duration: 0.7, ease: "power3.out" })
          .from("#pre .stitch", { scaleX: 0, duration: 0.9, ease: "power2.inOut" }, "-=.4")
          .to("#pre .t", { opacity: 1, duration: 0.5 }, "-=.5")
          .to("#pre .bar i", { scaleX: 1, duration: 0.9, ease: "power2.inOut" }, "-=.3")
          .to("#pre img", { rotate: 6, scale: 1.05, duration: 0.28 })
          .to("#pre img", { rotate: 0, scale: 1, duration: 0.26 })
          .to("#pre", { yPercent: -100, duration: 0.9, ease: "power4.inOut", onComplete() { const p = document.getElementById("pre"); if (p) p.style.display = "none"; document.body.classList.remove("lock"); start(); } }, "+=.05");
      }

      function bootIntro() {
        const intro = document.getElementById("intro"), vid = document.getElementById("introVid");
        let done = false;
        function finish() { if (done) return; done = true; gsap.to(intro, { opacity: 0, duration: 0.8, ease: "power2.inOut", onComplete() { if (intro) intro.style.display = "none"; runPreloader(); } }); }
        const skip = document.getElementById("introSkip"); if (skip) skip.addEventListener("click", finish);
        if (vid) { const p = vid.play && vid.play(); if (p && p.catch) p.catch(() => {}); vid.addEventListener("ended", finish); setTimeout(finish, 11000); }
        else finish();
      }

      document.body.classList.add("lock");
      requestAnimationFrame(bootIntro);
    });

    return () => ctx.revert();
  }, []);
}
