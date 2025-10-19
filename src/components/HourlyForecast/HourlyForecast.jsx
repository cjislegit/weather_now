import styles from './HourlyForecast.module.css';
import DropDown from '../DropDown/DropDown';

const HourlyForecast = () => {
  return (
    <div className={styles.hourlyForecastContainer}>
      <div className={styles.hourlyForecastHeader}>
        <div className={styles.hourlyForecastTitle}>Hourly forecast</div>
        <DropDown />
      </div>
    </div>
  );
};

export default HourlyForecast;
