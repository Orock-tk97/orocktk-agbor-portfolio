# Orocktakang Agbor – Astro portfolio

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to /dist
```

## Before you deploy
1. Set `site` in `astro.config.mjs` and the Sitemap URL in `public/robots.txt` to your real domain.
2. Copy into `/public`: `Dport.png`, `portfolio.png`, `me.jpg`, `resume.pdf`, `og.png` (1200x630 social preview).
3. Copy project thumbnails into `/public/images/`.
4. Add real GitHub / X URLs in `src/data/site.ts`.
5. Edit all content (projects, skills, timeline, services) in `src/data/site.ts`.
