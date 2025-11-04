import DailyForecast from '../../components/DailyForecast/DailyForecast';
import HourlyForecast from '../../components/HourlyForecast/HourlyForecast';
import WeatherInfo from '../../components/WeatherInfo/WeatherInfo';
import styles from './WeatherLayout.module.css';

const WeatherLayout = ({ city, todayDate, weather }) => {
  return (
    <div className={styles.weatherLayout}>
      <div className={styles.left}>
        <WeatherInfo city={city} todayDate={todayDate} weather={weather} />
        <DailyForecast dailyWeather={weather.daily} />
      </div>
      <HourlyForecast todayDate={todayDate} hourlyWeather={weather.hourly} />
    </div>
  );
};

export default WeatherLayout;
