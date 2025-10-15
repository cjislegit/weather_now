import styles from './DailyForecast.module.css';
import rain from '../../assets/images/icon-rain.webp';

const DailyForecast = () => {
  return (
    <div className={styles.dailyForecastContainer}>
      <div className={styles.dailyForecastTitle}>Daily forecast</div>
      <div className={styles.dailyForecastCardContainer}>
        <div className={styles.dailyForecastCard}>
          <div className={styles.day}>Mon</div>
          <div className={styles.icon}>
            <img src={rain} alt='' />
          </div>
          <div className={styles.range}>
            <div className={styles.low}>75°</div>
            <div className={styles.high}>85°</div>
          </div>
        </div>
        <div className={styles.dailyForecastCard}>
          <div className={styles.day}>Mon</div>
          <div className={styles.icon}>
            <img src={rain} alt='' />
          </div>
          <div className={styles.range}>
            <div className={styles.low}>75°</div>
            <div className={styles.high}>85°</div>
          </div>
        </div>
        <div className={styles.dailyForecastCard}>
          <div className={styles.day}>Mon</div>
          <div className={styles.icon}>
            <img src={rain} alt='' />
          </div>
          <div className={styles.range}>
            <div className={styles.low}>75°</div>
            <div className={styles.high}>85°</div>
          </div>
        </div>
        <div className={styles.dailyForecastCard}>
          <div className={styles.day}>Mon</div>
          <div className={styles.icon}>
            <img src={rain} alt='' />
          </div>
          <div className={styles.range}>
            <div className={styles.low}>75°</div>
            <div className={styles.high}>85°</div>
          </div>
        </div>
        <div className={styles.dailyForecastCard}>
          <div className={styles.day}>Mon</div>
          <div className={styles.icon}>
            <img src={rain} alt='' />
          </div>
          <div className={styles.range}>
            <div className={styles.low}>75°</div>
            <div className={styles.high}>85°</div>
          </div>
        </div>
        <div className={styles.dailyForecastCard}>
          <div className={styles.day}>Mon</div>
          <div className={styles.icon}>
            <img src={rain} alt='' />
          </div>
          <div className={styles.range}>
            <div className={styles.low}>75°</div>
            <div className={styles.high}>85°</div>
          </div>
        </div>
        <div className={styles.dailyForecastCard}>
          <div className={styles.day}>Mon</div>
          <div className={styles.icon}>
            <img src={rain} alt='' />
          </div>
          <div className={styles.range}>
            <div className={styles.low}>75°</div>
            <div className={styles.high}>85°</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyForecast;
