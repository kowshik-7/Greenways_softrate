import React from 'react'
import blogimg from "../../../assests/images/Home/herosection.jpg"

const Blogcontainer = () => {
  return (
    <div className='blogContainer h-full w-full py-8'>
        <div className="blogCardContainer h-full w-11/12 mx-auto grid grid-cols-1 gap-6">
            {/* Blog Card */}
            <div className="blogCard relative h-[500px] w-full  p-2 mx-auto flex flex-col gap-2 justify-center">
                <img className='h-full w-[55%] object-cover opacity-80 py-1 rounded-2xl' src={blogimg} alt="" />
                <div className="blogwrap absolute h-full w-1/2 right-0 rounded-2xl bg-primary shadow-2xl p-8 flex flex-col gap-2 justify-center">
                    <p className='text-sm text-white font-thin border-b py-2'>Posted on : Feb 23 , 2022</p>
                    <h1 className='font-semibold text-white text-4xl' >Why a product designer cannot do the work of a UX writer</h1>
                    {/* <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nisi numquam laudantium dolorem est, accusantium quae rem illum facere consectetur nobis reprehenderit odio deleniti voluptas reiciendis atque dolor enim eaque?</p> */}
                    <a className='w-fit px-4 py-2 text-white border border-white rounded-3xl' href="/blog1">Know More</a>
                </div>
            </div>

            {/* Blog Card */}
            <div className="blogCard relative h-[500px] w-full  p-2 mx-auto flex flex-col gap-2 justify-center">
                <img className='h-full w-[55%] object-cover opacity-80 py-1 rounded-2xl' src={blogimg} alt="" />
                <div className="blogwrap absolute h-full w-1/2 right-0 rounded-2xl bg-primary shadow-2xl p-8 flex flex-col gap-2 justify-center">
                    <p className='text-sm text-white font-thin border-b py-2'>Posted on : Feb 23 , 2022</p>
                    <h1 className='font-semibold text-white text-4xl' >Why a product designer cannot do the work of a UX writer</h1>
                    {/* <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nisi numquam laudantium dolorem est, accusantium quae rem illum facere consectetur nobis reprehenderit odio deleniti voluptas reiciendis atque dolor enim eaque?</p> */}
                    <a className='w-fit px-4 py-2 text-white border border-white rounded-3xl' href="/blog1  ">Know More</a>
                </div>
            </div>

            {/* blog card */}
            <div className="blogCard relative h-[500px] w-full  p-2 mx-auto flex flex-col gap-2 justify-center">
                <img className='h-full w-[55%] object-cover opacity-80 py-1 rounded-2xl' src={blogimg} alt="" />
                <div className="blogwrap absolute h-full w-1/2 right-0 rounded-2xl bg-primary shadow-2xl p-8 flex flex-col gap-2 justify-center">
                    <p className='text-sm text-white font-thin border-b py-2'>Posted on : Feb 23 , 2022</p>
                    <h1 className='font-semibold text-white text-4xl' >Why a product designer cannot do the work of a UX writer</h1>
                    {/* <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nisi numquam laudantium dolorem est, accusantium quae rem illum facere consectetur nobis reprehenderit odio deleniti voluptas reiciendis atque dolor enim eaque?</p> */}
                    <a className='w-fit px-4 py-2 text-white border border-white rounded-3xl' href="/blog1  ">Know More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogcontainer;