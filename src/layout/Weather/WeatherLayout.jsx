import DailyForecast from '../../components/DailyForecast/DailyForecast';
import HourlyForecast from '../../components/HourlyForecast/HourlyForecast';
import WeatherInfo from '../../components/WeatherInfo/WeatherInfo';
import styles from './WeatherLayout.module.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const WeatherLayout = ({ city, todayDate, weather, unit, isLoading }) => {
  return (
    <div className={styles.weatherLayout}>
      <div className={styles.left}>
        <WeatherInfo
          city={city}
          todayDate={todayDate}
          weather={weather}
          unit={unit}
          isLoading={isLoading}
        />
        <DailyForecast weather={weather} isLoading={isLoading} />
      </div>
      <HourlyForecast
        todayDate={todayDate}
        weather={weather}
        isLoading={isLoading}
      />
    </div>
  );
};

export default WeatherLayout;
