import React from 'react'
import office1 from "../../../assests/images/Virtualoffice/office1.jpg"
import office2 from "../../../assests/images/Virtualoffice/office2.jpg"
import office3 from "../../../assests/images/Virtualoffice/office3.jpg"
import office4 from "../../../assests/images/Virtualoffice/office4.jpg"
import office5 from "../../../assests/images/Virtualoffice/office5.jpg"

const Imagegallery = () => {
  return (
    <div className='image-gallery h-[300px] w-full py-2'>
        <div className="imagegallerycontainer h-full w-full flex">
            <img className='flex-1 h-full w-[100px] object-cover border-r-2' src={office1} alt="" />
            <img className='flex-1 h-full w-[100px] object-cover border-r-2' src={office2} alt="" />
            <img className='flex-1 h-full w-[100px] object-cover border-r-2' src={office3} alt="" />
            <img className='flex-1 h-full w-[100px] object-cover border-r-2' src={office4} alt="" />
            <img className='flex-1 h-full w-[100px] object-cover border-r-2' src={office5} alt="" />
        </div>
    </div>
  )
}

export default Imagegallery;