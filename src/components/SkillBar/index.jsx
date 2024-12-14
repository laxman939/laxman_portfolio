import React from 'react';
import './style.css';

const SkillBar = ({ name, value }) => {
  return (
    <div className="skill-bar">
      <h3 className="progress-title">{name}</h3>
      <div className="progress">
        <div
          className="progress-bar"
          style={{
            width: `${value}%`,
          }}
        >
          <div className="progress-value">{value}%</div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;