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
    </div>
  );
};

export default DropDown;
