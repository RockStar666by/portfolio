import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherContainer.scss';
import { WeatherCard } from './WeatherCard';

export const WeatherAPI = () => {
  const [weather, setWeather] = useState();
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
        const weather = await getWeather(ip);
        console.log('weather', weather);
        setWeather(weather);
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
        <WeatherCard weatherInfo={weather}></WeatherCard>
      )}
    </div>
  );
};
