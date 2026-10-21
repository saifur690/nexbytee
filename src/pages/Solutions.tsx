import { Link } from 'react-router-dom';
import '../assets/css/solutions.css';

function SolutionIcon({ name }: { name: 'automation' | 'transformation' | 'communication' }) {
  return <span className="solution-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {name === 'automation' ? <path d="m13 2-9 12h7l-1 8 10-13h-7l1-7Z" /> : name === 'transformation' ? <><circle cx="12" cy="12" r="9" /><path d="m16 8-2 6-6 2 2-6 6-2Z" /></> : <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2a15 15 0 0 1-7-7l2-2-2-5Z" />}
  </svg></span>;
}

function Solutions() {
  return (
    <main className="solutions-page" tabIndex={-1}>
      <section className="solutions-hero-section" aria-labelledby="solutions-title">
        <div className="solutions-inner">
          <div className="solutions-hero">
            <div className="solutions-intro">
              <p className="solutions-kicker"><SolutionIcon name="transformation" />SOLUTIONS</p>
              <h1 id="solutions-title">Technology solutions for every stage of growth.</h1>
              <p className="solutions-description">Proven approaches for businesses in Bangladesh that combine our products and engineering services to solve real problems.</p>
              <Link className="solutions-primary-link" to="/contact">Talk to a solution lead <span aria-hidden="true">&#8594;</span></Link>
            </div>
            <aside className="solutions-start-panel" aria-label="Where most clients start">
              <h2>WHERE MOST CLIENTS START</h2>
              {([
                ['Business Automation', '-60% manual work', 'automation'],
                ['Digital Transformation', '90 days first phase live', 'transformation'],
                ['Communication Solutions', '1 PBX for all branches', 'communication'],
              ] as const).map(([title, detail, icon]) => (
                <Link to="/contact" className="solutions-start-option" key={title}>
                  <SolutionIcon name={icon} />
                  <span className="solutions-option-copy"><strong>{title}</strong><small>{detail}</small></span>
                  <span className="solutions-option-arrow" aria-hidden="true">&#8594;</span>
                </Link>
              ))}
            </aside>
          </div>
          <section className="solutions-stats" aria-label="Nexbyte solutions at a glance">
            {[
              ['6', 'solution areas'], ['120+', 'projects delivered'],
              ['10', 'industries served'], ['90 days', 'typical first phase'],
            ].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </section>
        </div>
      </section>
      <section className="solutions-catalog-section" aria-label="Our six solution areas">
        <ol className="solutions-catalog">
          {[
            ['Business Automation', 'Replace spreadsheets and manual approvals with workflows that run on their own.', '-60% manual work'],
            ['Digital Transformation', 'Move core operations to modern software, with a plan your team can follow.', '90 days first phase live'],
            ['Enterprise Software', 'Large, secure systems for organisations with complex processes and many users.', '10k+ users per system'],
            ['Communication Solutions', 'Voice, SMS and messaging infrastructure that connects you with customers.', '1 PBX for all branches'],
            ['Cloud Solutions', 'Migration, hosting and scaling on cloud infrastructure you can rely on.', '99.98% uptime'],
            ['Custom Technology', 'When nothing off the shelf fits, we design and build it for you.', '2 wk to first prototype'],
          ].map(([title, description, result], index) => (
            <li key={title}>
              <Link className="solutions-catalog-row" to="/contact" aria-label={`Discuss ${title}`}>
                <span className="solutions-row-number">0{index + 1}</span>
                <h2>{title}</h2>
                <span className="solutions-row-copy"><span>{description}</span><small>{result}</small></span>
                <span className="solutions-row-arrow" aria-hidden="true">&#8594;</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
export default Solutions;
