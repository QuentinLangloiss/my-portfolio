import { motion } from "framer-motion"
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <button className='name'><span>Quentin Langlois</span></button>
      <nav>
        <ul className="nav-links">
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="#home" className="nav-link">Accueil</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="#about" className="nav-link">À propos</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="#projects" className="nav-link">Projets</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="#contact" className="nav-link">Contact</a>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
