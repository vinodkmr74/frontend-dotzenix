import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../config';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../slider/styles.css';
// Swiper modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

export default function Image_slider() {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/api/slider/`)
      .then(response => response.json())
      .then(data => setSliderData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
    <div className='w-full'>
     <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 5000,             
          disableOnInteraction: false
        }}

        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <div className='flex md:w-full w-full relative'>
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <img className='md:w-full w-full'
            src={`${BASE_URL}${item.image}`} />
            <p className='absolute top-30 md:top-60 left-[12%] text-xl md:text-4xl font-bold text-white'>{item.text}</p>
          </SwiperSlide>
        ))}

        </div>
      </Swiper>

    </div>
     
    </>
  );
}