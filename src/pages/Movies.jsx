import { useState } from "react";
import "../styles/Movies.css";
import { SearchBar } from "../components";
import { category } from "../data";

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
            >
              {item}
            </button>
          ))}
        </div>
        <div className="red-line"></div>

        {/* movie section */}
        <div className="movie-grid">
          <div className="movie-card">
            <div className="movie-card-image">
              <img src="src/assets/images/111.jpg" alt="" />
            </div>
            <div className="movie-card-info">
              <p className="title">Avatar: The Way of the Water</p>
              <ul>
                <li>2h 1min</li>
                <li>Science Fiction, Drama</li>
                <li>2019</li>
              </ul>
              <p className="summary">
                Set more than a decade after the events of the first film, learn
                the story of the Sully family (Jake, Neytiri, and their kids),
                the trouble that follows them, the lengths they go to keep each
                other safe, the battles they fight to stay alive, and the
                tragedies they endure.
              </p>
              <button className="button">See More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Movies;
