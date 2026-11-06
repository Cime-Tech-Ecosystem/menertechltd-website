import Link from 'next/link';
import Image from 'next/image';
import { team, testimonials } from '@/lib/content';

export const metadata = {
  title: 'Team | MenerTech',
  description: 'The senior team accountable for every MenerTech engagement.',
};

export default function TeamPage() {
  return (
    <>
      <section className="team-hero">
        <div className="wrap section-head-centered team-hero-head">
          <div className="badge-pill">THE TEAM</div>
          <h2>Meet the Amazing Team</h2>
          <p>The people accountable for your engagement. The same people you&apos;ll actually talk to.</p>
        </div>
        <div className="wrap">
          <div className="team-photo-grid">
            {team.map((member) => (
              <div className="team-photo-card" key={member.name}>
                <div className="team-photo-wrap">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="team-photo"
                  />
                </div>
                <h4>{member.name}</h4>
                <div className="role">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="wrap">
          <div className="section-head-centered">
            <div className="badge-pill badge-pill-light">CLIENT FEEDBACK</div>
            <h2>What it&apos;s like to work with us</h2>
          </div>
          <div className="t-grid">
            {testimonials.map((t) => (
              <div className="t-card" key={t.name}>
                <p className="quote">{t.quote}</p>
                <div className="t-who">
                  <div className="t-avatar">{t.initials}</div>
                  <div>
                    <div className="name">{t.name}</div>
                    <div className="role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div>
            <h2>Want this team on your next project?</h2>
            <p>Tell us what you&apos;re working on and a senior consultant will follow up within one business day.</p>
          </div>
          <Link className="btn btn-primary" href="/contact">Get in touch</Link>
        </div>
      </section>
    </>
  );
}