import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaPython, FaPhp, FaBootstrap } from 'react-icons/fa';
import { SiRubyonrails } from 'react-icons/si';
import { InView } from 'react-intersection-observer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './About.css';

const About = () => {
  const skills = [
    { id: 'html', name: 'HTML', icon: <FaHtml5 /> },
    { id: 'css', name: 'CSS', icon: <FaCss3Alt /> },
    { id: 'react', name: 'React', icon: <FaReact /> },
    { id: 'js', name: 'JavaScript', icon: <FaJsSquare /> },
    { id: 'ruby', name: 'Ruby/Rails', icon: <SiRubyonrails /> },
    { id: 'python', name: 'Python', icon: <FaPython /> },
    { id: 'php', name: 'PHP', icon: <FaPhp /> },
    { id: 'bootstrap', name: 'Bootstrap', icon: <FaBootstrap /> },
    // Ajoutez d'autres compétences ici si nécessaire
  ];

  const skillVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 20 },
    hover: {
      rotateY: 360,
      transition: { duration: 0.6 }
    }
  };

  const hobbies = [
    { id: 'hobby1', title: 'Le ski ⛷️', imageUrl: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpaW5nfGVufDB8fDB8fHww' },
    { id: 'hobby2', title: 'Les animaux 🐕', imageUrl: 'https://images.unsplash.com/photo-1612160609504-334bdc6b70c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29yZ2l8ZW58MHx8MHx8fDA%3D' },
    { id: 'hobby3', title: 'Les jeux vidéos 🎮', imageUrl: 'https://images.unsplash.com/photo-1586182987320-4f376d39d787?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlkZW8lMjBnYW1lfGVufDB8MXwwfHx8MA%3D%3D' },
  ];

  const hobbyVariants = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="about-container">
      <h2>Compétences</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <InView key={skill.id} triggerOnce={true} threshold={0.5}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                className="skill-card"
                variants={skillVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover="hover"
              >
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
              </motion.div>
            )}
          </InView>
        ))}
      </div>
      <h2 className='hobby'>Hobbies et Intérêts</h2>
    <Slider {...settings}>
      {hobbies.map(hobby => (
        <div key={hobby.id} className="hobby-slide">
          <div className="hobby-card">
            <img src={hobby.imageUrl} alt={hobby.title} className="hobby-image" />
            <h3>{hobby.title}</h3>
            <p>{hobby.description}</p>
          </div>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default About;
