// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import {Autoplay,EffectCoverflow, Pagination } from 'swiper/modules';



import React from 'react'

const TestimonialSwiper = () => {
  return (
    <div className='h-fit w-11/12 max-sm:h-full py-6'>
      <Swiper
        effect={'slide'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        modules={[Autoplay,EffectCoverflow, Pagination]}
        autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        }}
        spaceBetween={50}
        className="mySwiper flex items-center justify-center h-full w-full"
      >
        <SwiperSlide className='h-fit w-3/5 overflow-hidden bg-white border border-primary flex items-center justify-center rounded-2xl max-sm:h-full'>
          <div className="swiperSlide relative h-80 w-full flex items-center justify-center max-sm:h-full">
                <div className="overlayVircle h-48 w-48 rounded-full -translate-x-[50%] -translate-y-[50%] bg-fontColor absolute top-0 left-0
                                ">
                </div>
                <i class="ri-double-quotes-l absolute top-0 left-0 p-4 text-white text-5xl"></i>
                <div className="test absolute h-4/5 w-4/5 flex items-center justify-center flex-col gap-4 max-sm:pt-24 max-sm:h-full">
                    <div className="star">
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                    </div>
                    <div className="content">
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam harum facere assumenda? Blanditiis tempora laboriosam nostrum iste iure aliquid excepturi cupiditate eligendi culpa, ut praesentium quod, a voluptatibus adipisci nobis.</p>
                    </div>
                    <div className="reviewer self-end">
                        <p>- Robert Mathew</p>
                    </div>
                </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='h-fit w-3/5 overflow-hidden bg-fontColor border border-fontColor flex items-center justify-center rounded-2xl max-sm:h-full'>
            <div className="swiperSlide relative h-80 w-full flex items-center justify-center max-sm:h-full">
                <div className="overlayVircle h-48 w-48 rounded-full -translate-x-[50%] -translate-y-[50%] bg-white absolute top-0 left-0">
                </div>
                <i class="ri-double-quotes-l absolute top-0 left-0 p-4 text-fontColor text-5xl"></i>
                <div className="test absolute h-4/5 w-4/5 flex items-center justify-center flex-col gap-4 max-sm:pt-24 max-sm:h-full">
                    <div className="star">
                        <i class="ri-star-s-fill text-white"></i>
                        <i class="ri-star-s-fill text-white"></i>
                        <i class="ri-star-s-fill text-white"></i>
                        <i class="ri-star-s-fill text-white"></i>
                        <i class="ri-star-s-fill text-white"></i>
                    </div>
                    <div className="content">
                        <p className='text-center text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam harum facere assumenda? Blanditiis tempora laboriosam nostrum iste iure aliquid excepturi cupiditate eligendi culpa, ut praesentium quod, a voluptatibus adipisci nobis.</p>
                    </div>
                    <div className="reviewer self-end">
                        <p className='text-white'>- Robert Mathew</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='h-fit w-3/5 overflow-hidden bg-white border border-primary flex items-center justify-center rounded-2xl max-sm:h-full'>
          <div className="swiperSlide relative h-80 w-full flex items-center justify-center max-sm:h-full">
                <div className="overlayVircle h-48 w-48 rounded-full -translate-x-[50%] -translate-y-[50%] bg-fontColor absolute top-0 left-0">
                </div>
                <i class="ri-double-quotes-l absolute top-0 left-0 p-4 text-white text-5xl"></i>
                <div className="test absolute h-4/5 w-4/5 flex items-center justify-center flex-col gap-4 max-sm:pt-24 max-sm:h-full">
                    <div className="star">
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                    </div>
                    <div className="content">
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam harum facere assumenda? Blanditiis tempora laboriosam nostrum iste iure aliquid excepturi cupiditate eligendi culpa, ut praesentium quod, a voluptatibus adipisci nobis.</p>
                    </div>
                    <div className="reviewer self-end">
                        <p>- Robert Mathew</p>
                    </div>
                </div>
          </div>
        </SwiperSlide>
        
        
      </Swiper>
    </div>
  )
}

export default TestimonialSwiper;
