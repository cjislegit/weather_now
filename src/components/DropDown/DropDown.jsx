import style from './DropDown.module.css';
import dropdown from '../../assets/images/icon-dropdown.svg';
import gear from '../../assets/images/icon-units.svg';

const DropDown = ({ title }) => {
  return (
    <div className={style.dropDownContainer}>
      <div className={style.dropDownButton}>
        <img src={gear} alt='Gear' />
        <span>{title}</span>
        <img src={dropdown} alt='dropdown arrow' />
      </div>
      <div className={style.dropDownList}>
        <div className={style.dropDownUnits}>
          <div className={style.dropDownUnitsTitle}>Switch to Imperial</div>
          <div className={style.dropDownUnitsSection}>
            <div className={style.dropDownUnitsSectionTitle}>Temperature</div>
            <div className={style.dropDownUnitsOption}>Celsius (°C)</div>
            <div className={style.dropDownUnitsOption}>Fahrenheit (°F)</div>
          </div>
          <div className={style.dropDownUnitsSection}>
            <div className={style.dropDownUnitsSectionTitle}>Wind Speed</div>
            <div className={style.dropDownUnitsOption}>km/h</div>
            <div className={style.dropDownUnitsOption}>mph</div>
          </div>
          <div className={style.dropDownUnitsSection}>
            <div className={style.dropDownUnitsSectionTitle}>Precipitation</div>
            <div className={style.dropDownUnitsOption}>Millimeters (mm)</div>
            <div className={style.dropDownUnitsOption}>Inches (In)</div>
          </div>
        </div>
        <div className={style.dropDownDays}></div>
      </div>
    </div>
  );
};

export default DropDown;
