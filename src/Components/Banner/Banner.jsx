
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './style.css'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
const Banner = () => {
    return (
        <div >
<Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img  src="https://github.com/Razzak118348/CraftedCanvas_Image/raw/main/images/LandscapePainting1.jpg" />
          <h2 className='text-lg font-bold text-center'>Majestic mountains capturing nature's grandeur.</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://github.com/Razzak118348/CraftedCanvas_Image/raw/main/images/PortraitDrawing1.jpg" />
          <h2 className='text-lg font-bold text-center text-white -mt-32'>Tranquil forests evoking peaceful serenity.</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://github.com/Razzak118348/CraftedCanvas_Image/raw/main/images/horse.png
" />
  <h2 className='text-lg font-bold text-center '>Detailed structures showcasing architectural beauty.</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://github.com/Razzak118348/CraftedCanvas_Image/raw/main/images/OilPainting1.jpg
" />
 <h2 className='text-lg font-bold text-center'> Expressive art focusing on color and emotion.</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://github.com/Razzak118348/CraftedCanvas_Image/raw/main/images/CharcoalSketching1.jpg
" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://github.com/Razzak118348/CraftedCanvas_Image/raw/main/images/CartoonDrawing1.jpg
" />
<h2
className='text-lg font-bold text-center'>Vibrant colors and playful characters.</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://github.com/Razzak118348/CraftedCanvas_Image/raw/main/images/OilPainting3.png
" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://github.com/Razzak118348/CraftedCanvas_Image/raw/main/images/woodcolor2.jpg
" />
<h2  className='text-lg font-bold text-center'>"Mountains inspire strength; the moon illuminates dreams."</h2>

        </SwiperSlide>
        <SwiperSlide>
          <img src="https://github.com/Razzak118348/CraftedCanvas_Image/raw/main/images/LandscapePainting3.jpg
" />
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;