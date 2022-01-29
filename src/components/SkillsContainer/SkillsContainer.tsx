import React from 'react';
import './SkillsContainer.scss';
import { skills } from './skills.js';
import { SkillCard } from '../SkillCard/SkillCard';
import { SkillCardInt } from '../../interfaces/skillCard';

export const SkillsContainer: React.FC = () => {
  return (
    <div className="skills-wrapper">
      <div className="skills-container">
        <h2 className="skills-header">Professional skillset:</h2>
        {skills.map((skill: SkillCardInt) => {
          return <SkillCard key={skill.id} {...skill} />;
        })}
      </div>
    </div>
  );
};
