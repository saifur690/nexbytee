import { Link } from 'react-router-dom';
import '../assets/css/about.css';
import officePhoto from '../assets/images/ChatGPT Image Oct 19, 2026, 11_19_22 PM.png';

const capabilities = [
  {
    number: '01',
    title: 'Products',
    description:
      'A connected ecosystem of business tools, including Bulk SMS, Voice Message, Call Center, Cloud Hosting and ERP.',
    link: '/service',
    action: 'Explore services',
  },
  {
    number: '02',
    title: 'Solutions',
    description:
      'Practical software that helps businesses connect systems, organize everyday work and support their operations.',
    link: '/service',
    action: 'See what we offer',
  },
  {
    number: '03',
    title: 'Engineering',
    description:
      'An in-house team builds websites and custom software for businesses in Dhaka and beyond.',
    link: '/contact',
    action: 'Talk to our team',
  },
];

function About() {
  return (
    <>
    <main className="about-page" tabIndex={-1}>
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-intro">
          <p className="about-kicker">
            <span aria-hidden="true">▦</span>
            ABOUT NEXBYTE
          </p>
          <h1 id="about-title">
            The technology group behind tomorrow’s businesses.
          </h1>
          <p className="about-description">
            Nexbyte Technologies is a Dhaka-based software company with its own
            products and an engineering team that serves businesses across ten
            industries.
          </p>
          <ul className="about-intro-features">
            {[
              { title: 'Innovative Solutions', description: 'Turning ideas into impactful products.', icon: <><path d="M9 18h6m-5 3h4M8 14a6 6 0 1 1 8 0c-1 1-1 2-1 3H9c0-1 0-2-1-3Z" /><path d="m10 8 2-2 2 2m-2-2v7" /></> },
              { title: 'Expert Engineering', description: 'A skilled team delivering reliable solutions.', icon: <><circle cx="12" cy="7" r="3" /><path d="M7 21v-3a5 5 0 0 1 10 0v3H7Zm-3 0H2v-3a4 4 0 0 1 4-4m12 0a4 4 0 0 1 4 4v3h-2M5 5a3 3 0 0 0 0 6m14-6a3 3 0 0 1 0 6" /></> },
              { title: 'Business Growth', description: 'Helping businesses scale with technology.', icon: <><path d="M3 21h18M5 17v-4h3v4m3 0V9h3v8m3 0V5h3v12M4 9l6-5 4 2 6-4" /></> },
            ].map((feature) => (
              <li key={feature.title}>
                <span className="about-intro-feature-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{feature.icon}</svg></span>
                <div><h2>{feature.title}</h2><p>{feature.description}</p></div>
              </li>
            ))}
          </ul>
          <a className="about-story-link" href="#capabilities-title">Discover Our Story <span aria-hidden="true">&#8594;</span></a>
        </div>

        <figure className="about-office-photo">
          <img src={officePhoto} alt="Nexbyte team working in the office" width={1448} height={1086} />
          <figcaption className="about-vision">
            <span className="about-vision-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></svg>
            </span>
            <h2>Our Vision</h2>
            <p>To become a global leader in technology solutions, empowering businesses with innovation.</p>
          </figcaption>
        </figure>
      </section>

      <section className="about-capabilities" aria-labelledby="capabilities-title">
        <header className="about-capabilities-heading">
          <div>
            <p className="about-kicker">WHAT WE DO</p>
            <h2 id="capabilities-title">Technology for the way businesses grow.</h2>
          </div>
          <p>
            Nexbyte brings products, practical solutions and software
            engineering together to support growing businesses.
          </p>
        </header>

        <div className="about-capability-grid">
          {capabilities.map((capability) => (
            <article className="about-capability-card" key={capability.number}>
              <span className="about-capability-number">{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <Link to={capability.link}>
                {capability.action} <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
    
</>
);
}

export default About;
