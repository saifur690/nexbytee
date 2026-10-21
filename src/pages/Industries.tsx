import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../assets/css/industries.css';

const industries = [
  { name: 'ISP & Telecom', slug: 'telecom', metrics: [['subscriber billing', 'Auto'], ['network view', 'Live'], ['support channels', '3']], features: ['Subscriber onboarding and billing', 'Network monitoring and support queues', 'SMS, voice and payment integrations'] },
  { name: 'Education', slug: 'education', metrics: [['student records', 'Unified'], ['fee collection', 'Online'], ['class schedules', 'Auto']], features: ['Admissions, attendance and student records', 'Fee collection and parent communication', 'Learning portals and academic reporting'] },
  { name: 'Healthcare', slug: 'healthcare', metrics: [['appointments', 'Online'], ['patient records', 'Unified'], ['reminders', 'Auto']], features: ['Appointment booking and patient journeys', 'Clinic operations and reporting', 'Patient reminders and communication'] },
  { name: 'Retail', slug: 'retail', metrics: [['inventory', 'Live'], ['sales channels', 'Unified'], ['stock alerts', 'Auto']], features: ['Point of sale and inventory management', 'Multi-store sales and stock reporting', 'Customer loyalty and order tracking'] },
  { name: 'Finance', slug: 'finance', metrics: [['approval flows', 'Tracked'], ['reporting', 'Unified'], ['access control', 'Roles']], features: ['Approval workflows and audit trails', 'Reporting and financial dashboards', 'Role-based access and connected systems'] },
  { name: 'Manufacturing', slug: 'manufacturing', metrics: [['production', 'Tracked'], ['inventory', 'Live'], ['planning', 'Unified']], features: ['Production planning and work orders', 'Raw materials and inventory visibility', 'Procurement and operations reporting'] },
  { name: 'Corporate', slug: 'corporate', metrics: [['team workflows', 'Unified'], ['approvals', 'Auto'], ['reporting', 'Live']], features: ['HR, approvals and internal workflows', 'Employee portals and business dashboards', 'ERP, CRM and communication integrations'] },
  { name: 'E-commerce', slug: 'e-commerce', metrics: [['mobile conversion', '+30%'], ['payment methods', '4'], ['courier booking', 'Auto']], features: ['Fast mobile-first storefront', 'Order, stock and courier management', 'bKash, Nagad, cards and cash on delivery'] },
  { name: 'Logistics', slug: 'logistics', metrics: [['shipments', 'Tracked'], ['dispatch', 'Auto'], ['delivery status', 'Live']], features: ['Dispatch planning and shipment tracking', 'Courier booking and delivery updates', 'Fleet operations and customer notifications'] },
  { name: 'Real Estate', slug: 'real-estate', metrics: [['property listings', 'Online'], ['lead pipeline', 'Tracked'], ['viewing slots', 'Auto']], features: ['Property listings and viewing bookings', 'Lead tracking and sales follow-ups', 'Client portals and document workflows'] },
];

function IndustryIcon({ index }: { index: number }) {
  const paths = [
    'M3 9a14 14 0 0 1 18 0M6 12a9 9 0 0 1 12 0M9 15a4 4 0 0 1 6 0M12 18h.01',
    'M5 3h14v18H5zM5 17h14M8 6h8',
    'M12 20S3 14 3 8a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6-9 12-9 12Z',
    'M4 7h16l-1 14H5L4 7ZM8 7V4h8v3M9 11c0 4 6 4 6 0',
    'm3 8 9-5 9 5H3ZM5 10v8m5-8v8m4-8v8m5-8v8M3 21h18',
    'M3 21V9l6 4V7l6 4V3h6v18H3ZM6 17h2m3 0h2m3 0h2',
    'M5 21V3h14v18M9 7h1m4 0h1M9 11h1m4 0h1M9 15h1m4 0h1M10 21v-3h4v3',
    'M2 3h3l3 13h11l3-9H6M9 21h.01M18 21h.01',
    'M3 5h12v12H3ZM15 9h4l3 4v4h-7M6 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
    'm3 11 9-8 9 8M5 9v12h14V9M10 21v-8h4v8',
  ];
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[index]} /></svg>;
}

function Industries() {
  const [selected, setSelected] = useState(7);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const faqs = [
    ['Do you only build for these ten industries?', 'No. These are the sectors where we have the most products and projects. We regularly build for other businesses by starting from the closest proven modules.'],
    ['Can you work with industry regulations?', 'We can plan workflows, access controls and reporting around your industry requirements. We agree the relevant standards and review needs with your team before defining the scope.'],
    ['Do we have to use a Nexbyte product?', 'No. We can build custom software, integrate your existing tools or combine them with Nexbyte products, depending on what fits your business.'],
    ['Do you support local payments like bKash and Nagad?', 'We can integrate local payment options such as bKash and Nagad, alongside cards and other payment methods. Availability depends on your merchant accounts and the provider requirements.'],
    ['How long does an industry project take?', 'The timeline depends on scope, integrations and the systems you already use. After discovery, we define milestones and an estimate, then review progress through regular demos.'],
  ];
  const industry = industries[selected];
  return (
    <main className="industries-page" tabIndex={-1}>
      <div className="industries-inner">
        <section className="industries-hero" aria-labelledby="industries-title">
          <div className="industries-copy">
            <p className="industries-kicker">INDUSTRIES</p>
            <h1 id="industries-title">Software shaped<br />by <span>industry<br />experience.</span></h1>
            <p className="industries-description">Ten sectors where our products and teams already run real operations. We know the workflows, the regulations and the customers, so you start from proven modules, not a blank page.</p>
            <div className="industries-actions"><Link to="/contact" className="industry-primary">Talk to an industry lead <span aria-hidden="true">&#8594;</span></Link></div>
            <p className="industry-preview-label">PREVIEW YOUR INDUSTRY</p>
            <div className="industry-options" aria-label="Choose an industry">
              {industries.map((item, index) => <button type="button" key={item.slug} aria-pressed={selected === index} onClick={() => setSelected(index)}><IndustryIcon index={index} />{item.name}</button>)}
            </div>
          </div>
          <div className="industry-dashboard-wrap">
            <section className="industry-dashboard" aria-label={`${industry.name} dashboard preview`}>
              <div className="industry-browser"><span className="industry-browser-dots" aria-hidden="true"><i /><i /><i /></span><span className="industry-browser-url">app.nexbyte.com.bd/{industry.slug}</span><span className="industry-demo-label">Demo</span></div>
              <div className="industry-app">
                <div className="industry-app-sidebar" aria-hidden="true"><span><IndustryIcon index={selected} /></span><span>&#8599;</span><span>&#9671;</span><span>&#9881;</span></div>
                <div className="industry-app-main" aria-live="polite" aria-atomic="true">
                  <div className="industry-app-heading"><div><p>{industry.name}</p><h2>Operations overview</h2></div><span>This month</span></div>
                  <div className="industry-metrics">{industry.metrics.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
                  <div className="industry-chart" role="img" aria-label={`Illustrative ${industry.name} activity chart`}>
                    {[42, 48, 50, 35, 43, 41, 66, 61, 60, 46, 47, 51, 67, 49].map((height, index) => <span key={index} style={{ height: `${Math.min(92, height + (selected === 7 ? 0 : ((index + selected) % 4) * 6))}%` }} />)}
                  </div>
                  <ul className="industry-dashboard-tasks">{industry.features.map((feature, index) => <li key={feature}><span className="industry-task-check" aria-hidden="true">&#10003;</span><span>{feature}</span><small>{['2m', '14m', '1h'][index]}</small></li>)}</ul>
                </div>
              </div>
              <p className="industry-preview-note">Illustrative dashboard · example data</p>
            </section>
            <div className="industry-proof"><span aria-hidden="true">&#10003;</span><div><strong>Proven modules</strong><p>reused across 120+ projects</p></div></div>
          </div>
        </section>
        <section className="industry-results" aria-label="Nexbyte industry statistics">
          {[
            ['10', 'industries served'],
            ['120+', 'projects delivered'],
            ['40k+', 'end users on our software'],
            ['6', 'in-house products'],
          ].map(([value, label]) => (
            <div className="industry-result" key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </section>
        <section className="industry-trusted" aria-label="Trusted teams across sectors">
          <h2>TRUSTED BY TEAMS ACROSS SECTORS</h2>
          <ul>{['Northwind', 'Lumen Bank', 'Apex Telecom', 'Greenfield', 'Meridian Health', 'Cobalt Retail', 'Skyline Logistics', 'Brightpath Edu'].map((name) => <li key={name}>{name}</li>)}</ul>
        </section>
      </div>
      <section className="industry-case-section" aria-label="Featured industry results">
        <div className="industry-case-inner">
          <article className="industry-featured-case">
            <p className="industry-case-kicker">FEATURED RESULT &middot; ISP &amp; TELECOM</p>
            <div className="industry-case-metric"><strong>72%</strong><span>less billing time</span></div>
            <h2>Automating billing for 40,000 subscribers</h2>
            <p className="industry-case-description">Manual billing and frequent payment disputes. A custom ISP billing system with online payments, Bulk SMS reminders and a subscriber portal.</p>
            <details className="industry-case-details industry-case-details-featured">
              <summary>Read the case study <span aria-hidden="true">&#8594;</span></summary>
              <div><h3>A connected billing workflow</h3><p>Online payments, automated Bulk SMS reminders and a subscriber portal brought the billing process into one system, reducing billing time by 72% for 40,000 subscribers.</p></div>
            </details>
          </article>
          <div className="industry-secondary-cases">
            <article className="industry-small-case industry-healthcare-case">
              <h2 className="industry-case-kicker">HEALTHCARE</h2>
              <div className="industry-small-metric"><strong>18%</strong><span>lower stock-outs</span></div>
              <p>One ERP across 6 depots and 120 sales reps</p>
              <details className="industry-case-details"><summary>Read case <span aria-hidden="true">&#8594;</span></summary><div><p>A shared ERP connected stock and sales across six depots and 120 sales representatives, with 18% fewer stock-outs.</p></div></details>
            </article>
            <article className="industry-small-case">
              <h2 className="industry-case-kicker">EDUCATION</h2>
              <div className="industry-small-metric"><strong>9,000+</strong><span>online admissions</span></div>
              <p>Admissions and fees moved fully online</p>
              <details className="industry-case-details"><summary>Read case <span aria-hidden="true">&#8594;</span></summary><div><p>Admissions and fee collection moved into an online workflow, supporting more than 9,000 online admissions.</p></div></details>
            </article>
          </div>
        </div>
      </section>
      <section className="industry-faq" aria-labelledby="industry-faq-title">
        <div className="industry-faq-inner">
          <header><p className="industries-kicker">FAQ</p><h2 id="industry-faq-title">Questions industry<br />teams ask us</h2></header>
          <div className="industry-faq-list">
            {faqs.map(([question, answer], index) => (
              <div className="industry-faq-item" key={question}>
                <h3><button type="button" id={`industry-faq-question-${index}`} aria-expanded={openFaq === index} aria-controls={`industry-faq-answer-${index}`} onClick={() => setOpenFaq(openFaq === index ? null : index)}>{question}<span aria-hidden="true">{openFaq === index ? '\u2212' : '+'}</span></button></h3>
                <div id={`industry-faq-answer-${index}`} role="region" aria-labelledby={`industry-faq-question-${index}`} hidden={openFaq !== index}><p>{answer}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
export default Industries;
