import { useState } from "react";

import "../styles/Backdrop.css";
// import Slider from "./Slider";
import { featured_movies } from "../data";

function Backdrop() {
  const [activeSlide, setActiveSlide] = useState(featured_movies[0]);

  const slideClick = (index) => {
    console.log(index);
    const slider = featured_movies[index];
    setActiveSlide(slider);
  };

  return (
    <>
      <div className="container">
        <div
          className="back-div"
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

            <div className="slide-wrapper">
              {featured_movies.map((slide, index) => (
                <div
                  className={`slide ${
                    activeSlide === slide ? "active" : "inActive"
                  }`}
                  key={index}
                >
                  <img
                    src={slide.image}
                    alt=""
                    onClick={() => slideClick(index)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="filter"></div>
        </div>
      </div>
    </>
  );
}

export default Backdrop;
