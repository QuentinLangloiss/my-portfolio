import React from 'react';
import { motion, useInView } from 'framer-motion';
import PropTypes from 'prop-types';
import './SkillChart.css';

const SkillChart = ({ skill, level }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    const barAnimation = {
        hidden: { width: 0, opacity: 0.5 },
        visible: {
            width: `${level}%`,
            opacity: 1,
            transition: { duration: 1 }
        }
    };

    return (
        <div className="skill" ref={ref}>
            <h3>{skill}</h3>
            <motion.div
                className="skill-bar"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={barAnimation}
            ></motion.div>
        </div>
    );
};

SkillChart.propTypes = {
    skill: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired
};

export default SkillChart;
