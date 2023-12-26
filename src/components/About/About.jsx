import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPhp, FaPython, FaDatabase } from 'react-icons/fa';
import { SiRubyonrails, SiMysql, SiTailwindcss, SiBootstrap, SiSass } from 'react-icons/si';
import PropTypes from 'prop-types';
import './About.scss';
import SkillLevelChart from '../SkillLevelChart/SkillLevelChart';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const getIcon = (name) => {
  switch(name) {
    case 'HTML':
      return <FaHtml5 />;
    case 'CSS':
      return <FaCss3Alt />;
    case 'JavaScript':
      return <FaJsSquare />;
    case 'Ruby on Rails':
      return <SiRubyonrails />;
    case 'React':
      return <FaReact />;
    case 'SQL':
      return <FaDatabase />;
    case 'PHP':
      return <FaPhp />;
    case 'Python':
      return <FaPython />;
    case 'SCSS':
      return <SiSass />;
    case 'Bootstrap':
      return <SiBootstrap />;
    case 'Tailwind':
      return <SiTailwindcss />;
    case 'MySQL':
      return <SiMysql />;
    default:
      return null;
  }
};

const skills = [
  { id: 'html', name: 'HTML', level: 95 },
  { id: 'css', name: 'CSS', level: 80 },
  { id: 'js', name: 'JavaScript', level: 70 },
  { id: 'ror', name: 'Ruby on Rails', level: 80 },
  { id: 'react', name: 'React', level: 70 },
  { id: 'sql', name: 'SQL', level: 70 },
  { id: 'php', name: 'PHP', level: 70 },
  { id: 'python', name: 'Python', level: 75 },
  { id: 'scss', name: 'SCSS', level: 80 },
  { id: 'bootstrap', name: 'Bootstrap', level: 90 },
  { id: 'tailwind', name: 'Tailwind', level: 80 },
  { id: 'mysql', name: 'MySQL', level: 75 },
];


const SkillCard = ({ skill }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="skill-card" onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
      <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="card-front">
          {getIcon(skill.name)}
        </div>
        <div className="card-back">
          <SkillLevelChart skillName={skill.name} level={skill.level} />
        </div>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  skill: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
  }).isRequired,
};


const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div id='about' className="about" ref={ref}>
      <section className={`fade-in-section ${inView ? 'is-visible' : ''}`}>
        <h2 className='title-about'>En quoi je peux aider</h2>
        <div className="about-help-section">
          <div className="help-subsection">
            <h3>Création de Projets de A à Z</h3>
            <p>Je gère l'ensemble du processus de développement de projets, de l'idée initiale jusqu'au lancement final, en assurant qualité et efficacité.</p>
          </div>
          <div className="help-subsection">
            <h3>Modernisation de Projets</h3>
            <p>Je modernise les projets existants, en intégrant les dernières technologies pour améliorer les performances et la sécurité.</p>
          </div>
          <div className="help-subsection">
            <h3>Design UI et UX</h3>
            <p>Je conçois des interfaces utilisateurs attrayantes et intuitives, enrichissant l'expérience utilisateur par des designs innovants et ergonomiques.</p>
          </div>
        </div>
      </section>

      <section className={`fade-in-section ${inView ? 'is-visible' : ''}`}>
        <h2 className='title-about'>Compétences</h2>
        <div className="skills-container">
          {skills.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </section>

      <section className="hobbies-section">
      <h2>Hobbies et Intérêts</h2>
      <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={5000}>
        <div>
          <img className='img-carousel' src="https://source.unsplash.com/featured/?ski" alt="Ski" style={{ height: '400px', objectFit: 'cover', width: '100%' }} />
          <p className="legend">Passion pour le ski</p>
        </div>
        <div>
          <img className='img-carousel' src="https://source.unsplash.com/featured/?dog" alt="Chien" style={{ height: '400px', objectFit: 'cover', width: '100%' }} />
          <p className="legend">Amour des animaux</p>
        </div>
        <div>
          <img className='img-carousel' src="https://source.unsplash.com/featured/?boardgame" alt="Jeux de société" style={{ height: '400px', objectFit: 'cover', width: '100%' }} />
          <p className="legend">Jeux de société en famille</p>
        </div>
      </Carousel>
    </section>
    </div>
  );
};

export default About;
