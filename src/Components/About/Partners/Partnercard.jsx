import React from 'react'

const Partnercard = ({ partnerDetails }) => {
  return (
    <div>
        <div className="partnerCard h-[300px] w-[250px] rounded-3xl shadow-xl border ">
            <div className="partnerImg h-3/4 w-full border-b flex items-center justify-center p-4">
                <img className='h-full w-full object-scale-down drop-shadow-2xl' src={partnerDetails.img} alt="" />
            </div>
            <div className="partnerName h-1/4 flex flex-col items-center justify-center">
                <h1 className='text-lg font-semibold '>{partnerDetails.partnerReference}</h1>
                <h2 className='font-light text-base'>{partnerDetails.partnerName}</h2>
            </div>
        </div>
    </div>
  )
}

export default Partnercard;