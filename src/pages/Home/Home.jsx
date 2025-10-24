import { useEffect, useState } from 'react';

import Hero from '../../components/Hero/Hero';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import WeatherLayout from '../../layout/Weather/WeatherLayout';
import styles from './Home.module.css';
import { getWeather } from '../../api/openMetero';
import { getCityFromCoords } from '../../api/geocoding';

const Home = () => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          try {
            const { latitude, longitude } = pos.coords;
            const weatherData = await getWeather(latitude, longitude);
            const cityName = await getCityFromCoords(latitude, longitude);

            setWeather(weatherData);
            setCity(cityName);
          } catch (e) {
            setError(e.message);
          }
        },
        (err) => setError(err.message)
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  console.log('User location:', location);

  return (
    <div className={styles.homeContainer}>
      <NavBar />
      <Hero />
      <main>
        <SearchBar />
        <WeatherLayout />
      </main>
    </div>
  );
};

export default Home;
