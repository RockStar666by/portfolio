import React from 'react';
import './PageInfo.scss';
import { PageInfoInt } from '../../interfaces/pageInfo';

export const PageInfo: React.FC<PageInfoInt> = (props) => {
  console.log(props);
  return (
    <div className="page-info-container">
      <div className="page-info">
        <h1 className="page-header">{props.header}</h1>
        <p>{props.text}</p>
        {props.children}
      </div>
      <img className="page-image" src={props.image} alt="About" />
    </div>
  );
};
