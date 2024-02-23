import React, { useState } from 'react';
import './HomePage.scss';
import avatar from '../../assets/images/avatar2.webp';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const [loader, setLoader] = useState(false);

  return (
    <>
      <section className="hello-wrapper">
        <div className="avatar-background-circle"></div>
        <div className="hello-container">
          <h1 className="message">Hi! I&apos;m{'\n'}Artsiom Sauchuk.</h1>
          <p className="description">
            Front-end / Back-end JavaScript Developer
          </p>
          <Link className="hire-button" to="contacts">
            Hire me!
          </Link>
        </div>
        {/* <div className="avatar-background-circle"></div> */}
        <div className="image-container">
          <img
            className={`avatar-image ${loader ? 'animated' : null}`}
            src={avatar}
            alt="avatar-image"
            onLoad={() => setLoader(true)}
          />
        </div>
      </section>
    </>
  );
};
