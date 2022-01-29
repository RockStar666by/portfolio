import React from 'react';
import cvImage from '../../assets/images/Construction.png';
import './CVPage.scss';

export const CVPage: React.FC = () => {
  return (
    <section className="cv-container">
      <h1>This page is under construction...</h1>
      <img className="cv-image" src={cvImage} alt="About me" />
    </section>
  );
};
