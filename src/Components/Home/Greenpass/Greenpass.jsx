import React from 'react'
import greenpassimg from '../../../assests/images/Home/greencard.jpg'
const Greenpass = () => {
  return (
    <div className='Greenpass h-[400px] w-full flex items-center justify-center py-6 my-10 max-sm:h-[700px]'>
        <div className="greenpassContainer h-full w-11/12 flex items-center justify-between max-sm:flex-col">
            {/* greenpass left section */}
            <div className="greenPassLeft h-full w-1/2 flex flex-col gap-4 justify-center max-sm:w-full">
                <h1 className='text-5xl font-bold border-b py-2'>
                    Introducing  the New Green Pass
                </h1>
                <p className='text-md'>
                    Your key to a dynamic co-working experience! Green Pass provides exclusive access to our premium co-working spaces, fostering a collaborative and innovative work environment. To avail the Green Pass, simply visit our website or contact our dedicated help desk team helpdesk@greenwaysbusinesspark.com . Elevate your work experience with Green Pass at Greenways Business Park – where productivity meets convenience!
                </p>
            </div>
            {/* greenpass right section */}
            <div className="greenPassRight h-full w-1/2 relative flex items-center justify-center max-sm:w-full max-sm:h-full">
                <img className='h-full w-full object-contain absolute z-10 max-sm:h-64 max-sm:w-64' src={greenpassimg} alt="green-pass-id" />
                <div className="greenBox absolute h-16 w-16 border-fontColor rounded-3xl border-2 -translate-x-[120px] -translate-y-[90px]"></div>
                <div className="greenBox absolute h-16 w-16 border-fontColor rounded-3xl border-2 translate-x-[120px] translate-y-[90px]"></div>
            </div>
        </div>
    </div>
  )
}

export default Greenpass;