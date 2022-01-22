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
      <section className="introduction-wrapper message">
        <img className="intro-image" src={avatar} alt="prog-image" />
        <div className="introduction-container ">
          <h2 className="intro-header">
            Let me <span className="accent">introduce</span> myself.
          </h2>
          <p className="intro-text">
            I&apos;m a <span className="accent">Web Developer</span> living in
            Minsk, Belarus. I make web applications, usually with{' '}
            <span className="accent">ReactJS</span>.
          </p>
          <p className="intro-text">
            My favorite programming languages and libraries are{' '}
            <span className="accent">
              JavaScript, ReactJS, NestJS and HTML5
            </span>
            .
          </p>
          <p className="intro-text">
            One of the most enjoyable things about programming to me is how each
            new project is <span className="accent">like a puzzle</span>. You
            have to figure out how the broader project architecture will fit
            together, as well as find and fix bugs, which can be like{' '}
            <span className="accent">solving an interesting mystery</span>{' '}
            itself.
          </p>
          {/* <p className="intro-text">
            When I&apos;m not coding, I enjoy spending my time relaxing in
            nature or <span className="accent">bettering myself</span>. Although
            I try to give myself time away from the screen when I&apos;m not
            working, I often find myself drawn back to invest time in personal
            projects as well as{' '}
            <span className="accent">learning new things</span>. In addition to
            programming, I&apos;m interested in a bunch of different topics such
            as <span className="accent">history, science, and psychology</span>.
          </p> */}
          <Link className="button" to="contacts">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
};
