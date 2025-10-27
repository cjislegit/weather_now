import { useEffect, useState } from 'react';

import Hero from '../../components/Hero/Hero';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import WeatherLayout from '../../layout/Weather/WeatherLayout';
import styles from './Home.module.css';
import { getWeather } from '../../api/openMetero';
import { getCityFromCoords } from '../../api/geocoding';

const Home = () => {
  const [location, setLocation] = useState({ lat: 33.87029, lon: -117.92534 }); // Default to Fullerton, CA
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Fullerton');
  const [todayDate, setTodayDate] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    setTodayDate(formattedDate);

    const fetchWeatherData = async () => {
      try {
        const weatherData = await getWeather(location.lat, location.lon);
        setWeather(weatherData);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchWeatherData();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <NavBar />
      <Hero />
      <main>
        <SearchBar />
        <WeatherLayout city={city} todayDate={todayDate} weather={weather} />
      </main>
    </div>
  );
};

export default Home;
