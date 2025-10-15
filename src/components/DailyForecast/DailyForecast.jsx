import styles from './DailyForecast.module.css';

const DailyForecast = () => {
  return (
    <div className={styles.dailyForecastContainer}>
      <div className={styles.dailyForecastTitle}>Daily Forecast</div>
      <div className={styles.dailyForecastCardContainer}>
        <div className={styles.dailyForecastCard}>
          <div className={styles.day}>Mon</div>
          <div className={styles.icon}>☀️</div>
          <div className={styles.range}>
            <div className={styles.low}>75°F</div>
            <div className={styles.high}>85°F</div>
          </div>
        </div>
        <div className={styles.dailyForecastCard}>
          <div className={styles.day}>Mon</div>
          <div className={styles.icon}>☀️</div>
          <div className={styles.range}>
            <div className={styles.low}>75°F</div>
            <div className={styles.high}>85°F</div>
          </div>
        </div>
        <div className={styles.dailyForecastCard}>
          <div className={styles.day}>Mon</div>
          <div className={styles.icon}>☀️</div>
          <div className={styles.range}>
            <div className={styles.low}>75°F</div>
            <div className={styles.high}>85°F</div>
          </div>
        </div>
        <div className={styles.dailyForecastCard}>
          <div className={styles.day}>Mon</div>
          <div className={styles.icon}>☀️</div>
          <div className={styles.range}>
            <div className={styles.low}>75°F</div>
            <div className={styles.high}>85°F</div>
          </div>
        </div>
        <div className={styles.dailyForecastCard}>
          <div className={styles.day}>Mon</div>
          <div className={styles.icon}>☀️</div>
          <div className={styles.range}>
            <div className={styles.low}>75°F</div>
            <div className={styles.high}>85°F</div>
          </div>
        </div>
        <div className={styles.dailyForecastCard}>
          <div className={styles.day}>Mon</div>
          <div className={styles.icon}>☀️</div>
          <div className={styles.range}>
            <div className={styles.low}>75°F</div>
            <div className={styles.high}>85°F</div>
          </div>
        </div>
        <div className={styles.dailyForecastCard}>
          <div className={styles.day}>Mon</div>
          <div className={styles.icon}>☀️</div>
          <div className={styles.range}>
            <div className={styles.low}>75°F</div>
            <div className={styles.high}>85°F</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyForecast;
