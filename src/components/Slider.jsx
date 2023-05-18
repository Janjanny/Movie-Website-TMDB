import { useState, React } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/Slider.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

//import movie data
import { featured_movies } from "../data";

SwiperCore.use([EffectCoverflow, Pagination]);

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideClick = (slideIndex) => {
    setCurrentSlide(slideIndex);
    swiper.slideTo(slideIndex);
  };

  const swiper = new Swiper();

  return (
    <div className="swiper-container">
      <p className="ftrd">featured movies</p>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"2"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        onInit={(swiperInstance) => {
          swiperInstance.controller.control = swiper;
        }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
      >
        <div className="slide-container">
          {featured_movies.map((slide, index) => (
            <SwiperSlide key={slide.id} onClick={() => slideClick(index)}>
              <div
                className={`slide ${index === currentSlide ? "active" : ""}`}
              >
                <img src={slide.image} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
export default Slider;
