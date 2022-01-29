import React from 'react';

import './ProjectCard.scss';

import { ProjectCardInt } from '../../interfaces/projectCard';

export const ProjectCard: React.FC<ProjectCardInt> = (
  props: ProjectCardInt
) => {
  return (
    <div className="project-card">
      <img
        className="card-image"
        src={props.image}
        alt=""
        width={280}
        height={186}
      />
      <div className="card-description">
        <h2 className="card-header">{props.header}</h2>
        <p className="card-text">
          <span className="card-accent">Description:</span>
          {props.description}
        </p>
        <p className="card-text">
          <span className="card-accent">Tech Stack:</span>
          {props.stack.join(', ')}
        </p>
      </div>
      <div className="link-block">
        <a className="card-link" href={props.linkDemo}>
          Demo
        </a>
        <a className="card-link" href={props.linkGithub}>
          GitHub
        </a>
      </div>
    </div>
  );
};
