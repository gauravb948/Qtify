import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import styles from "./Search.module.css";

function Search({ searchData, placeholder }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <input placeholder={placeholder} className={styles.search} required />
      <button type="submit" className={styles.searchButton}>
        <SearchIcon />
      </button>
    </form>
  );
}

export default Search;
