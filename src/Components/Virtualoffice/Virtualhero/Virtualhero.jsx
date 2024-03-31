import React from 'react'
import virtualHeroleft from "../../../assests/images/Virtualoffice/virtualoffice.jpg"

const Virtualhero = () => {
  return (
    <div className='virtualhero h-[750px] w-full py-[80px] flex'>
        <div className='h-full w-11/12 mx-auto flex items-center justify-center border-2 border-primary rounded-3xl overflow-hidden'>
            <div className="virtualHeroLeft h-full w-1/2 flex items-end">
                <div className="virtualHeroLeftImg h-[85%] w-[80%] rounded-r-[30%] pr-2 py-2 overflow-hidden border-r-2 border-t-2 shadow-xl border-primary">
                    <img className='h-full w-full object-cover rounded-r-[30%]' src={virtualHeroleft} alt="" />
                </div>
            </div>
            <div className="virtualHeroRight h-full w-1/2 flex justify-end">
                <div className="virtualHeroRightContent h-[90%] w-[90%] shadow-xl flex flex-col justify-center px-28 border-l-2 border-b-2 border-primary rounded-es-[40%]">
                    <h2 className='text-lg text-primary font-bold tracking-wider'>GREENWAYS</h2>
                    <h1 className='text-6xl font-bold pb-1 border-b'>Virtual Office</h1>
                    <p className='text-md leading-[1.2] py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolores voluptatem voluptate, modi deleniti assumenda ullam accusamus nobis! Optio consequuntur error inventore? Nesciunt atque similique blanditiis culpa dolor voluptate, obcaecati vel quis soluta, esse autem nisi aperiam, numquam quos corporis!</p>
                    <p className='mt-4 border h-fit w-fit py-2 px-6 border-primary rounded-full'>Know More</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Virtualhero;