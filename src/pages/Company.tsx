import { Link } from 'react-router-dom';
import officePhoto from '../assets/images/ChatGPT Image Oct 19, 2026, 11_19_36 PM.png';
import '../assets/css/company.css';

function Company() {
  return (
    <main className="company-page" tabIndex={-1}>
      <section className="company-hero" aria-labelledby="company-title">
        <div>
          <p className="company-kicker">THE COMPANY</p>
          <h1 id="company-title">One team.<br /><span>Technology with purpose.</span></h1>
          <p>Nexbyte Technologies brings software products, business solutions and custom engineering together. Based in Dhaka, we help businesses connect their tools, simplify everyday work and build their next digital product.</p>
          <Link className="company-button" to="/contact">Talk to our team <span aria-hidden="true">&#8594;</span></Link>
        </div>
        <figure className="company-office-photo">
          <img src={officePhoto} alt="Nexbyte Technologies office lounge" width={1448} height={1086} />
        </figure>
      </section>

      <section className="company-section" aria-labelledby="company-values-title">
        <p className="company-kicker">WHAT WE STAND FOR</p>
        <h2 id="company-values-title">The principles behind our work.</h2>
        <div className="company-values">
          {[
            ['01', 'Understand first', 'Start with the people, workflows and goals behind a request. Build around the problem that matters.'],
            ['02', 'Work openly', 'Keep priorities and decisions visible. Use regular reviews and clear communication to move work forward together.'],
            ['03', 'Build for the long run', 'Choose maintainable systems, thoughtful design and reusable foundations that can evolve with a business.'],
          ].map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}
        </div>
      </section>

      <section className="company-working" aria-labelledby="company-working-title">
        <div><p className="company-kicker">HOW WE WORK TOGETHER</p><h2 id="company-working-title">From understanding<br />to useful software.</h2><p>Bring your business context. We bring product thinking, design and engineering to turn it into a practical next step.</p></div>
        <ol>{[
          ['Listen & define', 'Understand users, map the challenge and agree what success looks like.'],
          ['Design & build', 'Turn priorities into a focused plan, then review working software along the way.'],
          ['Launch & improve', 'Prepare for release, document the essentials and plan what comes next.'],
        ].map(([title, description]) => <li key={title}><h3>{title}</h3><p>{description}</p></li>)}</ol>
      </section>

      <section className="company-expectations" aria-labelledby="company-expectations-title">
        <p className="company-kicker">WORKING WITH NEXBYTE</p>
        <h2 id="company-expectations-title">What you can expect.</h2>
        <ol className="company-expectation-list">
          {[
            ['communication', 'Clear communication', 'A shared understanding of priorities, decisions and next steps, so your team stays informed throughout the project.'],
            ['review', 'Progress you can see', 'Regular working demos and feedback sessions to review the experience and refine the details together.'],
            ['handover', 'A thoughtful handover', 'Documentation, product walkthroughs and an agreed support plan to help your team move forward after launch.'],
          ].map(([key, title, description], index) => (
            <li key={key}>
              <span className="company-expectation-number" aria-hidden="true">0{index + 1}</span>
              <h3>{title}</h3><p>{description}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
export default Company;
