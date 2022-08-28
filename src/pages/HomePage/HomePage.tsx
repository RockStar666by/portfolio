import React from 'react';
import './HomePage.scss';
import avatar from '../../assets/images/avatar2.png';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  return (
    <>
      <section className="hello-wrapper">
        <div className="hello-container">
          <h1 className="message">Hi! I&apos;m{'\n'}Artsiom Sauchuk.</h1>
          <p className="description">
            Front-end / Back-end JavaScript Developer
          </p>
          <Link className="hire-button" to="contacts">
            Hire me!
          </Link>
        </div>
        <div className="avatar-background-circle"></div>
        <img className="avatar-image" src={avatar} alt="avatar-image" />
      </section>
    </>
  );
};
