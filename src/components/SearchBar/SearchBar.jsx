import styles from './SearchBar.module.css';
import search from '../../assets/images/icon-search.svg';

const SearchBar = ({ cities, setCities }) => {
  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.search}>
        <img src={search} alt='search' />
        <input type='text' placeholder='Search for a place...' onChange={(e) => setCities(e.target.value)} value={cities} />
      </div>
      <input type='button' value='Search' />
    </div>
  );
};

export default SearchBar;
