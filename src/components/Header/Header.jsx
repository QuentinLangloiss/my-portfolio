
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const nameHoverAnimation = {
    hover: { scale: 1.2, text: "Votre développeur préféré" }
  };

  const linkHoverAnimation = {
    hover: { scale: 1.1, x: 10, underline: true }
  };

  return (
    <header>
      <motion.div
        initial={{ scale: 1 }}
        whileHover="hover"
        variants={nameHoverAnimation}
        className="name">
        Nom et Prénom
      </motion.div>
      <nav>
        <ul>
          {["Portfolio", "About", "Contact"].map((link, index) => (
            <motion.li
              key={index}
              initial={{ scale: 1, x: 0 }}
              whileHover="hover"
              variants={linkHoverAnimation}
              className="nav-link">
              {link}
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
