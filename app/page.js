import Link from 'next/link';
import Icon from '@/components/Icon';
import { heroMetrics, pillars, capabilities } from '@/lib/content';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="wrap">
          <div className="hero-content">
            <div className="badge-pill">FULL-STACK IT PARTNER</div>
            <div className="eyebrow-lg">MENERTECH IT <span className="cursor">×</span> <span className="accent-text">LAGOS</span></div>
            <h1>
              We build the systems
              <br />
              <span className="accent-text">your business runs on.</span>
            </h1>
            <p className="lede">
              MenerTech partners with growing companies to design, build, secure, and run the software and
              infrastructure behind their operations from first architecture sketch to 24/7 production support.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary" href="/contact">Book a consultation</Link>
              <Link className="btn btn-ghost" href="/services">View services</Link>
            </div>
          </div>
        </div>
        {/* <div className="hero-diagram-wrap" aria-hidden="true">
        </div> */}
      </section>

      <section className="mission">
        <div className="wrap mission-inner">
          <div className="badge-pill">OUR MISSION</div>
          <h2 className="mission-heading">
            Solving real problems
            <br />
            <span className="accent-text">through reliable systems.</span>
          </h2>
          <p className="mission-copy">
            MenerTech is an IT consulting and engineering firm working with founders, operators, and IT leaders who
            need technology that holds up under real business pressure. We embed directly with your team and stay
            accountable long after launch.
          </p>
          <div className="mission-stats">
            {heroMetrics.map((m) => (
              <div key={m.lbl}>
                <div className="num">{m.num}</div>
                <div className="lbl">{m.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="expertise">
        <div className="wrap">
          <div className="section-head-centered">
            <div className="badge-pill badge-pill-light">OUR EXPERTISE</div>
            <h2>
              Equipped for <span className="accent-text">what&apos;s next</span>
            </h2>
            <p>
              Our engineers work across eight core capabilities that make up MenerTech&apos;s four practices: web,
              cloud, security, and software strategy.
            </p>
          </div>
          <div className="capability-grid">
            {capabilities.map((c) => (
              <div className="capability-card" key={c.title}>
                <div className="capability-icon"><Icon name={c.icon} /></div>
                <h4>{c.title}</h4>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-partner">
        <div className="wrap">
          <div className="section-head-centered">
            <div className="badge-pill badge-pill-light">OUR VALUE</div>
            <h2>
              Why partner with <span className="accent-text">MenerTech?</span>
            </h2>
            <p>We don&apos;t just deliver projects, we stay accountable. Here&apos;s what sets us apart.</p>
          </div>
          <div className="pillar-grid">
            {pillars.map((p) => (
              <div className="pillar-card" key={p.code}>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap cta-band-inner">
          <div className="badge-pill">GET STARTED TODAY</div>
          <h2>
            Ready to fix what&apos;s
            <br />
            <span className="accent-text">breaking or overdue?</span>
          </h2>
          <p>
            Book a free 30-minute technical audit. We&apos;ll give you a straight answer on scope, cost, and
            whether you even need us.
          </p>
          <div className="hero-cta cta-band-buttons">
            <Link className="btn btn-primary" href="/contact">Book a consultation</Link>
            <Link className="btn btn-ghost" href="/services">View services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
