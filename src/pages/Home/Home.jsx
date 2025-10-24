import { useEffect, useState } from 'react';

import Hero from '../../components/Hero/Hero';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import WeatherLayout from '../../layout/Weather/WeatherLayout';
import styles from './Home.module.css';

const Home = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setLocation({ latitude, longitude });
      },
      (err) => {
        setError(err.message);
      }
    );
  };

  useEffect(() => {
    getLocation();
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
