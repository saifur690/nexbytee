import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import '../assets/css/hero.css';
import NexbyteMark from './nexbyte-mark';
import TechnologyIcon from './technology-icon';
import '../assets/css/technology-stack.css';
import BusinessImpact from './business-impact';

const ecosystemProducts = [
  { initials: 'C', name: 'Cloud Hosting', category: 'CLOUD', x: 330, y: 112, color: '#356dff' },
  { initials: 'C', name: 'Call Center', category: 'VOICE', x: 390, y: 225, color: '#00aa98' },
  { initials: 'W', name: 'Web & Software', category: 'DEVELOPMENT', x: 325, y: 372, color: '#963ee8' },
  { initials: 'E', name: 'ERP', category: 'ERP', x: 238, y: 386, color: '#7951f2' },
  { initials: 'B', name: 'Bulk SMS', category: 'MESSAGING', x: 130, y: 230, color: '#ed640d' },
  { initials: 'V', name: 'Voice Message', category: 'VOICE', x: 180, y: 125, color: '#078ab1' },
];

const companyStats = [
  { value: '6', label: 'Products in the ecosystem' },
  { value: '120+', label: 'Projects delivered' },
  { value: '10', label: 'Industries served' },
  { value: '45+', label: 'Engineers & designers' },
];

const trustedTeams = [
  { mark: '◎', name: 'Northwind' },
  { mark: '▤', name: 'Lumen Bank' },
  { mark: '⌁', name: 'Apex Telecom' },
  { mark: '◉', name: 'Greenfield' },
  { mark: '♡', name: 'Meridian Health' },
];

const technologyLayers = [
  {
    number: '01',
    title: 'Frontend',
    description: 'Web, mobile & dashboards',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Flutter', 'React Native'],
    indicator: 'edge · 12ms',
  },
  {
    number: '02',
    title: 'Backend',
    description: 'APIs & business logic',
    technologies: ['Node.js', 'NestJS', 'Laravel', 'Python', 'Go'],
    indicator: 'p95 · 18ms',
  },
  {
    number: '03',
    title: 'Data',
    description: 'Storage, cache & search',
    technologies: ['PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch'],
    indicator: 'cache hit 94%',
  },
  {
    number: '04',
    title: 'Cloud & DevOps',
    description: 'Deploy, scale & observe',
    technologies: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Cloudflare'],
    indicator: 'uptime 99.98%',
  },
  {
    number: '05',
    title: 'Communication',
    description: 'Voice, SMS & messaging',
    technologies: ['SIP / VoIP', 'Asterisk', 'WebRTC', 'SMS Gateway', 'WhatsApp API'],
    indicator: 'SIP · WebRTC',
  },
];

function TrustedTeams() {
  return (
    <section className="trusted-teams" aria-label="Teams across industries">
      <p className="trusted-teams-heading">
        Trusted by teams across telecom, finance, healthcare and retail
      </p>
      <div className="trusted-teams-viewport">
        <div className="trusted-teams-track">
          {[0, 1].map((copy) => (
            <div className="trusted-teams-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {[...trustedTeams, ...trustedTeams].map((team, index) => (
                <span className="trusted-team" key={`${team.name}-${index}`} aria-hidden={index >= trustedTeams.length ? true : undefined}>
                  <span className="trusted-team-mark" aria-hidden="true">{team.mark}</span>
                  <span>{team.name}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnologyStack() {
  const [activeLayer, setActiveLayer] = useState('02');
  const traces: Record<string, string> = {
    '01': 'GET /dashboard · React render · edge response · 12ms',
    '02': 'POST /api/v1/invoices · NestJS service · 201 Created',
    '03': 'SELECT subscribers · Redis cache hit · PostgreSQL · 6ms',
    '04': 'Deploy application · Docker · Cloudflare edge · healthy',
    '05': 'Send notification · SMS Gateway · SIP / WebRTC · queued',
  };
  return (
    <section className="technology-stack" aria-labelledby="technology-stack-title">
      <div className="technology-stack-heading">
        <div>
          <p className="technology-stack-eyebrow">TECHNOLOGY ECOSYSTEM</p>
          <h2 id="technology-stack-title">The stack behind our products</h2>
          <p className="technology-stack-description">
            We choose proven, well-supported technology so your software stays
            maintainable for years.
          </p>
        </div>
        <span className="trace-preview-status">
          <span aria-hidden="true" />
          Request trace preview
        </span>
      </div>

      <div className="technology-stack-panel">
        <div className="technology-stack-layers">
          {technologyLayers.map((layer) => (
            <div
              className={`technology-layer${activeLayer === layer.number ? ' technology-layer-active' : ''}`}
              key={layer.number}
              role="group"
              aria-label={`${layer.title} layer`}
              tabIndex={0}
              onMouseEnter={() => setActiveLayer(layer.number)}
              onMouseLeave={() => setActiveLayer('02')}
              onFocus={() => setActiveLayer(layer.number)}
              onBlur={() => setActiveLayer('02')}
            >
              <span className="technology-layer-marker" aria-hidden="true" />
              <div className="technology-layer-copy">
                <span className="technology-layer-number">LAYER {layer.number}</span>
                <h3>{layer.title}</h3>
                <p>{layer.description}</p>
              </div>
              <ul className="technology-tags" aria-label={`${layer.title} technologies`}>
                {layer.technologies.map((technology) => (
                  <li key={technology}>
                    <TechnologyIcon name={technology} />
                    {technology}
                  </li>
                ))}
              </ul>
              <span className="technology-layer-indicator">
                <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13V9m5 4V5m5 8V2" /></svg>
                {layer.indicator}
              </span>
            </div>
          ))}
        </div>
        <div className="request-trace-preview" role="region" aria-label="Example request trace">
          <span className="request-trace-dot" aria-hidden="true" />
          <code>{traces[activeLayer || '02'].split(' · ').map((part, index) => <span className={`trace-segment trace-segment-${index}`} key={`${activeLayer}-${index}`}>{index > 0 && <span className="trace-separator"> &middot; </span>}{part}</span>)}</code>
          <span className="request-trace-id">trace #a91f</span>
        </div>
      </div>
    </section>
  );
}

const productDescriptions: Record<string, string> = {
  'Cloud Hosting': 'Cloud infrastructure, application hosting and managed environments for growing digital products.',
  'Call Center': 'Cloud PBX, IVR, call queues, recording and live agent dashboards for support and sales teams of any size.',
  'Web & Software': 'Custom websites and business applications designed around the way your team works.',
  ERP: 'Connect finance, inventory, HR and everyday operations in one shared business system.',
  'Bulk SMS': 'Messaging tools for notifications, customer updates and business communication at scale.',
  'Voice Message': 'Voice messaging and automated calling workflows for timely customer communication.',
};

function ProductEcosystem() {
  const navigate = useNavigate();
  const mapRef = useRef<SVGSVGElement>(null);
  const [activeProduct, setActiveProduct] = useState<typeof ecosystemProducts[number] | null>(null);

  useEffect(() => {
    if (activeProduct) mapRef.current?.pauseAnimations?.();
    else mapRef.current?.unpauseAnimations?.();
  }, [activeProduct]);
  const [reduceMotion, setReduceMotion] = useState(() =>
    typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return;

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setReduceMotion(motionPreference.matches);

    motionPreference.addEventListener('change', updateMotionPreference);
    return () => motionPreference.removeEventListener('change', updateMotionPreference);
  }, []);

  return (
    <div className="ecosystem-interactive">
    <svg
      ref={mapRef}
      className="ecosystem-map"
      viewBox="0 0 500 500"
      role="group"
      aria-label="Nexbyte product ecosystem connecting six software products"
    >
      <defs>
        <pattern id="ecosystem-dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill="#cfc6ff" />
        </pattern>
        <radialGradient id="ecosystem-halo">
          <stop stopColor="#a78bfa" stopOpacity=".24" />
          <stop offset="1" stopColor="#a78bfa" stopOpacity="0" />
        </radialGradient>
        <filter id="product-shadow" x="-80%" y="-80%" width="260%" height="260%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#7252db" floodOpacity=".24" />
        </filter>
      </defs>

      <rect width="500" height="500" fill="url(#ecosystem-dots)" opacity=".48" />
      <text x="20" y="32" className="ecosystem-meta-label">PARENT</text>
      <text x="20" y="49" className="ecosystem-meta-value">NEXBYTE TECHNOLOGIES</text>
      <text x="478" y="32" textAnchor="end" className="ecosystem-meta-label">BRANDS</text>
      <text x="478" y="49" textAnchor="end" className="ecosystem-meta-value">6 LIVE + BETA</text>

      <g transform="translate(-10 0)">
      <circle cx="260" cy="250" r="174" className="ecosystem-orbit ecosystem-orbit-outer" />
      <circle cx="260" cy="250" r="126" className="ecosystem-orbit ecosystem-orbit-inner" />
      <circle cx="260" cy="250" r="94" fill="url(#ecosystem-halo)" />
      <circle cx="260" cy="250" r="69" className="ecosystem-core-ring" />
      <g className="ecosystem-rotating-products">
        {!reduceMotion && (
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 260 250"
            to="-360 260 250"
            dur="40s"
            calcMode="linear"
            repeatCount="indefinite"
          />
        )}
        <path d="M260 250 330 112M260 250 390 225M260 250 325 372M260 250 238 386M260 250 130 230M260 250 180 125" className="ecosystem-connector" />

        {ecosystemProducts.map((product) => (
          <g
            key={product.name}
            role="link"
            tabIndex={0}
            onClick={() => { navigate('/service'); }}
            aria-label={`Explore ${product.name}`}
            aria-describedby={activeProduct?.name === product.name ? 'ecosystem-product-details' : undefined}
            onMouseEnter={() => setActiveProduct(product)}
            onMouseLeave={() => setActiveProduct(null)}
            onFocus={() => setActiveProduct(product)}
            onBlur={() => setActiveProduct(null)}
            onKeyDown={(event) => {
              if (event.key === 'Escape') setActiveProduct(null);
              if (event.key === 'Enter') navigate('/service');
            }}
            className="ecosystem-product"
            transform={`translate(${product.x} ${product.y})`}
            filter="url(#product-shadow)"
          >
            <g className="ecosystem-product-face">
              {!reduceMotion && (
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 0 0"
                  to="360 0 0"
                  dur="40s"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              )}
              <circle r="25" fill={product.color} stroke="#fff" strokeWidth="3" />
              <text y="7" textAnchor="middle" className="ecosystem-product-initial">
                {product.initials}
              </text>
              <text y="40" textAnchor="middle" className="ecosystem-product-name">
                {product.name}
              </text>
              <text y="55" textAnchor="middle" className="ecosystem-product-category">
                {product.category}
              </text>
            </g>
          </g>
        ))}
      </g>

      <circle cx="260" cy="250" r="43" fill="#11101d" className="ecosystem-core" />
      <NexbyteMark x={228} y={226} width={64} height={48} />
      </g>

      <text x="20" y="466" className="ecosystem-meta-label">NEXBYTE ECOSYSTEM</text>
      <text x="20" y="484" className="ecosystem-meta-value">6 CONNECTED PRODUCTS</text>
      <text x="478" y="466" textAnchor="end" className="ecosystem-meta-label">UPTIME 30D</text>
      <text x="478" y="484" textAnchor="end" className="ecosystem-meta-value">99.98%</text>
    </svg>
    {activeProduct && (
      <div className="ecosystem-tooltip" role="tooltip" id="ecosystem-product-details">
        <div className="ecosystem-tooltip-heading"><strong><span style={{ background: activeProduct.color }} />{activeProduct.name}</strong><span className="ecosystem-tooltip-badge">PRODUCT</span></div>
        <p>{productDescriptions[activeProduct.name]}</p>
        <span className="ecosystem-tooltip-category">{activeProduct.category} &middot; POWERED BY NEXBYTE &#8594;</span>
      </div>
    )}
    </div>
  );
}

function Hero() {
  return (
    <main className="home-page" id="home" tabIndex={-1}>
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-copy">
          <div className="home-status" aria-label="Company status">
            <span className="status-pill status-operational"><span aria-hidden="true" />ALL SYSTEMS OPERATIONAL</span>
            <span className="status-pill">6 PRODUCTS</span>
            <span className="status-pill">1 PLATFORM</span>
          </div>

          <h1 id="home-title">
            Building
            <br />
            technology for
            <br />
            the businesses
            <span className="home-rotating-line">
              <span className="hero-heading-accessible">of tomorrow.</span>
              <span className="hero-phrase-prefix" aria-hidden="true">of</span>
              <span className="hero-phrase-viewport" aria-hidden="true">
                {['tomorrow.', 'scale.', 'the future.'].map((phrase, index) => (
                  <span className="hero-rotating-phrase" key={phrase} style={{ animationDelay: `${index * 3}s` }}>
                    <span>{phrase}</span>
                  </span>
                ))}
              </span>
            </span>
          </h1>
          <p className="home-description">
            Nexbyte Technologies is a software company in Dhaka, Bangladesh.
            We run Bulk SMS, Voice Message, Call Center, Cloud Hosting and ERP
            products, and build custom websites and software for growing
            businesses.
          </p>
          <div className="home-actions">
            <Link className="home-button home-button-primary" to="/service">
              Explore Products <span aria-hidden="true">→</span>
            </Link>
            <Link className="home-button home-button-secondary" to="/contact">
              Talk to Nexbyte
            </Link>
          </div>
        </div>

        <div className="home-visual">
          <ProductEcosystem />
        </div>
      </section>
      


      <section className="company-stats" aria-label="Nexbyte at a glance">
        {companyStats.map((stat) => (
          <div className="company-stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>
      <TrustedTeams />
      <TechnologyStack />
      <BusinessImpact />
    </main>
  );
}

export default Hero;
