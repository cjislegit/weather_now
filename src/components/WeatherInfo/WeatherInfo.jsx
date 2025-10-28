import styles from './WeatherInfo.module.css';
import overcastIcon from '../../assets/images/icon-overcast.webp';

const WeatherInfo = ({ city, todayDate, weather }) => {
  return (
    <div className={styles.weatherInfoContainer}>
      <div className={styles.weatherInfoDisplay}>
        <div className={styles.weatherInfoLocation}>
          <div className={styles.location}>{city}</div>
          <div className={styles.date}>{todayDate}</div>
        </div>
        <div className={styles.weatherInfoTemp}>
          <div className={styles.icon}>
            <img src={overcastIcon} alt='' />
          </div>
          <div className={styles.temp}>
            {weather.current.temperature.toFixed()}°
          </div>
        </div>
      </div>
      <div className={styles.weatherInfoDetails}>
        <div className={styles.detailsItem}>
          <div className={styles.label}>Feels Like</div>
          <div className={styles.value}>
            {weather.current.apparent_temperature.toFixed()}°
          </div>
        </div>
        <div className={styles.detailsItem}>
          <div className={styles.label}>Humidity</div>
          <div className={styles.value}>
            {weather.current.relative_humidity_2m}%
          </div>
        </div>
        <div className={styles.detailsItem}>
          <div className={styles.label}>Wind</div>
          <div className={styles.value}>
            {weather.current.wind_speed_10m.toFixed()} km/h
          </div>
        </div>
        <div className={styles.detailsItem}>
          <div className={styles.label}>Precipitation</div>
          <div className={styles.value}>{weather.current.precipitation} mm</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
