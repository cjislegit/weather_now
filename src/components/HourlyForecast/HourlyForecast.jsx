import { useState } from 'react';

import styles from './HourlyForecast.module.css';
import DropDown from '../DropDown/DropDown';
import rain from '../../assets/images/icon-rain.webp';

const HourlyForecast = ({ todayDate, hourlyWeather }) => {
  console.log(typeof todayDate);
  const [selectedDay, setSelectedDay] = useState(todayDate);

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  let hours = [];
  let hourIndex = [];
  const createHourlyCards = () => {
    for (const key in hourlyWeather) {
      if (key === 'time') {
        for (let index = 0; index < hourlyWeather[key].length; index++) {
          if (
            hourlyWeather[key][index].toDateString() ===
            selectedDay.toDateString()
          ) {
            hours.push(
              hourlyWeather[key][index].toLocaleTimeString('en-US', {
                hour: 'numeric',
                hour12: true,
              })
            );
            hourIndex.push(index);
          }
        }
      }
      console.log(hours);
      console.log(hourIndex);
    }
  };

  createHourlyCards();

  return (
    <div className={styles.hourlyForecastContainer}>
      <div className={styles.hourlyForecastHeader}>
        <div className={styles.hourlyForecastTitle}>Hourly forecast</div>
        <DropDown
          selectedDay={selectedDay}
          handleDayChange={handleDayChange}
          test={createHourlyCards}
        />
      </div>
      <div className={styles.hourlyForecastCardContainer}>
        {hours.map((hour, index) => (
          <div key={index} className={styles.hourlyForecastCard}>
            <div className={styles.left}>
              <img src={rain} alt='rain icon' />
              <div className={styles.time}>{hour}</div>
            </div>
            <div className={styles.right}>
              <div className={styles.temp}>20°</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
