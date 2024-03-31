import React from 'react'
import TestimonialSwiper from './TestimonialSwiper'

const Testimonial = () => {
  return (
    <div className='testimonial h-[500px] w-full  flex items-center justify-around py-4'>
      <div className="testimonialContainer h-full w-11/12 mx-auto flex flex-col gap-6 items-center justify-center rounded-[20px]">
        <h1 className='text-primary text-4xl font-bold tracking-wider w-11/12'>TESTIMONIALS</h1>
        <TestimonialSwiper />
      </div>
    </div>
  )
}

export default Testimonial;