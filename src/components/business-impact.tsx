import { Link } from 'react-router-dom';
import '../assets/css/home-impact.css';

type Feature = { title: string; description: string; icon: 'database' | 'message' | 'chart' };

const features: Feature[] = [
  { title: 'Connect your operations', description: 'Bring customer records, orders and reporting into connected workflows, with ERP, integrations and custom software shaped to your business.', icon: 'database' },
  { title: 'Keep conversations moving', description: 'Use Bulk SMS, Voice Message and Call Center tools to keep customers informed and help your support and sales teams stay coordinated.', icon: 'message' },
  { title: 'Build your next step', description: 'Start with a focused website, application or business workflow. Combine existing products with engineering support as your needs evolve.', icon: 'chart' },
];

function FeatureIcon({ name }: { name: Feature['icon'] }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {name === 'database' && <><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14a9 3 0 0 0 18 0V5M3 12a9 3 0 0 0 18 0" /></>}
      {name === 'message' && <path d="M21 15a2 2 0 0 1-2 2H7l-5 5V4a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2z" />}
      {name === 'chart' && <path d="M8 20v-6m5 6V9m5 11V4" />}
    </svg>
  );
}

function ImpactFeatureCard({ feature, index }: { feature: Feature; index: number }) {
  return (
    <li className="home-impact-card">
      <span className="home-impact-number" aria-hidden="true">0{index + 1}</span>
      <span className="home-impact-card-divider" aria-hidden="true" />
      <span className="home-impact-icon"><FeatureIcon name={feature.icon} /></span>
      <div className="home-impact-card-copy">
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    </li>
  );
}

export default function BusinessImpact() {
  return (
    <section className="home-business-impact" aria-labelledby="home-impact-title">
      <div className="home-impact-layout">
        <div className="home-impact-intro">
          <p className="home-impact-eyebrow">FROM TECHNOLOGY TO EVERYDAY PROGRESS</p>
          <h2 id="home-impact-title">Less busywork.<span>More room to grow.</span></h2>
          <p className="home-impact-description">Good technology connects the work behind your business. Nexbyte brings software, communication and cloud infrastructure together around the way your team operates.</p>
          <Link to="/solutions" className="home-impact-link">Explore our solutions <span aria-hidden="true">&#8594;</span></Link>
        </div>
        <ol className="home-impact-outcomes">
          {features.map((feature, index) => <ImpactFeatureCard key={feature.title} feature={feature} index={index} />)}
        </ol>
      </div>
    </section>
  );
}
