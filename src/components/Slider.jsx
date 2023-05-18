import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "../styles/Slider.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

function Slider() {
  const swiper = useSwiper();
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
      >
        <div className="slide-container">
          <SwiperSlide>
            <div className="slide">
              <img src="src/assets/images/sample2.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="src/assets/images/sample3.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="src/assets/images/sample4.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="src/assets/images/sample5.jpg" alt="" />
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}
export default Slider;
