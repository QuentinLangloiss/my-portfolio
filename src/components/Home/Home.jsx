import { useState, useEffect } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { CSSTransition } from 'react-transition-group';
import './Home.css';

const Home = () => {
    const [currentItem, setCurrentItem] = useState('item1');

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalScrollHeight = document.body.scrollHeight;

      // Déterminer l'élément actif en fonction de la position de défilement
      const currentItemIndex = Math.floor((scrollY / totalScrollHeight) * 3);
      setCurrentItem(`item${currentItemIndex + 1}`);
  };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="home-container">
            <ScrollMenu>
                {['item1', 'item2', 'item3'].map(item => (
                  <CSSTransition
                    key={item} // La clé est déplacée ici
                    in={currentItem === item}
                    timeout={300}
                    classNames="fade"
                    unmountOnExit
                  >
                    <div className="menu-item">{item}</div>
                  </CSSTransition>
                ))}
            </ScrollMenu>
        </div>
    );
};

export default Home;
