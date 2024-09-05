import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div>
      <input
        type="text"
        className="searchInput"
        placeholder="Search a album of your choice"
      />
      <button className="searchButton">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
};

export default SearchBar;
