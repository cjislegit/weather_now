import Hero from '../../components/Hero/Hero';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import WeatherLayout from '../../layout/Weather/WeatherLayout';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <NavBar />
      <Hero />
      <main>
        <SearchBar />
        <WeatherLayout />
      </main>
    </div>
  );
};

export default Home;
