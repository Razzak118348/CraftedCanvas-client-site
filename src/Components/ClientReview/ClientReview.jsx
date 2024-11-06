import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typewriter } from "react-simple-typewriter";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './client.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';


const ClientReview = () => {

    return (
        <div className='mt-28'>
            <h2 className='text-lg md:text-3xl mb-5 font-semibold'><Typewriter
                      words={["Customer Reviews and Testimonials ..."]}
                      loop={3}
                      typeSpeed={70}
                      deleteSpeed={50}
                      cursor
                      cursorColor='yellow'
                    /></h2>
            <Swiper
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <div>
                    <div className='-mb-52 sticky ml-3 space-y-4'>
                        <div className="font-bold md:text-2xl " data-swiper-parallax="-200">
                            The  best thing about this website is <br /> the way it makes me feel.
                        </div>
                        <div className=" md:text-lg max-w-lg ml-4" data-swiper-parallax="-100">
                            <p>
                                I found my best craft from this site and  i am very happy . Overall this  website is very good and i will recommend it to my friends and family.
                            </p>
                        </div>
                    </div>

                    <img className='' src="https://raw.githubusercontent.com/Razzak118348/CraftedCanvas_Image/main/images/client.jpg" alt="" />

                </div></SwiperSlide>
                <SwiperSlide >
                    <div>
                    <div className='-mb-52 sticky ml-3 space-y-4'>
                        <div className="font-bold md:text-2xl " data-swiper-parallax="-200">
                            The  best thing about this website is <br /> the way it makes me feel.
                        </div>
                        <div className=" md:text-lg
                        max-w-52 md:max-w-lg ml-4" data-swiper-parallax="-100">
                            <p>
                                I found my best craft from this site and  i am very happy . Overall this  website is very good and i will recommend it to my friends and family.
                            </p>
                        </div>
                    </div>

                    <img className='' src="https://raw.githubusercontent.com/Razzak118348/CraftedCanvas_Image/main/images/client2.jpg
" alt="" />

                </div></SwiperSlide>



        </Swiper>
      </div >
    );
};

export default ClientReview;