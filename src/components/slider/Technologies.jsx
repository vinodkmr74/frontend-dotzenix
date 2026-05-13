import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function Technologies({html,css,javascript,react,nextjs,bootstrap}) {
  return (  <div className="w-full">
      <Swiper
        slidesPerView={4}
         breakpoints={{
      0: { slidesPerView: 2 },
      480: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
  }}
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
          <img src={html} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={css} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={javascript} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={react} alt="" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src={nextjs} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={bootstrap} alt="" />
        </SwiperSlide>

      </Swiper>
    </div>



  )
}
