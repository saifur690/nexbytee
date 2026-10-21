import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import '../assets/css/services.css';

type ServiceIcon =
  | 'code'
  | 'browser'
  | 'mobile'
  | 'layers'
  | 'users'
  | 'cloud'
  | 'pulse'
  | 'link'
  | 'design'
  | 'server'
  | 'compass';

type ServiceOffering = {
  title: string;
  description: string;
  estimate: string;
  icon: ServiceIcon;
  featured?: boolean;
};

const services: ServiceOffering[] = [
  {
    title: 'Custom Software Development',
    description: 'Tailor-made software built around your exact process.',
    estimate: 'From ৳4 lakh · 3–6 months',
    icon: 'code',
  },
  {
    title: 'Web Application Development',
    description: 'Fast, secure web apps and portals with modern stacks.',
    estimate: 'From ৳2.5 lakh · 2–4 months',
    icon: 'browser',
    featured: true,
  },
  {
    title: 'Mobile App Development',
    description: 'Native-quality iOS and Android apps with Flutter and React Native.',
    estimate: 'From ৳3 lakh · 2–5 months',
    icon: 'mobile',
  },
  {
    title: 'ERP Development',
    description: 'ERP systems that connect finance, stock, HR and sales.',
    estimate: 'From ৳5 lakh · 4–8 months',
    icon: 'layers',
  },
  {
    title: 'CRM Development',
    description: 'CRMs shaped to how your sales and support teams work.',
    estimate: 'From ৳2.5 lakh · 2–4 months',
    icon: 'users',
  },
  {
    title: 'SaaS Development',
    description: 'Multi-tenant SaaS products, from MVP to scale.',
    estimate: 'From ৳3.5 lakh · 10 weeks to MVP',
    icon: 'cloud',
  },
  {
    title: 'API Development',
    description: 'Clean, documented REST and GraphQL APIs.',
    estimate: 'From ৳1.5 lakh · 1–3 months',
    icon: 'pulse',
  },
  {
    title: 'System Integration',
    description: 'Connect payment gateways, ERPs, telecom and legacy systems.',
    estimate: 'From ৳1 lakh · 3–10 weeks',
    icon: 'link',
  },
  {
    title: 'UI/UX Design',
    description: 'Research-led product design and design systems.',
    estimate: 'From ৳80,000 · 3–8 weeks',
    icon: 'design',
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'DevOps, CI/CD, monitoring and cost-efficient hosting.',
    estimate: 'From ৳80,000 · 2–6 weeks',
    icon: 'server',
  },
  {
    title: 'IT Consulting',
    description: 'Architecture reviews, roadmaps and technology strategy.',
    estimate: 'From ৳50,000 · 2–4 weeks',
    icon: 'compass',
  },
];

const popularServices = services.slice(0, 4);

const engagementModels = [
  {
    title: 'Fixed scope',
    description: 'Best when requirements are clear.',
    terms: 'Fixed price and timeline, paid by milestone',
    features: ['Discovery included', 'Milestone payments', 'Change requests priced up front'],
    featured: false,
  },
  {
    title: 'Dedicated team',
    description: 'Best for long-running products.',
    terms: 'Monthly team of engineers, designer and PM',
    features: ['Scale the team up or down', 'Your backlog, our team', 'Weekly demos and reports'],
    featured: true,
  },
  {
    title: 'Support & maintenance',
    description: 'Best after launch.',
    terms: 'Monthly SLA with response times',
    features: ['Bug fixes and updates', 'Monitoring and backups', 'Small improvements each month'],
    featured: false,
  },
];

function ServiceIconView({ name }: { name: ServiceIcon }) {
  const paths: Record<ServiceIcon, ReactNode> = {
    code: <><path d="m9 7-5 5 5 5M15 7l5 5-5 5" /><path d="m14 4-4 16" /></>,
    browser: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01" /></>,
    mobile: <><rect x="7" y="2.5" width="10" height="19" rx="2" /><path d="M11 18.5h2" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
    cloud: <><path d="M20 16.2A4.5 4.5 0 0 0 18 7.5h-1.1A6 6 0 0 0 5.2 9.7 3.5 3.5 0 0 0 6 16.5h13" /></>,
    pulse: <><path d="M3 12h4l3-8 4 16 3-8h4" /></>,
    link: <><path d="M10 13a5 5 0 0 0 7.1 0l3-3A5 5 0 0 0 13 2.9l-1.7 1.7" /><path d="M14 11a5 5 0 0 0-7.1 0l-3 3A5 5 0 0 0 11 21.1l1.7-1.7" /></>,
    design: <><path d="m4 4 16 5-7 2-3 7-6-14Z" /><path d="m13 11 5 5" /></>,
    server: <><rect x="3" y="3" width="18" height="8" rx="2" /><rect x="3" y="13" width="18" height="8" rx="2" /><path d="M7 7h.01M7 17h.01M11 7h6M11 17h6" /></>,
    compass: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" /></>,
  };

  return (
    <span className="service-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {paths[name]}
      </svg>
    </span>
  );
}

function Service() {
  return (
    <main className="services-page" tabIndex={-1}>
      <section className="services-hero" aria-labelledby="services-title">
        <div className="services-intro">
          <p className="services-kicker"><span aria-hidden="true">‹ ›</span>SERVICES</p>
          <h1 id="services-title">Software engineering, from first sketch to long-term support.</h1>
          <p>
            Eleven software development services, from web and mobile apps to
            ERP and cloud, delivered by one in-house team in Dhaka.
          </p>
          <Link className="services-primary-link" to="/contact">
            Start a project <span aria-hidden="true">→</span>
          </Link>
        </div>

        <aside className="popular-services" aria-label="Most requested services">
          <p className="popular-kicker">MOST REQUESTED</p>
          {popularServices.map((service) => (
            <Link className="popular-service" to="/contact" key={service.title}>
              <ServiceIconView name={service.icon} />
              <span className="popular-service-copy">
                <strong>{service.title}</strong>
                <small>{service.estimate}</small>
              </span>
              <span className="popular-service-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </aside>
      </section>

      <section className="services-stats" aria-label="Service delivery statistics">
        {[
          ['11', 'service lines'],
          ['45+', 'in-house specialists'],
          ['2 wk', 'sprint cycle'],
          ['94%', 'milestones on time'],
        ].map(([value, label]) => (
          <div className="services-stat" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>
      

      <section className="service-catalog" aria-label="All software services">
        {services.map((service) => (
          <article
            className={`service-card${service.featured ? ' service-card-featured' : ''}`}
            key={service.title}
          >
            <ServiceIconView name={service.icon} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <span className="service-estimate">{service.estimate}</span>
            <Link to="/contact" className="service-card-link">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}

        <article className="service-card service-card-cta">
          <ServiceIconView name="compass" />
          <h2>Not sure which service fits?</h2>
          <p>Tell us the problem. We will suggest the right mix of products and services.</p>
          <Link to="/contact" className="service-card-link">
            Talk to a solution lead <span aria-hidden="true">→</span>
          </Link>
        </article>
      </section>
      <section className="engagement-section" aria-labelledby="engagement-title">
        <div className="engagement-inner">
          <p className="engagement-kicker">ENGAGEMENT MODELS</p>
          <h2 id="engagement-title">Choose how we work together</h2>
          <div className="engagement-grid">
            {engagementModels.map((model) => (
              <article className={`engagement-card${model.featured ? ' engagement-card-featured' : ''}`} key={model.title}>
                {model.featured && <span className="engagement-badge">Most chosen</span>}
                <h3>{model.title}</h3>
                <p className="engagement-description">{model.description}</p>
                <p className="engagement-terms">{model.terms}</p>
                <ul>{model.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="service-process" aria-labelledby="process-title">
        <p className="engagement-kicker">HOW WE WORK</p>
        <h2 id="process-title">A delivery process you<br />can follow week by week</h2>
        <ol className="service-process-grid">
          {([
            ['Discovery', 'Workshops, goals and requirements', 'compass'],
            ['Plan', 'Scope, milestones and a fixed quote', 'pulse'],
            ['Design', 'UX flows and technical architecture', 'design'],
            ['Build', 'Two-week sprints with live demos', 'code'],
            ['Launch & support', 'Go-live, training and SLA support', 'users'],
          ] as [string, string, ServiceIcon][]).map(([title, description, icon], index) => (
            <li className="service-process-card" key={title}>
              <span className="process-number">0{index + 1}</span>
              <ServiceIconView name={icon} />
              <h3>{title}</h3><p>{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="service-project" aria-labelledby="project-title">
        <div className="service-project-copy">
          <p className="engagement-kicker">START A PROJECT</p>
          <h2 id="project-title">Have a product idea<br />or a process to fix?</h2>
          <p>Tell us what you need. We&apos;ll come back with a plan, a timeline and the right team, usually within two working days.</p>
          <ul className="project-topics" aria-label="Project types">
            {['Custom software', 'ERP / CRM', 'Mobile app', 'Product demo', 'Cloud & DevOps', 'Not sure yet'].map((topic) => <li key={topic}>{topic}</li>)}
          </ul>
          <div className="project-actions">
            <Link to="/contact" className="project-start">Start a project <span aria-hidden="true">&#8594;</span></Link>
            <Link to="/contact" className="project-demo">Book a product demo</Link>
          </div>
        </div>
        <aside className="project-next" aria-labelledby="project-next-title">
          <div className="project-next-heading"><h3 id="project-next-title">WHAT HAPPENS NEXT</h3><span>~48H</span></div>
          <ol className="project-timeline">
            {[
              ['Discovery call', '30 minutes with a solution lead', 'Day 1'],
              ['Plan & estimate', 'Scope, milestones and a fixed quote', 'Day 2'],
              ['Kickoff', 'Your team, board and first sprint', 'Week 1'],
            ].map(([title, description, time], index) => <li key={title}><span className="project-step">{index + 1}</span><div><div className="project-step-title"><h4>{title}</h4><span>{time}</span></div><p>{description}</p></div></li>)}
          </ol>
          <div className="project-team"><div className="project-team-icons" aria-hidden="true"><span>SE</span><span>UX</span><span>PM</span><span>+4</span></div><div><strong>One connected team</strong><p>Design, engineering and delivery</p></div></div>
        </aside>
      </section>
    </main>
  );
}

export default Service;
