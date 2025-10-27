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
          <div className={styles.value}>18°</div>
        </div>
        <div className={styles.detailsItem}>
          <div className={styles.label}>Humidity</div>
          <div className={styles.value}>46%</div>
        </div>
        <div className={styles.detailsItem}>
          <div className={styles.label}>Wind</div>
          <div className={styles.value}>14 km/h</div>
        </div>
        <div className={styles.detailsItem}>
          <div className={styles.label}>Precipitation</div>
          <div className={styles.value}>0 mm</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
