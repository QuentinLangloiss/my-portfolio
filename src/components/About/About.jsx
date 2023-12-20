
import { motion } from 'framer-motion';
import SkillChart from '../SkillChart/SkillChart';

const About = () => {
    // Vous pouvez définir ici vos animations personnalisées
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="about-container"
        >
            <h2>Votre Histoire</h2>
            <p>Ici, vous pouvez décrire votre histoire personnelle et professionnelle.</p>

            <h2>Compétences</h2>
            <SkillChart skill="JavaScript" level={80} />
            <SkillChart skill="React" level={70} />
            <SkillChart skill="CSS" level={60} />

            <h2>Expériences</h2>
            <p>Détaillez vos expériences professionnelles et éducatives ici.</p>

            <h2>Hobbies et Intérêts</h2>
            <p>Partagez vos hobbies et intérêts pour donner une touche personnelle.</p>
        </motion.div>
    );
};

export default About;
