import React from 'react'
import PricingMapData from './PricingMapData'
import PriceTag from './PriceTag'


const Pricing = () => {
  return (
    <div className='pricing bg-primary h-full w-full flex flex-col items-center justify-center'>
        <div className="priceHead h-full w-11/12 flex justify-center">
          <h1 className='text-5xl font-bold border-white border-b-2 w-fit text-white py-2'>Get in Touch</h1>
        </div>
        <div className="priceContent h-full w-11/12 mx-auto flex justify-around py-10 gap-4 flex-wrap">
            {/* price card 1 */}
            {
                PricingMapData.map(priceData=>(
                    <PriceTag key={priceData.id} priceData={priceData}/>
                ))
            }
        </div>
    </div>
  )
}

export default Pricing;