import { useState, useRef, useEffect } from 'react';

import style from './DropDown.module.css';
import dropdown from '../../assets/images/icon-dropdown.svg';
import gear from '../../assets/images/icon-units.svg';
import check from '../../assets/images/icon-checkmark.svg';

const DropDown = ({
  type,
  selectedDay,
  handleDayChange,
  hourlyWeather,
  handleUnitChange,
  unit,
}) => {
  const [open, setOpen] = useState(false);

  let days = hourlyWeather ? hourlyWeather['time'] : [];

  const toggleDropDown = () => {
    setOpen((prevState) => !prevState);
  };

  const getDayName = (selectedDay) => {
    let day;
    switch (selectedDay) {
      case 'mon':
        day = 'Monday';
        break;
      case 'tue':
        day = 'Tuesday';
        break;
      case 'wed':
        day = 'Wednesday';
        break;
      case 'thu':
        day = 'Thursday';
        break;
      case 'fri':
        day = 'Friday';
        break;
      case 'sat':
        day = 'Saturday';
        break;
      case 'sun':
        day = 'Sunday';
        break;
      default:
        day = 'Monday';
    }
    return day;
  };

  let daysFormatted = [];
  const formatDays = () => {
    daysFormatted = Array.from(
      new Map([...days].reverse().map((d) => [d.toDateString(), d])).values()
    ).reverse();

    daysFormatted.pop();
  };
  formatDays();

  const dropDownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={style.dropDownContainer} ref={dropDownRef}>
      <div
        onClick={toggleDropDown}
        className={style.dropDownButton}
        style={{
          backgroundColor: type === 'units' ? '#262540' : '#3c3b5e',
        }}
      >
        {type === 'units' && <img src={gear} alt='Gear' />}
        <span>
          {type === 'units'
            ? 'Units'
            : getDayName(
                selectedDay
                  .toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })
                  .slice(0, 3)
                  .toLowerCase()
              )}
        </span>
        <img src={dropdown} alt='dropdown arrow' />
      </div>
      {open && (
        <div className={style.dropDownList}>
          {type === 'units' ? (
            <div className={style.dropDownUnits}>
              <div
                onClick={handleUnitChange}
                className={style.dropDownUnitsTitle}
              >
                {unit === 'imperial'
                  ? 'Switch to Metric'
                  : 'Switch to Imperial'}
              </div>
              <div className={style.dropDownUnitsSection}>
                <div className={style.dropDownUnitsSectionTitle}>
                  Temperature
                </div>
                <div
                  className={`${style.dropDownUnitsOption} ${
                    unit === 'metric' ? style.selected : ''
                  }`}
                >
                  <span>Celsius (°C)</span>
                  {unit === 'metric' && <img src={check} alt='check mark' />}
                </div>
                <div
                  className={`${style.dropDownUnitsOption} ${
                    unit === 'imperial' ? style.selected : ''
                  } `}
                >
                  <spam>Fahrenheit (°F)</spam>
                  {unit === 'imperial' && <img src={check} alt='check mark' />}
                </div>
              </div>
              <div className={style.dropDownUnitsSection}>
                <div className={style.dropDownUnitsSectionTitle}>
                  Wind Speed
                </div>
                <div
                  className={`${style.dropDownUnitsOption} ${
                    unit === 'metric' ? style.selected : ''
                  } `}
                >
                  <spam>km/h</spam>
                  {unit === 'metric' && <img src={check} alt='check mark' />}
                </div>
                <div
                  className={`${style.dropDownUnitsOption} ${
                    unit === 'imperial' ? style.selected : ''
                  } `}
                >
                  <spam>mph</spam>
                  {unit === 'imperial' && <img src={check} alt='check mark' />}
                </div>
              </div>
              <div className={style.dropDownUnitsSection}>
                <div className={style.dropDownUnitsSectionTitle}>
                  Precipitation
                </div>
                <div
                  className={`${style.dropDownUnitsOption} ${
                    unit === 'metric' ? style.selected : ''
                  } `}
                >
                  <spam>Millimeters (mm)</spam>
                  {unit === 'metric' && <img src={check} alt='check mark' />}
                </div>
                <div
                  className={`${style.dropDownUnitsOption} ${
                    unit === 'imperial' ? style.selected : ''
                  } `}
                >
                  <spam>Inches (In)</spam>
                  {unit === 'imperial' && <img src={check} alt='check mark' />}
                </div>
              </div>
            </div>
          ) : (
            <div className={style.dropDownDays}>
              {daysFormatted.map((day, index) => (
                <div
                  key={index}
                  className={`${style.dropDownDayOption} ${
                    selectedDay === 'mo' ? style.selected : ''
                  }`}
                  onClick={() => handleDayChange(day)}
                >
                  {day.toLocaleDateString('en-US', { weekday: 'long' })}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DropDown;
