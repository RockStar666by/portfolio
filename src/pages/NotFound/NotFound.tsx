import React from 'react';
import './NotFound.scss';
import notFoundImage from '../../assets/images/404-page.png';

export const NotFound: React.FC = () => {
  return (
    <section className="not-found-container">
      <img className="not-found-image" src={notFoundImage} alt="404-image" />
    </section>
  );
};
