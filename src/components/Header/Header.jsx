
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <button className='name'>Quentin Langlois</button>
      <nav>
        <ul className="nav-links">
          <li><a href="#home" className="nav-link">Accueil</a></li>
          <li><a href="#about" className="nav-link">À propos</a></li>
          <li><a href="#projects" className="nav-link">Projets</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
