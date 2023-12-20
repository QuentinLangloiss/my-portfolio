
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="footer"
    >
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Quentin Langlois. Tous droits réservés.</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <p>Construit avec React et Framer Motion</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
