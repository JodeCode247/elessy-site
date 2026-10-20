# ELESSY Nigeria Limited website

Next.js 14 (App Router), TypeScript (strict), Tailwind CSS, Framer Motion, Lucide.

## Run
    npm install
    npm run dev        # http://localhost:3000
    npm run build && npm start

## Edit without touching components
- Business details and nav: `lib/site.ts` (phone, WhatsApp, email, address are PLACEHOLDERS)
- Hero images: `lib/hero-slides.ts` (files in `public/images`)
- Services, products, FAQ, articles: `lib/content.ts`
- Colours: CSS variables in `app/globals.css` (mapped in `tailwind.config.ts`)

## Enquiry form
`app/api/enquiry/route.ts` validates and logs. Add email or webhook delivery where marked TODO.

## Deploy (Vercel)
Import the repo, set `NEXT_PUBLIC_SITE_URL`, deploy, then add the domain in Project Settings.
