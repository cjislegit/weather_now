import styles from './SearchBar.module.css';
import search from '../../assets/images/icon-search.svg';
import { getCoordsFromCity } from '../../api/geocoding';
import { useState } from 'react';
import { useEffect } from 'react';

const SearchBar = ({ setLocation, setCity }) => {
  const [cities, setCities] = useState([]);
  const [searchCity, setSearchCity] = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const cities = await getCoordsFromCity(searchCity);
        setCities(cities);
      } catch (error) {
        console.error(`Error fetching cities: ${error}`);
      }
    };
    fetchCities();
  }, [searchCity]);

  const selectCity = (city) => {
    setLocation({ lat: city.latitude, lon: city.longitude });
    setCity(`${city.name}, ${city.admin1}, ${city.country}`);
    setSearchCity(`${city.name}, ${city.admin1}, ${city.country}`);
    setCities([]);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (cities.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => (prev < cities.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === 'Enter') {
      if (activeIndex >= 0 && activeIndex < cities.length) {
        // selectCity(cities[activeIndex]);
        console.log('Selected city:', cities[activeIndex]);
        setSearchCity(
          `${cities[activeIndex].name}, ${cities[activeIndex].admin1}, ${cities[activeIndex].country}`,
        );
      }
    }
  };

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.search}>
        <img src={search} alt='search' />
        <input
          type='text'
          placeholder='Search for a place...'
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <input type='button' value='Search' />
      {cities.length > 0 && (
        <div className={styles.citiesList}>
          {cities.map((city, index) => (
            <div
              key={index}
              className={`${styles.city} ${index === activeIndex ? styles.active : ''}`}
              onClick={() => selectCity(city)}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {city.name}, {city.admin1}, {city.country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
