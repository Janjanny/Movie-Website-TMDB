import { useState, useEffect } from "react";
import "../styles/Movies.css";
import { Cards, SearchBar } from "../components";
import { category, tmdb_movies } from "../data";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await tmdb_movies.get("movie/now_playing");
      setMovies(data.results);
      console.log(data.results);
    };
    fetchMovies();
  }, []);

  const [activeButton, setActiveButton] = useState(0);
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
          {movies.map((movie, i) => (
            <Cards key={i} {...movie} />
          ))}
        </div>

        <div className="movie-backdrop">
          <video autoPlay loop muted>
            <source src="https://youtu.be/KydqdKKyGEk" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
export default Movies;
