# Vatsal Patel — Portfolio

> _"Building thoughtful software — from full-stack systems and ML pipelines to agentic AI, often inspired by Formula 1."_

A warm, editorial-minimalist portfolio for **Vatsal Patel**, MS Computer Science at Northeastern University (Seattle). Cream-and-terracotta palette, serif/sans type pairing, and tasteful motion throughout.

**Live:** https://vatsalp2008.github.io/Portfolio

![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646cff?style=for-the-badge&logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwindcss)

## Design

- **Editorial warm minimalist** — cream `#F7F4EF`, terracotta `#C4763A`, warm border `#E5E0D8`
- **Type** — Fraunces (serif display), DM Sans (body), Poppins (hero name)
- **Animated hero** — a light dawn scene: pulsing sun glow, drifting warm orbs, floating dust motes, and softly animated rolling hills
- **Motion** — Framer Motion scroll reveals + GSAP-powered effects via [React Bits](https://reactbits.dev)

## Sections

- **Hero** — giant animated name with a rotating tagline and scroll cue
- **Marquee** — looping strip of technologies
- **About** — bio + a two-group experience timeline (Industry / Academia & Volunteering)
- **Skills** — Languages, ML/Data, Frameworks, Tools & Infra
- **Work** — featured F1 Analytics Dashboard with animated metrics, plus a grid of six projects
- **Contact** — email, LinkedIn, GitHub

## Tech Stack

- **React 19** + **Vite 7**
- **Tailwind CSS 3.4** with custom tokens (`cream`, `terra`, `warm`)
- **Framer Motion 12** — scroll-triggered animations
- **GSAP** + **@gsap/react** — SplitText, ScrollReveal, PillNav effects
- **React Bits** components (in `src/reactbits/`): PillNav, SplitText, RotatingText, LogoLoop, ScrollReveal, SpotlightCard, CountUp, GlareHover, ShinyText

## Quick Start

```bash
npm install       # install dependencies
npm run dev       # start dev server → http://localhost:5173/Portfolio/
npm run build     # production build to dist/
npm run deploy    # build + publish to the gh-pages branch
```

> **Deployment note:** GitHub Pages serves from the **`gh-pages`** branch, not `main`. Changes go live only after `npm run deploy` — pushing to `main` alone does not update the site.

## Project Structure

```
portfolio/
├── src/
│   ├── pages/Portfolio/index.jsx       # page shell: nav, section order, footer
│   ├── components/portfolio/
│   │   ├── HeroSection.jsx             # animated hero + name
│   │   ├── MarqueeSection.jsx          # LogoLoop tech strip
│   │   ├── AboutSection.jsx            # bio + experience timeline
│   │   ├── SkillsSection.jsx           # skill cards
│   │   ├── WorkSection.jsx             # featured + project grid
│   │   └── ContactSection.jsx          # contact links
│   ├── reactbits/                      # React Bits components (adapted to theme)
│   ├── index.css                       # fonts, tokens, globals
│   └── main.jsx
├── tailwind.config.js                  # palette + keyframes
├── vite.config.js                      # base: '/Portfolio/'
└── README.md
```

## Connect

- **LinkedIn**: [vatsalp20](https://linkedin.com/in/vatsalp20)
- **GitHub**: [vatsalp2008](https://github.com/vatsalp2008)
- **Email**: vatsalp2008@gmail.com

## License

MIT — see [LICENSE](LICENSE).

---

<div align="center">
  <p>Built with precision by Vatsal Patel</p>
</div>
