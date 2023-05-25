import { useState, useEffect, useRef } from "react";

import "../styles/Backdrop.css";
import { featured_movies } from "../data";
import Slider from "./Slider";

function Backdrop() {
  const [activeSlide, setActiveSlide] = useState(featured_movies[0]);

  const slideClick = (index) => {
    const slider = featured_movies[index];
    setActiveSlide(slider);
  };

  return (
    <>
      <div className="container">
        {/* backdrops */}
        <div
          className={`back-div ${activeSlide ? "active" : ""}`}
          style={{ backgroundImage: `url("${activeSlide.image}")` }}
        >
          <div className="movie">
            <div className="details">
              <h1 className="title">{activeSlide.title}</h1>
              <div className="rating">
                <div className="circle">
                  <p className="rate">
                    {activeSlide.rating}
                    <span className="percent">%</span>
                  </p>
                </div>

                <div className="movie-info">
                  <ul>
                    <li>User Rating</li>
                    <li className="date">{activeSlide.date}</li>
                    <li className="genre">{activeSlide.genre}</li>
                    <li className="duration">{activeSlide.duration}</li>
                  </ul>
                </div>
              </div>
              <div className="description">
                <p>{activeSlide.summary}</p>
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
                  slides={featured_movies}
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
