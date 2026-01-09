import { useState } from 'react';

import styles from './HourlyForecast.module.css';
import DropDown from '../DropDown/DropDown';
import drizzleIcon from '../../assets/images/icon-drizzle.webp';
import rainIcon from '../../assets/images/icon-rain.webp';
import snowIcon from '../../assets/images/icon-snow.webp';
import clearIcon from '../../assets/images/icon-sunny.webp';
import cloudyIcon from '../../assets/images/icon-overcast.webp';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HourlyForecast = ({ todayDate, weather, isLoading }) => {
  let hourlyWeather = weather ? weather.hourly : null;
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
    }
  };

  if (!isLoading) {
    createHourlyCards();
  }

  const getWeatherIcon = (code) => {
    let weatherIcon;
    switch (code) {
      case 0:
        weatherIcon = clearIcon;
        break;
      case 51:
      case 53:
      case 55:
        weatherIcon = drizzleIcon;
        break;
      case 61:
      case 63:
      case 65:
        weatherIcon = rainIcon;
        break;
      case 71:
      case 73:
      case 75:
        weatherIcon = snowIcon;
        break;
      case 45:
      case 48:
      case 1:
      case 2:
      case 3:
        weatherIcon = cloudyIcon;
        break;
      default:
        weatherIcon = clearIcon;
    }
    return weatherIcon;
  };

  return (
    <div className={styles.hourlyForecastContainer}>
      <div className={styles.hourlyForecastHeader}>
        <div className={styles.hourlyForecastTitle}>Hourly forecast</div>
        <DropDown
          selectedDay={selectedDay}
          handleDayChange={handleDayChange}
          hourlyWeather={hourlyWeather}
        />
      </div>
      <div className={styles.hourlyForecastCardContainer}>
        {isLoading ? (
          Array.from({ length: 7 }).map((_, index) => (
            <div
              className={`${styles.hourlyForecastCard} ${styles.hourlyForecastCardSkeleton}`}
              key={index}
            >
              <Skeleton
                width={350}
                height={60}
                highlightColor='#FF820A'
                baseColor='#ACACB7'
              />
            </div>
          ))
        ) : (
          <>
            {hours.map((hour, index) => (
              <div
                id={hourIndex[index]}
                key={index}
                className={styles.hourlyForecastCard}
              >
                <div className={styles.left}>
                  <img
                    src={getWeatherIcon(
                      hourlyWeather['weather_code'][hourIndex[index]]
                    )}
                    alt='rain icon'
                  />
                  <div className={styles.time}>{hour}</div>
                </div>
                <div className={styles.right}>
                  <div className={styles.temp}>
                    {Math.trunc(
                      hourlyWeather['temperature_2m'][hourIndex[index]]
                    )}
                    °
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default HourlyForecast;
