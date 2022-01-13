import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherContainer.scss';
import { WeatherCard, weatherInfo } from './WeatherCard';

const initWeatherInfo = {
  location: {
    region: '',
  },
  current: {
    temp_c: '',
    condition: {
      icon: '',
    },
  },
};

export const WeatherAPI: React.FC = () => {
  const [weather, setWeather] = useState<weatherInfo>(initWeatherInfo);
  const [isLoading, setIsLoading] = useState(true);

  const getIP = async () => {
    const res = await axios.get('https://geolocation-db.com/json/');
    console.log(res.data.IPv4);
    return res.data.IPv4;
  };

  const getWeather = async (ip: string) => {
    const res = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=5198d148123f46ba8f485733220201&q=${ip}&aqi=no`
    );
    return res.data;
  };

  useEffect(() => {
    (async () => {
      try {
        const ip = await getIP();
        const weatherData = await getWeather(ip);
        console.log('weather', weather);
        setWeather(weatherData);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="weather-container">
      {isLoading ? (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <WeatherCard {...weather}></WeatherCard>
      )}
    </div>
  );
};
