# Монголын Оёдлын Нэгдсэн Холбоо — ORYZO-style Luxury Website (Final)

Кино шиг, luxury, модульчилсан Next.js (App Router) төсөл.
"Оёдол бүр түүхтэй" — ӨНГӨРСӨН → ОДОО → ИРЭЭДҮЙ.

## Архитектур (Monolithic → Modular)
```
app/
  layout.js          # <html lang="mn">, Manrope фонт, metadata
  page.js            # <SiteShell/>
  globals.css        # бүх дизайн систем (CSS хувьсагч, luxury токенууд)
components/
  SiteShell.jsx      # 'use client' — hook-уудыг дуудаж бүх хэсгийг угсарна
  ui/                # IntroVideo, Field, Cursor, Preloader, ThreadRail, Header
  sections/          # Hero, Marquee, Years, History, Mission, Projects,
                     # Uniform, Members, Factories, WorldMap, Future, Closing, Footer
hooks/
  useLenis.js            # Lenis smooth scroll + anchor scroll + ScrollTrigger sync
  useScrollAnimations.js # Master GSAP engine (intro→preloader→hero→reveal→pin→map)
  useLuxuryCursor.js     # cursor ring + trail + spotlight + magnetic + 3D tilt
public/
  intro.mp4          # cinematic intro loader video
  assets/            # лого + бүх зураг (HD) + intro.mp4
```

## Засагдсан алдаанууд (өмнөх хувилбаруудаас)
1. Monolithic нэг файл → бүрэн модульчилсан компонент + hook бүтэц.
2. Анимацийн logic-ийг хэсгүүдээс салгаж, дахин ашиглах боломжтой 3 hook болгов.
3. ScrollTrigger-уудыг `gsap.context()`-оор цэвэрлэж (cleanup) санах ойн алдагдлаас сэргийлэв.
4. `splitWords` давхар ажиллахаас хамгаалах guard нэмж толгойн текст эвдрэхээс сэргийлэв.
5. Хэвтээ pinned scroll-ыг `invalidateOnRefresh + matchMedia`-аар responsive болгов.
6. Бүх зургийн зам `/assets/...` болгож Next public-д нийцүүлэв.
7. Лого цагаан дэвсгэрийг тунгалаг (RGBA) болгож харанхуй UI дээр цэвэрхэн харагдуулав.
8. Hover-only үйлдлүүдийг `matchMedia('(hover:hover)')`-оор хамгаалж touch төхөөрөмжид зөв болгов.

## Онцлогууд (ORYZO.ai түвшин)
- Cinematic **intro video loader** (эхэнд бичлэг тоглож, дараа нь stitch preloader).
- **Luxury cursor**: цагираг + алтан trail + spotlight, magnetic товч, 3D tilt карт.
- **Advanced GSAP + ScrollTrigger**: master timeline, stagger, scrub, pin.
- **Хэвтээ pinned storytelling** (Төслүүд, desktop) → mobile дээр stacked.
- **Image reveal**: clip-path + scale + mask.
- **Text split**: гарчиг үг тус бүрээр доороос гарч ирэх.
- **Gradient eternal thread** (улаан→алт→цэнхэр) гүйлгээгээр зурагдах.
- **Glassmorphism + noise + амьд gradient field** дэвсгэр.
- **Gold accent #d4af77** + улаан #cf202a + цэнхэр #2e5aa4 (логоны өнгө).
- Counter анимац, deep parallax, blur reveal.

## Ажиллуулах
```bash
npm install
npm run dev      # http://localhost:3000
# production:
npm run build && npm start
```

## Build / шалгалт
Бүх компонент болон hook-уудын синтаксыг TypeScript-ээр transpile хийж шалгасан (0 алдаа).
Бодит `next build`-ийг өөрийн орчинд `npm install` хийсний дараа ажиллуулна уу.

## Зураг солих
`public/assets/` доторх ижил нэртэй файлуудыг өөрийн зургаар солино. Intro бичлэг: `public/intro.mp4` болон `public/assets/intro.mp4`.
