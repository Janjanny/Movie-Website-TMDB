import { SwiperSlide, Swiper, useSwiper } from "swiper/react";

import "../styles/Backdrop.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

function Slider({ slides, activeSlide, slideClick }) {
  return (
    <div>
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
        {slides.map((slides, index) => (
          <SwiperSlide key={index}>
            <div
              className={`slide ${activeSlide === slides ? "activeSlide" : ""}`}
              key={index}
            >
              <img
                src={slides.image}
                alt=""
                onClick={() => slideClick(index)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Slider;
