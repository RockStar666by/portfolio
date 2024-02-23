import React, { useContext } from 'react';
import './Loader.scss';
import { LoaderContext } from '../../contexts/Contexts';

export const Loader: React.FC = () => {
  const { loader, setLoader } = useContext(LoaderContext);
  return (
    <>
      <div className={`loader-wrapper ${loader ? '' : ' active'}`}>
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};
