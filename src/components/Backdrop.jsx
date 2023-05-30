import { useState, useEffect } from "react";

import "../styles/Backdrop.css";
import { tmdb_movies } from "../data";
import Slider from "./Slider";

function Backdrop() {
  const [featuredMovie, setFeaturedMovies] = useState([]);
  const [activeSlide, setActiveSlide] = useState(featuredMovie);
  const [genres, setGenres] = useState([]);

  // useEffect for fetching the movies
  useEffect(() => {
    const fetchMovies = async () => {
      const { data: firstData } = await tmdb_movies.get("movie/popular");
      const slicedData = firstData.results.slice(0, 4);

      // assign the slicedData arrays to the featuredMovies state for the slider
      setFeaturedMovies(slicedData);

      // set the firstValue of the activeSlide for the backdrop details
      setActiveSlide(slicedData[1]);
      console.log(slicedData);
    };
    fetchMovies();
  }, []);

  // useEffect for fetching Genres
  useEffect(() => {
    const fetchGenres = async () => {
      if (activeSlide) {
        const genreURL = `movies/${activeSlide.id}`;
        console.log(genreURL);
        const { data: genreData } = await tmdb_movies.get(
          `movie/${activeSlide.id}`
        );
        const movieGenres = genreData.genres.map((genre) => genre.name);
        setGenres(movieGenres);
      }
    };
    fetchGenres();
  }, [activeSlide]);

  const slideClick = async (index) => {
    const slider = featuredMovie[index];
    setActiveSlide(slider);
  };

  console.log(genres);

  return (
    <>
      <div className="container">
        {/* backdrops */}
        <div
          className={`back-div ${activeSlide ? "active" : ""}`}
          style={{
            backgroundImage: `url("https://www.themoviedb.org/t/p/original/${activeSlide.backdrop_path}")`,
          }}
        >
          <div className="movie">
            {/* movie details */}
            <div className="details">
              <h1 className="title">{activeSlide.title}</h1>
              <div className="rating">
                <div className="circle">
                  <p className="rate">
                    {activeSlide.vote_average * 10}
                    <span className="percent">%</span>
                  </p>
                </div>

                <div className="movie-info">
                  <ul>
                    <li>User Rating</li>
                    <li className="date">{activeSlide.release_date}</li>
                    <li className="genre">{genres.join(", ")}</li>
                    <li className="duration">{activeSlide.duration}</li>
                  </ul>
                </div>
              </div>
              <div className="description">
                <p>{activeSlide.overview}</p>
              </div>
              <div className="buttons">
                <button className="play-btn button">Play Now</button>
                <button className="trailer-btn button-gray">
                  Watch Trailer
                </button>
              </div>
            </div>

            {/* slide container */}
            <div className="slide-container">
              <p>Featured Movies</p>
              <div className="slide-wrapper">
                {/* swiper */}
                <Slider
                  slides={featuredMovie}
                  activeSlide={activeSlide}
                  slideClick={slideClick}
                />
              </div>
            </div>
          </div>
          <div className="filter"></div>
        </div>
      </div>
    </>
  );
}

export default Backdrop;
