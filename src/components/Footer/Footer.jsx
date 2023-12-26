import { useState, useEffect } from 'react';
import './Footer.scss';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="footer">
      <div className="copyright">
        © 2023 par Quentin Langlois. Créé avec React.
      </div>
      <div className="time">
        {currentTime.getHours()}:{currentTime.getMinutes().toString().padStart(2, '0')}
      </div>
    </div>
  );
};

export default Footer;
