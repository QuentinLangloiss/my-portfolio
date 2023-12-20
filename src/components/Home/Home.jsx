import { useState, useEffect } from 'react';
import './Home.css';
import profilePic from '../../assets/pfp_square.png';


const Home = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
      const position = window.scrollY;
      console.log(position);
      setScrollY(position);
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

    const textAnimationStyle = {
        animation: 'typing 2s steps(30, end), blink-caret 0.75s step-end infinite',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        borderRight: '3px solid',
        fontFamily: 'Lora, serif',
        fontSize: '20px',
        maxWidth: '485px',
        color: '#333333',
    };

    const [imageStyle, setImageStyle] = useState({
      opacity: 0,
      transform: 'translateY(20px)',
      transition: 'opacity 1s ease-out, transform 1s ease-out',
      width: '300px',
      height: 'auto',
      borderRadius: '50%',
      marginTop: '30px',
    });


    useEffect(() => {
        const timer = setTimeout(() => {
            const newStyle = {
                ...imageStyle,
                opacity: 1,
                transform: 'translateY(0)'
            };
            setImageStyle(newStyle);
        }, 500);

        return () => clearTimeout(timer);
    }, []);


    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
  };

    return (
      <div style={containerStyle}>
        <div style={textAnimationStyle}>Bonjour, je suis Quentin Langlois, Développeur Web</div>
        <img src={profilePic} alt="Votre Portrait" style={imageStyle} />
      </div>
    );
};

export default Home;
