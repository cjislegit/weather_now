import { useState } from 'react';

import styles from './HourlyForecast.module.css';
import DropDown from '../DropDown/DropDown';
import rain from '../../assets/images/icon-rain.webp';

const HourlyForecast = ({ todayDate, hourlyWeather }) => {
  console.log(typeof todayDate);
  const [selectedDay, setSelectedDay] = useState(
    todayDate
      .toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
      .slice(0, 3)
      .toLowerCase()
  );

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  let hours = [];
  const createHourlyCards = () => {
    let hourIndex = 0;
    for (const key in hourlyWeather) {
      if (key === 'time') {
        for (let index = 0; index < hourlyWeather[key].length; index++) {
          console.log(
            hourlyWeather[key][index].toString().slice(0, 3).toLowerCase()
          );
          if (
            hourlyWeather[key][index].toString().slice(0, 3).toLowerCase() ==
            selectedDay
          ) {
            hours.push(
              hourlyWeather[key][index].toLocaleTimeString('en-US', {
                hour: 'numeric',
                hour12: true,
              })
            );
            hourIndex++;
            console.log(hours);
          } else {
            break;
          }
          // for (const time of hourlyWeather[key]) {
          //   if (time.toString().slice(0, 3).toLowerCase() == selectedDay) {
          //     hours.push(
          //       time.toLocaleTimeString('en-US', {
          //         hour: 'numeric',
          //         hour12: true,
          //       })
          //     );
          //     hourIndex++;
          //   } else {
          //     break;
          //   }
          // }
        }
      }
      console.log(hourIndex);
    }
  };

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
