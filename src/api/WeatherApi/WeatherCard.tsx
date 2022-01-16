import React from 'react';
import './WeatherContainer.scss';

export interface weatherInfo {
  location: {
    region: string;
  };
  current: {
    temp_c: string;
    condition: {
      icon: string;
    };
  };
}

// export const WeatherCard = ({ weatherInfo }: { weatherInfo: any }) => {
export const WeatherCard: React.FC<weatherInfo> = (props: weatherInfo) => {
  return (
    <div className="weather-card">
      <p>
        {props.location.region}, {props.current.temp_c}°C
      </p>
      <img
        className="weather-image"
        src={props.current.condition.icon}
        alt="weather icon"
      ></img>
    </div>
  );
};
