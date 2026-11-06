# MenerTech — Next.js site

A multi-page marketing site for MenerTech, built with Next.js 14 (App Router).

## Pages

- `/` — Home (hero, services preview, stats, testimonials, CTA)
- `/about` — Company story and operating pillars
- `/services` — Full service catalog (Custom Web Services, Cloud & Infrastructure, Cybersecurity, Software Guidance)
- `/process` — The four-stage engagement model
- `/team` — Leadership team and client testimonials
- `/contact` — Contact details and inquiry form (client component with basic submit state)

## Structure

```
app/
  layout.js         Root layout: fonts, status strip, header, footer
  globals.css        All site styles
  page.js             Home page
  about/page.js
  services/page.js
  process/page.js
  team/page.js
  contact/
    layout.js         Server layout (exports route metadata)
    page.js            Client component (form state)
components/
  Header.js
  Footer.js
  HeroDiagram.js
lib/
  content.js          Shared copy: services, team, testimonials, stats, etc.
```

Editing `lib/content.js` updates the same data everywhere it's used (e.g. services show up on both the home page and `/services`, and in the footer).

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

## Next steps you may want

- Wire the contact form in `app/contact/page.js` to an API route, email service (e.g. Resend), or CRM.
- Replace placeholder team names, testimonials, stats, and contact details in `lib/content.js` with real ones.
- Add real social links in `components/Footer.js`.
- Deploy to Vercel, Netlify, or any Node host that supports Next.js.
