import React from 'react'
import aboutHeroImg from "../../../assests/images/About/abouthero.jpg"

const Abouthero = () => {
  return (
    <div className='aboutus'>
        <div className="aboutHeroContainer py-[60px] h-[700px] w-full flex">
            <div className="aboutHeroLeft h-full w-1/2 flex flex-col justify-center gap-4 px-16">
                <h1 className='text-5xl font-bold text-primary border-b py-2'>About Us</h1>
                <p className='text-lg font-normal leading-[1.1] text-justify'> 
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam veniam, necessitatibus sit libero repellendus consectetur repudiandae recusandae! Ea veniam quisquam inventore corrupti repellendus reiciendis sequi laudantium perspiciatis consequuntur sed eius vero aut distinctio tempore sit accusantium expedita ipsam nam, explicabo molestias aliquid aperiam quibusdam nihil. Quibusdam tenetur fugit eius animi, nisi eos? Exercitationem consequuntur nobis, mollitia deleniti reprehenderit necessitatibus non expedita quaerat et dolore reiciendis cum odit.
                </p>
                <p className='text-sm text-primary font-semibold'>Search . Book . Work . Live</p>
            </div>
            <div className="aboutHeroRight h-full w-1/2 flex justify-end">
                <div className="aboutImgContainer h-full w-11/12 rounded-es-[200px] overflow-hidden pl-3 pb-3 border-l border-b border-primary">
                    <img className='h-full w-full object-cover rounded-es-[200px] shadow-xl' src={aboutHeroImg} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}


export default Abouthero;