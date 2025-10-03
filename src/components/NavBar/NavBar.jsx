import styles from './NavBar.module.css';
import logo from '../../assets/images/logo.svg';

const NavBar = () => {
  return (
    <nav className={styles.navBarContainer}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt='Logo' />
      </div>
      <div className={styles.unitsContainer}></div>
    </nav>
  );
};

export default NavBar;
