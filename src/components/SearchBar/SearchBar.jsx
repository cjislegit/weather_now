import styles from './SearchBar.module.css';
import search from '../../assets/images/icon-search.svg';
import { getCoordsFromCity } from '../../api/geocoding';
import { useState } from 'react'; 
import { useEffect } from 'react';

const SearchBar = ({ setLocation, setCity }) => {
  const [cities, setCities] = useState([]);
  const [searchCity, setSearchCity] = useState('');

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const cities = await getCoordsFromCity(searchCity);
        setCities(cities);
       } catch (error) {
        console.error(`Error fetching cities: ${error}`);
       }
     }
     fetchCities();
  }, [searchCity])

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.search}>
        <img src={search} alt='search' />
        <input type='text' placeholder='Search for a place...' value={searchCity} onChange={(e) => setSearchCity(e.target.value)} />
      </div>
      <input type='button' value='Search' />
      {cities.length > 0 && (
        <div className={styles.citiesList}>
          {cities.map((city, index) => (
            <div key={index} className={styles.city} onClick={() => setLocation(city)}>
              {city.name}, {city.admin1}, {city.country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
