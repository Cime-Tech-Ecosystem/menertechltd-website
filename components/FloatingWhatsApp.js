import { whatsapp } from '@/lib/content';

export default function FloatingWhatsApp() {
  const href = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat with MenerTech on WhatsApp"
    >
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
        <path
          d="M13 3.5c-5.25 0-9.5 4.25-9.5 9.5 0 1.7.45 3.3 1.24 4.68L3.5 22.5l5.02-1.22A9.46 9.46 0 0 0 13 22.5c5.25 0 9.5-4.25 9.5-9.5S18.25 3.5 13 3.5Z"
          stroke="#ffffff"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M8.8 8.7c.2-.45.4-.46.6-.47.16 0 .35 0 .5.01.17.01.4-.06.62.48.24.58.8 2 .87 2.15.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.76 1.24 1.63 2 1.12 1 2.06 1.3 2.36 1.45.3.15.47.13.64-.08.17-.2.73-.85.93-1.14.2-.3.4-.24.66-.14.28.1 1.77.84 2.07 1 .3.15.5.22.57.35.08.13.08.75-.17 1.47-.25.72-1.45 1.4-2 1.5-.54.09-1.1.13-3.53-.74-2.93-1.05-4.8-3.97-4.95-4.16-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.4Z"
          fill="#ffffff"
        />
      </svg>
    </a>
  );
}
