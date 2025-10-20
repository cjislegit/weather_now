import styles from './NavBar.module.css';
import logo from '../../assets/images/logo.svg';
import DropDown from '../DropDown/DropDown';

const NavBar = () => {
  return (
    <nav className={styles.navBarContainer}>
      <div className={styles.navBarLimit}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logo} alt='Logo' />
        </div>
        <div className={styles.unitsContainer}>
          <DropDown type='units' />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
