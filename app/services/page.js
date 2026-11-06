import Link from 'next/link';
import Icon from '@/components/Icon';
import { services } from '@/lib/content';

export const metadata = {
  title: 'Services | MenerTech',
  description: 'Custom web services, cloud & infrastructure, cybersecurity, and software guidance from MenerTech.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="offerings page-intro">
        <div className="wrap">
          <div className="section-head-centered offerings-head">
            <div className="badge-pill badge-pill-light">OUR SERVICES</div>
            <h2>What We Do at MenerTech</h2>
            <p>
              Four practices, one accountable team. Engage us for a single project or as your ongoing technology
              partner, each backed by specialists who work across the others, so nothing gets lost between hand-offs.
            </p>
          </div>

          <div className="services-grid offerings-grid">
            {services.map((s) => (
              <div className="service-card offerings-card" key={s.code}>
                <div className="offerings-icon"><Icon name={s.icon} /></div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <div className="tag-row">
                  {s.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <Link className="btn btn-primary offerings-btn" href="/contact">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div>
            <h2>Curious how an engagement actually runs?</h2>
            <p>See the four-stage process we follow on every project, big or small.</p>
          </div>
          <Link className="btn btn-primary" href="/process">See our process</Link>
        </div>
      </section>
    </>
  );
}