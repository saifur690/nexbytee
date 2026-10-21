import { Link } from 'react-router-dom';
import '../assets/css/navbar.css';
import NexbyteMark from './nexbyte-mark';

function Navbar({ currentPage }: { currentPage: string }) {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <Link to="/" className="navbar-logo" aria-label="Nexbyte home">
        <NexbyteMark className="navbar-logo-mark" />
        <span className="navbar-logo-type">
          <strong>Nexbyte</strong>
          <small>TECHNOLOGIES</small>
        </span>
      </Link>

      <div className="navbar-links">
        {['Home', 'About', 'Solutions', 'Service', 'Industries'].map((label) => (
          <Link to={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
            key={label} aria-current={currentPage === label.toLowerCase() ? 'page' : undefined}>
            {label}
          </Link>
        ))}
        <Link to="/company" aria-current={currentPage === 'company' ? 'page' : undefined}>Company</Link>
        <Link to="/contact" aria-current={currentPage === 'contact' ? 'page' : undefined}>Contact</Link>
        <Link to="/contact" className="navbar-demo">Request Demo</Link>
      </div>
    </nav>
  );
}

export default Navbar;
