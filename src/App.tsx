import { useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Footer from './components/footer';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Industries from './pages/Industries';
import Company from './pages/Company';
import Solutions from './pages/Solutions';
import './App.css';
import './assets/css/responsive.css';

function AppLayout() {
  const { pathname } = useLocation();
  const page = pathname.replace(/^\/|\/$/g, '') || 'home';

  useEffect(() => {
    const titles: Record<string, string> = { home: 'Home', about: 'About', solutions: 'Solutions', service: 'Service', industries: 'Industries', company: 'Company', contact: 'Contact' };
    document.title = `${titles[page] || 'Page not found'} | Nexbyte`;
    window.scrollTo(0, 0);
    document.querySelector<HTMLElement>('main')?.focus({ preventScroll: true });
  }, [page]);

  return (
    <div className={`App${page === 'industries' ? ' App-industries' : ''}`}>
      {page === 'industries' ? (
        <div className="industries-navbar-shell"><Navbar currentPage={page} /></div>
      ) : <Navbar currentPage={page} />}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/service" element={<Service />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={
          <main className="content-page" tabIndex={-1}>
            <header className="page-intro"><p className="hero-eyebrow">404</p><h1>Page not found.</h1><p>Choose a page from the navigation or return to Nexbyte home.</p><Link className="page-button" to="/">Back to home</Link></header>
          </main>
        } />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><AppLayout /></BrowserRouter>;
}

export default App;
