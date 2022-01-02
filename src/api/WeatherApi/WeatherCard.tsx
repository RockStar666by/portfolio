import React from 'react';
import './WeatherContainer.scss';

export const WeatherCard = ({ weatherInfo }: { weatherInfo: any }) => {
  return (
    <div className="weather-card">
      <p>
        {weatherInfo.location.name}, {weatherInfo.current.temp_c}°C
      </p>
      <img
        className="weather-image"
        src={weatherInfo.current.condition.icon}
      ></img>
    </div>
  );
};
