import React from "react";
import { ReactComponent as SearcIcon } from "../../assets/search-icon.svg";
import styles from "./Search.module.css";

function Search({ searchData, placeholder }) {
  return (
    <form className={styles.wrapper}>
      <input placeholder={placeholder} className={styles.search} required />
      <button className={styles.searchButton}>
        <SearcIcon />
      </button>
    </form>
  );
}

export default Search;
