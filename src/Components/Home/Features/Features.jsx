import React from 'react'

const Features = () => {
  return (
    <div className='features h-full w-full'>
        <div className="featureContent py-4 mx-auto w-11/12 flex items-center justify-center gap-5 flex-wrap">
            {/* <div className="featureHead h-fit">
                <h1 className='font-medium text-3xl tracking-wide'>FEATURES</h1>
                <div className='h-[2px] w-full mt-2 bg-slate-900 '></div>
            </div> */}
            <div className="featureFlex w-full flex items-center justify-center gap-20">
                <div className="featureCard flex flex-col items-center gap-1">
                    <div className="h-28 w-28 border rounded-[20px] bg-black flex items-center justify-center">
                        <i className="text-white text-4xl ri-sofa-line"></i>
                    </div>
                    <p className='text-xl'>Features</p>     
                </div>
                
                <div className="featureCard flex flex-col items-center gap-1">
                    <div className="featureCard h-28 w-28 border rounded-[20px] bg-black flex items-center justify-center">
                        <i className="text-white text-4xl ri-home-wifi-line"></i>
                    </div>
                    <p className='text-xl'>Features</p>     
                </div>

                <div className="featureCard flex flex-col items-center gap-1">
                    <div className="featureCard h-28 w-28 border rounded-[20px] bg-black flex items-center justify-center">
                        <i className="text-white text-4xl ri-space-ship-line"></i>
                    </div>
                    <p className='text-xl'>Features</p>
                </div>

                <div className="featureCard flex flex-col items-center gap-1">
                    <div className="featureCard h-28 w-28 border rounded-[20px] bg-black flex items-center justify-center">
                        <i className="text-white text-4xl ri-home-wifi-line"></i>
                    </div>
                    <p className='text-xl'>Features</p>     
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features;