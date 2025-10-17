import DailyForecast from '../../components/DailyForecast/DailyForecast';
import HourlyForecast from '../../components/HourlyForecast/HourlyForecast';
import WeatherInfo from '../../components/WeatherInfo/WeatherInfo';
import styles from './WeatherLayout.module.css';

const WeatherLayout = () => {
  return (
    <div className={styles.weatherLayout}>
      <WeatherInfo />
      <DailyForecast />
      <HourlyForecast />
    </div>
  );
};

export default WeatherLayout;
