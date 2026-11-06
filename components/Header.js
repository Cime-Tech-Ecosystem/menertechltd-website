import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/team', label: 'Team' },
];

export default function Header() {
  return (
    <header className="site-header">
      <nav>
        <Link href="/" className="logo">
          <img src="/images/plain-logo.png" alt="MenerTech" className="logo-mark" />
          MenerTech
        </Link>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="nav-links-cta">
          <Link className="nav-cta" href="/contact">
            Contact Us
          </Link>
          <button className="menu-btn" aria-label="Open menu">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2 5h16M2 10h16M2 15h16" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
