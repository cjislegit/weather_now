import styles from './DailyForecast.module.css';
import drizzleIcon from '../../assets/images/icon-drizzle.webp';
import rainIcon from '../../assets/images/icon-rain.webp';
import snowIcon from '../../assets/images/icon-snow.webp';
import clearIcon from '../../assets/images/icon-sunny.webp';
import cloudyIcon from '../../assets/images/icon-overcast.webp';

const DailyForecast = ({ dailyWeather }) => {
  const getWeatherIcon = (code) => {
    let weatherIcon;
    switch (code) {
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
    return weatherIcon;
  };

  return (
    <div className={styles.dailyForecastContainer}>
      <div className={styles.dailyForecastTitle}>Daily forecast</div>
      <div className={styles.dailyForecastCardContainer}>
        <div className={styles.dailyForecastCard}>
          <div className={styles.day}>
            {dailyWeather.time[0].toLocaleDateString('en-US', {
              weekday: 'short',
            })}
          </div>
          <div className={styles.icon}>
            <img src={getWeatherIcon(dailyWeather.weather_code[0])} alt='' />
          </div>
          <div className={styles.range}>
            <div className={styles.low}>
              {dailyWeather.temperature_2m_min[0].toFixed()}°
            </div>
            <div className={styles.high}>
              {dailyWeather.temperature_2m_max[0].toFixed()}°
            </div>
          </div>
        </div>
        <div className={styles.dailyForecastCard}>
          <div className={styles.day}>
            {dailyWeather.time[1].toLocaleDateString('en-US', {
              weekday: 'short',
            })}
          </div>
          <div className={styles.icon}>
            <img src={getWeatherIcon(dailyWeather.weather_code[1])} alt='' />
          </div>
          <div className={styles.range}>
            <div className={styles.low}>
              {dailyWeather.temperature_2m_min[1].toFixed()}°
            </div>
            <div className={styles.high}>
              {dailyWeather.temperature_2m_max[1].toFixed()}°
            </div>
          </div>
        </div>
        <div className={styles.dailyForecastCard}>
          <div className={styles.day}>
            {dailyWeather.time[2].toLocaleDateString('en-US', {
              weekday: 'short',
            })}
          </div>
          <div className={styles.icon}>
            <img src={getWeatherIcon(dailyWeather.weather_code[2])} alt='' />
          </div>
          <div className={styles.range}>
            <div className={styles.low}>
              {dailyWeather.temperature_2m_min[2].toFixed()}°
            </div>
            <div className={styles.high}>
              {dailyWeather.temperature_2m_max[2].toFixed()}°
            </div>
          </div>
        </div>
        <div className={styles.dailyForecastCard}>
          <div className={styles.day}>
            {dailyWeather.time[3].toLocaleDateString('en-US', {
              weekday: 'short',
            })}
          </div>
          <div className={styles.icon}>
            <img src={getWeatherIcon(dailyWeather.weather_code[3])} alt='' />
          </div>
          <div className={styles.range}>
            <div className={styles.low}>
              {dailyWeather.temperature_2m_min[2].toFixed()}°
            </div>
            <div className={styles.high}>
              {dailyWeather.temperature_2m_max[2].toFixed()}°
            </div>
          </div>
        </div>
        <div className={styles.dailyForecastCard}>
          <div className={styles.day}>
            {dailyWeather.time[4].toLocaleDateString('en-US', {
              weekday: 'short',
            })}
          </div>
          <div className={styles.icon}>
            <img src={getWeatherIcon(dailyWeather.weather_code[4])} alt='' />
          </div>
          <div className={styles.range}>
            <div className={styles.low}>
              {dailyWeather.temperature_2m_min[4].toFixed()}°
            </div>
            <div className={styles.high}>
              {dailyWeather.temperature_2m_max[4].toFixed()}°
            </div>
          </div>
        </div>
        <div className={styles.dailyForecastCard}>
          <div className={styles.day}>
            {dailyWeather.time[5].toLocaleDateString('en-US', {
              weekday: 'short',
            })}
          </div>
          <div className={styles.icon}>
            <img src={getWeatherIcon(dailyWeather.weather_code[5])} alt='' />
          </div>
          <div className={styles.range}>
            <div className={styles.low}>
              {dailyWeather.temperature_2m_min[5].toFixed()}°
            </div>
            <div className={styles.high}>
              {dailyWeather.temperature_2m_max[5].toFixed()}°
            </div>
          </div>
        </div>
        <div className={styles.dailyForecastCard}>
          <div className={styles.day}>
            {dailyWeather.time[6].toLocaleDateString('en-US', {
              weekday: 'short',
            })}
          </div>
          <div className={styles.icon}>
            <img src={getWeatherIcon(dailyWeather.weather_code[6])} alt='' />
          </div>
          <div className={styles.range}>
            <div className={styles.low}>
              {dailyWeather.temperature_2m_min[6].toFixed()}°
            </div>
            <div className={styles.high}>
              {dailyWeather.temperature_2m_max[6].toFixed()}°
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyForecast;
