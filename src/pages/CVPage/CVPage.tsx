import React from 'react';
import { Link } from 'react-router-dom';
import Pdf from '../../assets/pdf/my_cv.pdf';
import cvImage from '../../assets/images/my_cv.jpg';
import './CVPage.scss';

export const CVPage: React.FC = () => {
  return (
    <section className="cv-container">
      <Link className="download-cv-button" to={Pdf} download target="_blank">
        Download .pdf
      </Link>
      <img className="cv-image" src={cvImage} alt="About me" />
      <Link className="download-cv-button" to={Pdf} download target="_blank">
        Download .pdf
      </Link>
    </section>
  );
};
