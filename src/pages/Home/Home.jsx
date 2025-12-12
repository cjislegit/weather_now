import { useEffect, useState } from 'react';

import Hero from '../../components/Hero/Hero';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import WeatherLayout from '../../layout/Weather/WeatherLayout';
import styles from './Home.module.css';
import { getWeather } from '../../api/openMetero';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Home = () => {
  const [location, setLocation] = useState({ lat: 33.87029, lon: -117.92534 }); // Default to Fullerton, CA
  const [unit, setUnit] = useState('metric');
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Fullerton, California, United States');
  const [todayDate, setTodayDate] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const now = new Date();
    setTodayDate(now);

    const fetchWeatherData = async () => {
      try {
        const weatherData = await getWeather(location.lat, location.lon, unit);
        setWeather(weatherData);
        setIsLoading(false);
        setError(null);
      } catch (err) {
        setError(err.message);
        // setIsLoading(false);
      }
    };
    fetchWeatherData();
  }, [unit, location]);

  const handleUnitChange = () => {
    setUnit((prevState) => (prevState === 'metric' ? 'imperial' : 'metric'));
  };

  return (
    <div className={styles.homeContainer}>
      <NavBar handleUnitChange={handleUnitChange} unit={unit} />
      <Hero />
      <main>
        <SearchBar setLocation={setLocation} setCity={setCity} />
        <WeatherLayout
          city={city}
          todayDate={todayDate}
          weather={weather}
          unit={unit}
          isLoading={isLoading}
        />
      </main>
    </div>
  );
};

export default Home;
