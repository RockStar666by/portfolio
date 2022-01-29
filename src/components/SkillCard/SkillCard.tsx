import React from 'react';

import './SkillCard.scss';

import { SkillCardInt } from '../../interfaces/skillCard';

export const SkillCard: React.FC<SkillCardInt> = (props: SkillCardInt) => {
  return (
    <div className="skill-card">
      <img className="skill-card-image" src={props.image} alt="Skill-icon" />
      <h3 className="skill-card-header">{props.name}</h3>
    </div>
  );
};
