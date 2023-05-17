// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/Slider.css";

// Import Swiper styles
import "swiper/css";

function Slider() {
  return (
    <div className="swiper-container">
      <p className="ftrd">featured movies</p>
      <Swiper
        spaceBetween={150}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
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
