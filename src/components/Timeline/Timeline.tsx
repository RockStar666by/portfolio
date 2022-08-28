import React from 'react';
import './Timeline.scss';

export const Timeline: React.FC = () => {
  return (
    <div className="timeline-wrapper">
      <div className="timeline-container">
        <div className="post">
          <div className="title">May 2017</div>
          <div className="body">
            <p>
              Graduated from Belarusian National Technical University (BNTU)
              with a bachelor degree in Electric Power Systems.
            </p>
          </div>
        </div>
        <div className="post">
          <div className="title">September 2019</div>
          <div className="body">
            <p>
              Made a life changing decision to connect my life with
              Front-End/JavaScript
            </p>
          </div>
        </div>
        <div className="post">
          <div className="title">July 2021</div>
          <div className="body">
            <p>
              Succesfully completed &quot;The Rolling Scopes School
              JAVASCRIPT/FRONT-END 2021Q1 (JAVASCRIPT)&quot; course
            </p>
            <a
              className="link"
              href="https://app.rs.school/certificate/2faovg51"
            >
              View certificate
            </a>
          </div>
        </div>
        <div className="post">
          <div className="title">October 2021</div>
          <div className="body">
            <p>
              Succesfully completed &quot;The Rolling Scopes School REACT 2021Q3
              (JAVASCRIPT)&quot; course
            </p>
            <a
              className="link"
              href="https://app.rs.school/certificate/ith7gxcc"
            >
              View certificate
            </a>
          </div>
        </div>
        <div className="post">
          <div className="title big">October 2021</div>
          <div className="body">
            <p>EPAM JS Lab (Minsk) Student</p>
          </div>
        </div>
      </div>
    </div>
  );
};
