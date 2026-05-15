import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Pratica</Link>
      <div className="navbar-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Início</Link>
        <Link to="/sobre" className={location.pathname === '/sobre' ? 'active' : ''}>Sobre</Link>
      </div>
    </nav>
  );
}

export default Navbar;
