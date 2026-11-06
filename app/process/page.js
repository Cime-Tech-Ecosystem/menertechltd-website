import Link from 'next/link';
import { processSteps } from '@/lib/content';

export const metadata = {
  title: 'Our Process | MenerTech',
  description: 'A disciplined four-stage engagement: Discover, Design, Build & Deploy, Support.',
};

export default function ProcessPage() {
  return (
    <>
      <section className="process page-intro">
        <div className="wrap">
          <div className="section-head">
            <div className="badge-pill badge-pill-light">HOW WE WORK</div>
            <h2>A four-stage engagement, every time</h2>
            <p>The same disciplined sequence whether the project runs four weeks or four quarters.</p>
          </div>
          <div className="process-row">
            {processSteps.map((step) => (
              <div className="process-step" key={step.code}>
                <div className="code">{step.code}</div>
                <h4>{step.title}</h4>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div>
            <h2>Ready to start with Discover?</h2>
            <p>Book a free technical audit and we&apos;ll scope the first stage together.</p>
          </div>
          <Link className="btn btn-primary" href="/contact">Book a consultation</Link>
        </div>
      </section>
    </>
  );
}
