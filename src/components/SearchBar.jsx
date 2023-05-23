import { useState } from "react";
import "../styles/SearchBar.css";

function SearchBar() {
  //for setting the value of the input
  const [searchValue, setSearchValue] = useState("");

  // for setting the value of the dropdown in search bar
  const [dropdownValue, setDropdownValue] = useState("Movies");

  //for toggling the visibility of the dropdown menu
  const [dropdownVisible, setDropdownVisible] = useState(false);

  //function for setting the searchValue
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  //function for setting the dropdown value
  const handleDropdownValue = (item) => {
    setDropdownValue(item);
    setDropdownVisible(false);
  };

  //function for setting the dropdown visibility
  const handleDropdownVisibility = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      <div className="search-bar">
        <div className="icon">
          <ion-icon name="search-outline"></ion-icon>
        </div>
        <input
          type="search"
          placeholder="Search..."
          value={searchValue}
          onChange={handleInputChange}
          className="input-bar"
        />
        <hr className="search-bar-divider" />
        <div className="search-location">
          <p>{dropdownValue}</p>
        </div>
        <div className="toggle-btn" onClick={handleDropdownVisibility}>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
        {dropdownVisible && (
          <div className="dropdown-menu">
            <ul>
              <li
                onClick={() => {
                  handleDropdownValue("Movies");
                }}
              >
                Movies
              </li>
              <li
                onClick={() => {
                  handleDropdownValue("Series");
                }}
              >
                Series
              </li>
              <li
                onClick={() => {
                  handleDropdownValue("People");
                }}
              >
                People
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
export default SearchBar;
