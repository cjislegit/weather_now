import DailyForecast from '../../components/DailyForecast/DailyForecast';
import HourlyForecast from '../../components/HourlyForecast/HourlyForecast';
import WeatherInfo from '../../components/WeatherInfo/WeatherInfo';
import styles from './WeatherLayout.module.css';

const WeatherLayout = ({ city, todayDate }) => {
  return (
    <div className={styles.weatherLayout}>
      <div className={styles.left}>
        <WeatherInfo city={city} todayDate={todayDate} />
        <DailyForecast />
      </div>
      <HourlyForecast />
    </div>
  );
};

export default WeatherLayout;
