
import PropTypes from 'prop-types';
import './SkillLevelChart.scss';

const SkillLevelChart = ({ skillName, level }) => {
  return (
    <div className="skill-chart">
      <div className="skill-name">{skillName}</div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
};

SkillLevelChart.propTypes = {
  skillName: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

export default SkillLevelChart;
