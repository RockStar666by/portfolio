import React from 'react';
import './HomePage.scss';
import programmingImage from '../../assets/images/Programming-pana.png';

export const HomePage: React.FC = () => {
  return (
    <section className="home-page-container">
      <img className="prog-image" src={programmingImage} alt="prog-image" />
    </section>
  );
};