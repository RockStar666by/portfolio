import React from 'react';
import './Social.scss';
import githubIcon from '../../assets/icons/github.png';
import linkedinIcon from '../../assets/icons/linkedin.png';
import telegramIcon from '../../assets/icons/telegram.png';
import facebookIcon from '../../assets/icons/facebook.png';

export const Social: React.FC = () => {
  return (
    <div className="contacts-container">
      <a className="contacts" href="tel:+375297915836">
        Phone: +375 29 7915836
      </a>
      <a className="contacts" href="mailto:savchuk799@gmail.com">
        E-mail: savchuk799@gmail.com
      </a>
      <div className="social-links">
        <ul className="footer-social-list">
          <li className="footer-social-list-li">
            <a className="social-link" href="https://github.com/RockStar666by">
              <img
                className="social-icon"
                src={githubIcon}
                alt="contact-icon"
                style={{ width: 24, height: 24 }}
              />
            </a>
          </li>
          <li className="footer-social-list-li">
            <a
              className="social-link"
              href="https://www.linkedin.com/in/artsiom-sauchuk-6406a219a/"
            >
              <img
                className="social-icon"
                src={linkedinIcon}
                alt="contact-icon"
                style={{ width: 24, height: 24 }}
              />
            </a>
          </li>
          <li className="footer-social-list-li">
            <a className="social-link" href="https://t.me/hansolo_666">
              <img
                className="social-icon"
                src={telegramIcon}
                alt="contact-icon"
                style={{ width: 24, height: 24 }}
              />
            </a>
          </li>
          <li className="footer-social-list-li">
            <a
              className="social-link"
              href="https://www.facebook.com/artsiom.sauchuk"
            >
              <img
                className="social-icon"
                src={facebookIcon}
                alt="contact-icon"
                style={{ width: 24, height: 24 }}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
