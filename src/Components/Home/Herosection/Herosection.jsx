import React from 'react'
import HeroImg from "../../../assests/images/Home/herosection.jpg"

const Herosection = () => {
  return (
    <div className='heroSection h-[700px] w-full flex justify-center items-center font-jost max-sm:h-full'>
        <div className="Herocontent relative pt-[100px] w-11/12 h-full flex flex-col gap-2 flex-wrap max-sm:flex-row">
          <div className="heroLeft h-full w-[50%] flex flex-col justify-center gap-2 border-2 border-primary pl-6 pr-12 rounded-[30px] 
          max-sm:w-full max-sm:py-4">
              <p className='text-4xl font-bold border-b-2 w-fit max-sm:text-3xl'>GREENWAYS</p>
              <h1 className='font-semibold text-6xl text-primary max-sm:text-5xl'>
                The way to your business success
              </h1>
              <p className='text-lg w-4/5 leading-tight'>Greenways Business Park cultivates success with top-tier facilities and networking, fostering productivity, creativity, and sustainable growth. Committed to excellence, we drive success stories and a culture of shared achievement in our diverse community.</p>
              <a href="/contact" className='px-8 py-2 w-fit border-2 rounded-full max-sm:my-2'>CONTACT US</a>
          </div>
          
          <div className="heroRight h-full w-[50%] flex items-center justify-center max-sm:w-full">
              <div className="heroImg relative h-full w-[100%] flex justify-center items-center rounded-[30px]">
                  <img className='h-full -translate-x-10 w-[120%] object-cover rounded-[30px] z-10 shadow-[box-shadow: 0px 13px 18px -8px rgba(0,0,0,0.1)] 
                  max-sm:w-full max-sm:translate-x-0'
                   src={HeroImg} alt="coworking-space-with-good-interior-and-ambiance" />
                   {/* <div className="imgBorder absolute border-2 border-primary h-full w-full rounded-[30px] translate-x-4 translate-y-4"></div> */}
                   {/* <div className="imgBorder absolute border-2 border-primary h-full w-full rounded-[30px] -translate-x-4 -translate-y-4"></div> */}
              </div>
          </div>
        </div>
    </div>
  )
}

export default Herosection;