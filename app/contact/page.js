'use client';

import { useState } from 'react';
import { contactInfo, services } from '@/lib/content';

export default function ContactPage() {
  const [status, setStatus] = useState('idle');

  function handleSubmit(e) {
    e.preventDefault();
    // Wire this up to your email service, CRM, or API route of choice.
    setStatus('sent');
  }

  return (
    <section className="page-intro">
      <div className="wrap contact-grid">
        <div>
          <div className="eyebrow">Get in touch</div>
          <h2 className="heading-md">Start with a conversation, not a contract.</h2>
          <p className="lead-muted-sm">
            Reach out directly, or fill out the form and a senior consultant will follow up within one business day.
          </p>
          <div className="contact-info">
            {contactInfo.map((item) => (
              <div className="item" key={item.lbl}>
                <div className="lbl">{item.lbl}</div>
                <div className="val">{item.val}</div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="field-row">
            <div>
              <label htmlFor="fname">Full name</label>
              <input id="fname" name="name" type="text" placeholder="Your name" required />
            </div>
            <div>
              <label htmlFor="femail">Work email</label>
              <input id="femail" name="email" type="email" placeholder="you@company.com" required />
            </div>
          </div>
          <div className="field-row">
            <div>
              <label htmlFor="fcompany">Company</label>
              <input id="fcompany" name="company" type="text" placeholder="Company name" />
            </div>
            <div>
              <label htmlFor="fservice">Interested in</label>
              <select id="fservice" name="service" defaultValue={services[0].title}>
                {services.map((s) => (
                  <option key={s.code} value={s.title}>{s.title}</option>
                ))}
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="fmessage">What are you trying to solve?</label>
            <textarea
              id="fmessage"
              name="message"
              placeholder="A few sentences on the problem, timeline, or system involved."
            />
          </div>
          <div className="submit-row">
            <button className="btn btn-primary" type="submit">Send message →</button>
            {status === 'sent' ? (
              <span className="form-status">Thank you. We&apos;ll be in touch within one business day.</span>
            ) : (
              <span className="note">We reply within 1 business day.</span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
