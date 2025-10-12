import Hero from '../../components/Hero/Hero';
import NavBar from '../../components/NavBar/NavBar';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <NavBar />
      <Hero />
    </div>
  );
};

export default Home;
