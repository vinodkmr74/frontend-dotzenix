import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../slider/styles.css";
import { appData } from "../../data/appData";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

export default function Image_slider() {
  return (
    <>
      <div className="img-slider-container">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper"
        >
          <div className="slider-container">
            {appData.sliderData.map((item) => (
              <SwiperSlide key={item.id}>
                <img className="slider-image" src={item.image} />
                <p className="slider-text">{item.text}</p>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
}
