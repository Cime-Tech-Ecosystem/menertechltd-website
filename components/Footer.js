import Link from 'next/link';
import { services, contactInfo } from '@/lib/content';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" className="footer-logo">
            <img src="/images/plain-logo.png" alt="MenerTech" className="logo-mark" />
              MenerTech
            </Link>
            <p className="footer-blurb">Building the systems your business runs on.</p>
          </div>
          <div>
            <h5>Quick Links</h5>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/process">Our Process</Link></li>
              <li><Link href="/team">Team</Link></li>
            </ul>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              {services.map((service) => (
                <li key={service.code}>
                  <Link href="/services">{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul className="footer-contact">
              <li>{contactInfo.find((i) => i.lbl === 'Office')?.val}</li>
              <li><a href={`tel:${contactInfo.find((i) => i.lbl === 'Phone')?.val.replace(/[^\d+]/g, '')}`}>{contactInfo.find((i) => i.lbl === 'Phone')?.val}</a></li>
              <li><a href={`mailto:${contactInfo.find((i) => i.lbl === 'Email')?.val}`}>{contactInfo.find((i) => i.lbl === 'Email')?.val}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 MenerTech Ltd. All rights reserved.</span>
          <span>Privacy Policy · Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
