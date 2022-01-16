import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ContactsPage } from '../../pages/ContactsPage/ContactsPage';
import { HomePage } from '../../pages/HomePage/HomePage';
import { ProjectsPage } from '../../pages/ProjectsPage/ProjectsPage';
import { AboutPage } from '../../pages/AboutPage/AboutPage';
import { CVPage } from '../../pages/CVPage/CVPage';
import { NotFound } from '../../pages/NotFound/NotFound';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="contacts" element={<ContactsPage />} />
      <Route path="my-cv" element={<CVPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
