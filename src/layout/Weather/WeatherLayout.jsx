import WeatherInfo from '../../components/WeatherInfo/WeatherInfo';
import styles from './WeatherLayout.module.css';

const WeatherLayout = () => {
  return (
    <div className={styles.weatherLayout}>
      <WeatherInfo />
    </div>
  );
};

export default WeatherLayout;
