import styles from './WeatherInfo.module.css';
import overcastIcon from '../../assets/images/icon-overcast.webp';

const WeatherInfo = () => {
  return (
    <div className={styles.weatherInfoContainer}>
      <div className={styles.weatherInfoDisplay}>
        <div className={styles.weatherInfoLocation}>
          <div className={styles.location}>Fullerton, CA</div>
          <div className={styles.date}>Tuesday, Nov 11, 2025</div>
        </div>
        <div className={styles.weatherInfoTemp}>
          <div className={styles.icon}>
            <img src={overcastIcon} alt='' />
          </div>
          <div className={styles.temp}>20°</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
