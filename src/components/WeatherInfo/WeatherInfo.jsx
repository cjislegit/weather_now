import styles from './WeatherInfo.module.css';
import drizzleIcon from '../../assets/images/icon-drizzle.webp';
import rainIcon from '../../assets/images/icon-rain.webp';
import snowIcon from '../../assets/images/icon-snow.webp';
import clearIcon from '../../assets/images/icon-sunny.webp';
import cloudyIcon from '../../assets/images/icon-overcast.webp';

const WeatherInfo = ({ city, todayDate, weather }) => {
  let weatherIcon;
  switch (weather.current.weather_code) {
    case 0:
      weatherIcon = clearIcon;
      break;
    case 51:
    case 53:
    case 55:
      weatherIcon = drizzleIcon;
      break;
    case 61:
    case 63:
    case 65:
      weatherIcon = rainIcon;
      break;
    case 71:
    case 73:
    case 75:
      weatherIcon = snowIcon;
      break;
    case 45:
    case 48:
      weatherIcon = cloudyIcon;
      break;
    default:
      weatherIcon = clearIcon;
  }

  return (
    <div className={styles.weatherInfoContainer}>
      <div className={styles.weatherInfoDisplay}>
        <div className={styles.weatherInfoLocation}>
          <div className={styles.location}>{city}</div>
          <div className={styles.date}>
            {todayDate.toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </div>
        </div>
        <div className={styles.weatherInfoTemp}>
          <div className={styles.icon}>
            <img src={weatherIcon} alt='' />
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
