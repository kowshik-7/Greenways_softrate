import React from 'react'
const PriceTag = ({priceData}) => {
  return (
    <div className="priceCard h-[450px] border-[3.5px] font-jost border-gray-300 w-80 p-6 flex flex-col justify-between gap-5 bg-gray-100 rounded-[20px]
    max-md:w-[45%] max-md:h-full max-md:justify-between
    max-sm:w-full">
        <div className="priceHead">
            <div className="priceImg h-fit w-fit rounded-[20px] overflow-hidden border-[2px] border-gray-300">
                <img className='max-md:h-16 max-md:w-16' src={priceData.priceImg} alt="" />
            </div>
        </div>
        <div className="priceContent h-full">
            <h1 className='text-2xl py-1 font-semibold border-b-2 max-sm:text-md'>{priceData.priceName}</h1>
            <p className='text-mg py-1 max-sm:text-sm'>{priceData.priceDesc}</p>
        </div>
        <div className="priceAmount">
            <p className='font-semibold'>From  {priceData.priceAmt}<span className='text-mg text-red-500'>/month</span></p>
        </div>
    </div>
  )
}

export default PriceTag;