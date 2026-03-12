import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

export default function Company_image() {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="companySlider"
      >
        <SwiperSlide>
          <img src="/image/download.png" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/image/download2.png" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/image/images (2).png" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/image/logo.png" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/image/download.png" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/image/download2.png" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/image/images (2).png" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/image/logo.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}