import { FormEvent, useState } from 'react';
import '../assets/css/contact.css';

const serviceOptions = [
  'Custom software development',
  'Web application development',
  'Mobile app development',
  'ERP or CRM development',
  'SaaS development',
  'API or system integration',
  'UI/UX design',
  'Cloud and infrastructure',
  'IT consulting',
  'Not sure yet',
];

function Contact() {
  const [briefReady, setBriefReady] = useState(false);

  function prepareBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const fields = [
      ['Name', form.get('name')],
      ['Email', form.get('email')],
      ['Company', form.get('company')],
      ['Service', form.get('service')],
      ['Project details', form.get('details')],
    ];
    const brief = [
      'NEXBYTE — PROJECT INQUIRY',
      '',
      ...fields.map(([label, value]) => `${label}:\n${value || 'Not provided'}`),
    ].join('\n\n');
    const fileUrl = URL.createObjectURL(
      new Blob([brief], { type: 'text/plain;charset=utf-8' })
    );
    const downloadLink = document.createElement('a');

    downloadLink.href = fileUrl;
    downloadLink.download = 'nexbyte-project-inquiry.txt';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();
    window.setTimeout(() => URL.revokeObjectURL(fileUrl), 1000);
    setBriefReady(true);
  }

  return (
    <main className="contact-page" tabIndex={-1}>
      <header className="contact-heading">
        <h1>
          Have a project in mind?
          <span>Let’s make it happen.</span>
        </h1>
        <p>
          Tell us a little about what you’re building. We’ll help you find a
          clear next step.
        </p>
      </header>

      <section className="contact-layout" aria-label="Contact Nexbyte">
        <aside className="contact-aside">
          <div className="contact-note">
            <span className="contact-note-icon" aria-hidden="true">✳</span>
            <p className="contact-note-label">A GOOD PLACE TO START</p>
            <h2>Bring us the challenge. We’ll help shape the solution.</h2>
            <p>
              Whether you need a new product, connected systems or a better
              way to work, share what you have in mind.
            </p>
          </div>

          <div className="contact-location">
            <span className="contact-location-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </span>
            <span>
              <strong>Based in Dhaka</strong>
              <small>Working with businesses in Bangladesh and abroad</small>
            </span>
          </div>

          <div className="contact-aside-footer">
            <span className="contact-status-dot" aria-hidden="true" />
            <span>Let’s build something useful.</span>
          </div>
        </aside>

        <form className="contact-form" onSubmit={prepareBrief} onChange={() => setBriefReady(false)}>
          <div className="contact-form-heading">
            <div>
              <p className="contact-form-kicker">PROJECT INQUIRY</p>
              <h2>Tell us about your project</h2>
            </div>
            <span className="contact-step">01 <span>/ 01</span></span>
          </div>

          <div className="contact-form-row">
            <label>
              <span className="contact-label-text">Your name <span aria-hidden="true">*</span></span>
              <input
                name="name"
                type="text"
                autoComplete="name"
                maxLength={100}
                placeholder="e.g. Samira Ahmed"
                required
              />
            </label>
            <label>
              <span className="contact-label-text">Work email <span aria-hidden="true">*</span></span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                maxLength={200}
                placeholder="you@company.com"
                required
              />
            </label>
          </div>

          <label>
            <span className="contact-label-text">
              Company <span className="contact-optional">(optional)</span>
            </span>
            <input
              name="company"
              type="text"
              autoComplete="organization"
              maxLength={160}
              placeholder="Your company or team"
            />
          </label>

          <label>
            <span className="contact-label-text">What can we help with? <span aria-hidden="true">*</span></span>
            <select name="service" defaultValue="" required>
              <option value="" disabled>Select a service</option>
              {serviceOptions.map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </label>

          <label>
            <span className="contact-label-text">A little about the project <span aria-hidden="true">*</span></span>
            <textarea
              name="details"
              rows={4}
              maxLength={4000}
              placeholder="What are you looking to build or improve?"
              required
            />
          </label>

          <div className="contact-form-submit">
            <p>Your information stays on this device. This form prepares a brief; it does not send it.</p>
            <button type="submit">
              Prepare project brief <span aria-hidden="true">→</span>
            </button>
          </div>
          {briefReady && (
            <p className="contact-form-status" role="status">
              Your project brief has been downloaded. It hasn’t been sent to Nexbyte.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}

export default Contact;
