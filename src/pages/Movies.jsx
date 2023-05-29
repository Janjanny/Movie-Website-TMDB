import { useState, useEffect } from "react";
import "../styles/Movies.css";
import { Cards, SearchBar } from "../components";
import { category, tmdb_movies } from "../data";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // fetch movies
    const fetchMovies = async () => {
      const { data } = await tmdb_movies.get("movie/now_playing");
      setMovies(data.results);
      // console.log(movies);

      //fetch genres of movies
      const genresPromise = data.results.map(async (movie) => {
        const { data: genresData } = await tmdb_movies.get(`movie/${movie.id}`);
        return genresData.genres.map((genre) => genre.name);
      });

      const movieGenres = await Promise.all(genresPromise);
      setGenres(movieGenres);
      // console.log(movieGenres);
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
            <Cards key={i} {...movie} genre={genres[i]} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Movies;
