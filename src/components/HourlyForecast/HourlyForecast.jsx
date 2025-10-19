import styles from './HourlyForecast.module.css';
import DropDown from '../DropDown/DropDown';
import rain from '../../assets/images/icon-rain.webp';

const HourlyForecast = () => {
  return (
    <div className={styles.hourlyForecastContainer}>
      <div className={styles.hourlyForecastHeader}>
        <div className={styles.hourlyForecastTitle}>Hourly forecast</div>
        <DropDown />
      </div>
      <div className={styles.hourlyForecastCardContainer}>
        <div className={styles.hourlyForecastCard}>
          <div className={styles.left}>
            <img src={rain} alt='rain icon' />
            <div className={styles.time}>1 PM</div>
          </div>
          <div className={styles.right}>
            <div className={styles.temp}>20°</div>
          </div>
        </div>
        <div className={styles.hourlyForecastCard}>
          <div className={styles.left}>
            <img src={rain} alt='rain icon' />
            <div className={styles.time}>1 PM</div>
          </div>
          <div className={styles.right}>
            <div className={styles.temp}>20°</div>
          </div>
        </div>
        <div className={styles.hourlyForecastCard}>
          <div className={styles.left}>
            <img src={rain} alt='rain icon' />
            <div className={styles.time}>1 PM</div>
          </div>
          <div className={styles.right}>
            <div className={styles.temp}>20°</div>
          </div>
        </div>
        <div className={styles.hourlyForecastCard}>
          <div className={styles.left}>
            <img src={rain} alt='rain icon' />
            <div className={styles.time}>1 PM</div>
          </div>
          <div className={styles.right}>
            <div className={styles.temp}>20°</div>
          </div>
        </div>
        <div className={styles.hourlyForecastCard}>
          <div className={styles.left}>
            <img src={rain} alt='rain icon' />
            <div className={styles.time}>1 PM</div>
          </div>
          <div className={styles.right}>
            <div className={styles.temp}>20°</div>
          </div>
        </div>
        <div className={styles.hourlyForecastCard}>
          <div className={styles.left}>
            <img src={rain} alt='rain icon' />
            <div className={styles.time}>1 PM</div>
          </div>
          <div className={styles.right}>
            <div className={styles.temp}>20°</div>
          </div>
        </div>
        <div className={styles.hourlyForecastCard}>
          <div className={styles.left}>
            <img src={rain} alt='rain icon' />
            <div className={styles.time}>1 PM</div>
          </div>
          <div className={styles.right}>
            <div className={styles.temp}>20°</div>
          </div>
        </div>
        <div className={styles.hourlyForecastCard}>
          <div className={styles.left}>
            <img src={rain} alt='rain icon' />
            <div className={styles.time}>1 PM</div>
          </div>
          <div className={styles.right}>
            <div className={styles.temp}>20°</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
