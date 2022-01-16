import React from 'react';
import projectImage from '../../assets/images/Project.png';
import './ProjectsPage.scss';

export const ProjectsPage: React.FC = () => {
  return (
    <section className="projects-page-container">
      <h1>Projects Page</h1>
      <img className="projects-image" src={projectImage} alt="Project" />
    </section>
  );
};
