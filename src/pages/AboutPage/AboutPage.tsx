import React from 'react';
import aboutImage from '../../assets/images/Account.png';
import './AboutPage.scss';

export const AboutPage: React.FC = () => {
  return (
    <section className="about-page-container">
      <img className="about-image" src={aboutImage} alt="About me" />
      <h1>About Page</h1>
    </section>
  );
};
