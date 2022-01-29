import React from 'react';
import projectImage from '../../assets/images/Project.png';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import './ProjectsPage.scss';
import { PageInfo } from '../../components/PageInfo/PageInfo';
import { projects } from './projects.js';

const pageInfo = {
  header: 'My projects.',
  text: 'Check out my latest projects here. What do you think?',
  image: projectImage,
};

export const ProjectsPage: React.FC = () => {
  return (
    <section className="projects-page-container">
      <PageInfo {...pageInfo} />
      <div className="projects-container">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
