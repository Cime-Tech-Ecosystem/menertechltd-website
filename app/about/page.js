import Link from 'next/link';
import Icon from '@/components/Icon';
import Image from 'next/image';
import { vms } from '@/lib/content';

export const metadata = {
  title: 'About | MenerTech',
  description: 'MenerTech is an IT consulting and engineering firm working with founders, operators, and IT leaders.',
};

export default function AboutPage() {
  return (
    <>
      <section className="story page-intro">
        <div className="wrap story-grid">
          <div className="story-copy">
            <div className="badge-pill badge-pill-light">OUR STORY</div>
            <h2 className="heading-md">Built in Lagos, built to last.</h2>
            <p>
              MenerTech is an IT consulting and engineering firm working with founders, operators, and IT leaders
              who need technology that holds up under real business pressure and not just a working demo.
            </p>
            <p>
              We started as a two-person shop fixing brittle internal tools for logistics companies. Today we run
              full engagements across software delivery, cloud infrastructure, cybersecurity, and long-term
              managed support but we&apos;ve kept the habit of treating every client&apos;s system like it&apos;s
              the only one we&apos;re responsible for.
            </p>
            <p>
              Our teams embed directly with yours. Our team is made of engineers and consultants who show their work and stay accountable after launch.
            </p>
          </div>
          <div className="story-image-wrap">           
            <Image
              src="/images/our-story-pen.jpg"
              alt="The MenerTech team"
              fill
              className="story-image"
            />
          </div>
        </div>
      </section>

      <section className="vms">
        <div className="wrap">
          <div className="section-head-centered">
            <div className="badge-pill">WHAT DRIVES US</div>
            <h2 style={{ color: '#fff' }}>Vision, Mission &amp; Approach</h2>
          </div>
          <div className="vms-grid">
            {vms.map((v) => (
              <div className="vms-card" key={v.title}>
                <div className="vms-icon"><Icon name={v.icon} /></div>
                <h4>{v.title}</h4>
                <p>{v.body}</p>
                <span className="vms-underline" />
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="cta-band">
        <div className="wrap">
          <div>
            <h2>Want to meet the team behind the work?</h2>
            <p>See who leads engineering, security, and delivery on every engagement.</p>
          </div>
            <Link className="btn btn-primary" href="/team">Meet the team</Link>
        </div>
      </section>

      <section className="partner-band">
        <div className="wrap partner-band-inner">
          <h2>Partner with MenerTech</h2>
          <p>Whether you need a software team, cloud migration, or security review — we&apos;re ready to help you build what&apos;s next.</p>
          <div className="hero-cta cta-band-buttons">
            <Link className="btn btn-primary" href="/contact">Get in touch</Link>
            <Link className="btn btn-ghost" href="/services">Explore services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
