
import './Footer.css';

const Footer = () => {
  return (
    <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
      <div>
        <a href="mailto:quentinwebdev@proton.me" style={{ display: 'block' }}>quentinwebdev@proton.me</a>
        <a href="https://www.linkedin.com/in/quentin-langloiss/" style={{ display: 'block' }}>LinkedIn</a>
      </div>
      <div className='myname'>
        <p>Développeur Web</p>
        <p>Quentin Langlois</p>
      </div>
    </footer>
  );
};

export default Footer;
