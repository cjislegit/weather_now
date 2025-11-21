import { useState, useRef, useEffect } from 'react';

import style from './DropDown.module.css';
import dropdown from '../../assets/images/icon-dropdown.svg';
import gear from '../../assets/images/icon-units.svg';
import check from '../../assets/images/icon-checkmark.svg';

const DropDown = ({ type, selectedDay, handleDayChange, days = [] }) => {
  const [open, setOpen] = useState(false);
  const [unitType, setUnitType] = useState('metric');

  const toggleDropDown = () => {
    setOpen((prevState) => !prevState);
  };

  const handleUnitsChange = () => {
    setUnitType((prevState) =>
      prevState === 'metric' ? 'imperial' : 'metric'
    );
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
                onClick={handleUnitsChange}
                className={style.dropDownUnitsTitle}
              >
                {unitType === 'imperial'
                  ? 'Switch to Metric'
                  : 'Switch to Imperial'}
              </div>
              <div className={style.dropDownUnitsSection}>
                <div className={style.dropDownUnitsSectionTitle}>
                  Temperature
                </div>
                <div
                  className={`${style.dropDownUnitsOption} ${
                    unitType === 'metric' ? style.selected : ''
                  }`}
                >
                  <span>Celsius (°C)</span>
                  {unitType === 'metric' && (
                    <img src={check} alt='check mark' />
                  )}
                </div>
                <div
                  className={`${style.dropDownUnitsOption} ${
                    unitType === 'imperial' ? style.selected : ''
                  } `}
                >
                  <spam>Fahrenheit (°F)</spam>
                  {unitType === 'imperial' && (
                    <img src={check} alt='check mark' />
                  )}
                </div>
              </div>
              <div className={style.dropDownUnitsSection}>
                <div className={style.dropDownUnitsSectionTitle}>
                  Wind Speed
                </div>
                <div
                  className={`${style.dropDownUnitsOption} ${
                    unitType === 'metric' ? style.selected : ''
                  } `}
                >
                  <spam>km/h</spam>
                  {unitType === 'metric' && (
                    <img src={check} alt='check mark' />
                  )}
                </div>
                <div
                  className={`${style.dropDownUnitsOption} ${
                    unitType === 'imperial' ? style.selected : ''
                  } `}
                >
                  <spam>mph</spam>
                  {unitType === 'imperial' && (
                    <img src={check} alt='check mark' />
                  )}
                </div>
              </div>
              <div className={style.dropDownUnitsSection}>
                <div className={style.dropDownUnitsSectionTitle}>
                  Precipitation
                </div>
                <div
                  className={`${style.dropDownUnitsOption} ${
                    unitType === 'metric' ? style.selected : ''
                  } `}
                >
                  <spam>Millimeters (mm)</spam>
                  {unitType === 'metric' && (
                    <img src={check} alt='check mark' />
                  )}
                </div>
                <div
                  className={`${style.dropDownUnitsOption} ${
                    unitType === 'imperial' ? style.selected : ''
                  } `}
                >
                  <spam>Inches (In)</spam>
                  {unitType === 'imperial' && (
                    <img src={check} alt='check mark' />
                  )}
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
