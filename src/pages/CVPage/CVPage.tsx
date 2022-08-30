import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pdf from '../../assets/pdf/my_cv.pdf';
import cvImage from '../../assets/images/my_cv.jpg';
import './CVPage.scss';

export const CVPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <section className="cv-container">
      <Link className="download-cv-button" to={Pdf} download target="_blank">
        Download .PDF
      </Link>
      {!isLoaded && <div className="placeholder"></div>}
      <img
        className="cv-image"
        src={cvImage}
        alt="CV"
        onLoad={handleImageLoad}
      />
      <Link className="download-cv-button" to={Pdf} download target="_blank">
        Download .PDF
      </Link>
    </section>
  );
};
