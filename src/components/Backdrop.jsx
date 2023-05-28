import { useState, useEffect } from "react";

import "../styles/Backdrop.css";
import { featured_movies, tmdb_movies } from "../data";
import Slider from "./Slider";

function Backdrop() {
  const [featuredMovie, setFeaturedMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await tmdb_movies.get("movie/popular");
      setFeaturedMovies(data.results.slice(0, 4));
      console.log(data.results.slice(0, 4));
    };
    fetchMovies();
  }, []);

  const [activeSlide, setActiveSlide] = useState(featured_movies[0]);

  const slideClick = (index) => {
    const slider = featuredMovie[index];
    setActiveSlide(slider);
  };

  return (
    <>
      <div className="container">
        {/* backdrops */}
        <div
          className={`back-div ${activeSlide ? "active" : ""}`}
          style={{
            backgroundImage: `url("https://www.themoviedb.org/t/p/w220_and_h330_face/${activeSlide.backdrop_path}")`,
          }}
        >
          <div className="movie">
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
                    <li className="genre">{activeSlide.genre}</li>
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
