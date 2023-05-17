// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function Slider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
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
  );
}
export default Slider;
