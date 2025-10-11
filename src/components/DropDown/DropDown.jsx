import style from './DropDown.module.css';
import dropdown from '../../assets/images/icon-dropdown.svg';
import gear from '../../assets/images/icon-units.svg';
import check from '../../assets/images/icon-checkmark.svg';

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
            <div className={`${style.dropDownUnitsOption} ${style.selected}`}>
              <span>Celsius (°C)</span>
              <img src={check} alt='check mark' />
            </div>
            <div className={style.dropDownUnitsOption}>
              <spam>Fahrenheit (°F)</spam>
            </div>
          </div>
          <div className={style.dropDownUnitsSection}>
            <div className={style.dropDownUnitsSectionTitle}>Wind Speed</div>
            <div className={`${style.dropDownUnitsOption} ${style.selected}`}>
              <spam>km/h</spam>
              <img src={check} alt='check mark' />
            </div>
            <div className={style.dropDownUnitsOption}>
              <spam>mph</spam>
            </div>
          </div>
          <div className={style.dropDownUnitsSection}>
            <div className={style.dropDownUnitsSectionTitle}>Precipitation</div>
            <div className={`${style.dropDownUnitsOption} ${style.selected}`}>
              <spam>Millimeters (mm)</spam>
              <img src={check} alt='check mark' />
            </div>
            <div className={style.dropDownUnitsOption}>
              <spam>Inches (In)</spam>
            </div>
          </div>
        </div>
        <div className={style.dropDownDays}></div>
      </div>
    </div>
  );
};

export default DropDown;
