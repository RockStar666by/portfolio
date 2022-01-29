import React from 'react';
import './HomePage.scss';
import programmingImage from '../../assets/images/Programming.png';
import avatar from '../../assets/images/avatar2.png';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

export const HomePage: React.FC = () => {
  return (
    <>
      <section className="hello-wrapper">
        <div className="hello-container">
          <h1 className="message">
            Hello there!<span className="wave">👋</span>
            <br />
            I&apos;m <span className="accent">Artsiom Sauchuk</span>.
          </h1>
          <h2 className="message">
            <Typewriter
              options={{
                strings: [
                  'JavaScript Developer',
                  'ReactJS Developer',
                  'MERN Stack Developer',
                ],
                wrapperClassName: 'typewriter',
                cursorClassName: 'cursor',
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>
        <img className="prog-image" src={programmingImage} alt="prog-image" />
      </section>
      <section className="introduction-wrapper container">
        <img className="intro-image" src={avatar} alt="prog-image" />
        <div className="introduction-container ">
          <h2 className="intro-header">
            <strong>Front End Developer</strong> who focuses on writing clean,
            elegant and efficient code. Love{' '}
            <strong>HTML5, CSS, Javascript, ReactJS</strong> and a bit of{' '}
            <strong>NodeJS</strong>.
          </h2>
          <Link className="button" to="contacts">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
};
