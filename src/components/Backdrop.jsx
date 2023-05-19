import { useState, useEffect, useRef } from "react";

import "../styles/Backdrop.css";
// import Slider from "./Slider";
import { featured_movies } from "../data";
import { SwiperSlide, Swiper, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

function Backdrop() {
  const [activeSlide, setActiveSlide] = useState(featured_movies[0]);

  const slideClick = (index) => {
    const slider = featured_movies[index];
    setActiveSlide(slider);
  };

  return (
    <>
      <div className="container">
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
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={2}
                  loop={true}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={false}
                  modules={[EffectCoverflow, Pagination]}
                  className="mySwiper"
                >
                  {featured_movies.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className={`slide ${
                          activeSlide === slide ? "activeSlide" : ""
                        }`}
                        key={index}
                      >
                        <img
                          src={slide.image}
                          alt=""
                          onClick={() => slideClick(index)}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
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
