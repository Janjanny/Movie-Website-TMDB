import { useState } from "react";
import "../styles/Movies.css";
import { SearchBar } from "../components";
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
          {movieList.map((movie, i) => (
            <div className="movie-card" key={i}>
              <div className="movie-card-image">
                <img src={movie.image} alt="" />
              </div>
              <div className="movie-card-info">
                <p className="title">{movie.title}</p>
                <ul>
                  <li>{movie.duration}</li>
                  <li>{movie.genre}</li>
                  <li>{movie.year}</li>
                </ul>
                <p className="summary">{movie.summary}</p>
                <button className="button">See More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Movies;
