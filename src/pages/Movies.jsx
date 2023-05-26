import { useState } from "react";
import "../styles/Movies.css";
import { Cards, SearchBar } from "../components";
import { category, movieList } from "../data";

function Movies() {
  const [activeButton, setActiveButton] = useState(null);

  const handleCtgry = (id) => {
    setActiveButton(id);
  };

  return (
    <>
      <div className="movie-container">
        <SearchBar />
        <div className="category-buttons">
          {category.map((item, i) => (
            <button
              onClick={() => {
                handleCtgry(i);
              }}
              className={`category-btn ${
                activeButton === i ? "category-active" : ""
              }`}
              key={i}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="red-line"></div>

        {/* movie section */}
        <div className="movie-grid">
          <Cards movieList={movieList} />
        </div>
      </div>
    </>
  );
}
export default Movies;
