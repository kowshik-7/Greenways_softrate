import React from 'react'
import icon1 from "../../../assests/images/Virtualoffice/icon/registration.png"
import icon2 from "../../../assests/images/Virtualoffice/icon/gst.png"
import icon3 from "../../../assests/images/Virtualoffice/icon/businessadress.png"
import icon4 from "../../../assests/images/Virtualoffice/icon/mailaddres.png"
import icon5 from "../../../assests/images/Virtualoffice/icon/reception.png"
import icon6 from "../../../assests/images/Virtualoffice/icon/desk.png"

const Virtualcard = () => {
  return (
    <div className='virtual-card h-full w-full py-8'>
        <div className="virtualCard relative h-[400px] w-[70%] mx-auto rounded-3xl border border-primary shadow-xl">
            {/* <div className="bgImgWrap absolute top-0 left-0 h-full w-full flex items-end -z-10">
                <img className='h-[90%] w-[100%] object-contain object-left' src={cardbgimg} alt="" />
            </div> */}
            <div className="virtualCardContent h-full w-full flex">
                <div className="virtualCardLeft h-full w-[70%] flex flex-col p-6">
                    <h1 className='text-3xl font-bold text-primary border-b w-fit py-1'>Join Virtual Office</h1>
                    <div className="virtualCardLefticon h-full w-full flex gap-4 flex-wrap p-4">
                        <div className="virtualIcon flex flex-col gap-2 justify-center items-center">
                            <img className='h-8 w-8' src={icon1} alt="" />
                            <p className='w-1/2 text-center'>Company Registration</p>
                        </div>
                        <div className="virtualIcon flex flex-col justify-center items-center">
                            <img className='h-10 w-10 drop-shadow-2xl' src={icon2} alt="" />
                            <p className='w-1/2 text-center'>Company Registration</p>
                        </div>
                        <div className="virtualIcon flex flex-col justify-center items-center">
                            <img className='h-10 w-10' src={icon3} alt="" />
                            <p className='w-1/2 text-center'>Company Registration</p>
                        </div>
                        <div className="virtualIcon flex flex-col justify-center items-center">
                            <img className='h-10 w-10' src={icon4} alt="" />
                            <p className='w-1/2 text-center'>Company Registration</p>
                        </div>
                        <div className="virtualIcon flex flex-col justify-center items-center">
                            <img className='h-10 w-10' src={icon5} alt="" />
                            <p className='w-1/2 text-center'>Company Registration</p>
                        </div>
                        <div className="virtualIcon flex flex-col justify-center items-center">
                            <img className='h-10 w-10' src={icon6} alt="" />
                            <p className='w-1/2 text-center'>Company Registration</p>
                        </div>
                    </div>
                </div>
                <div className="virtualCardRight h-full w-[50%] p-6">
                    <div className="virtualForm h-full w-full border rounded-2xl shadow-xl">
                        <form className='h-full w-full flex flex-col items-center justify-center gap-4'>
                            <h1 className='text-2xl font-bold tracking-wide text-primary border-b py-1'>Register</h1>
                            <div className="virtualName border-b py-2 flex gap-3">
                                <i class="ri-user-3-line text-xl"></i>
                                <input className='text-lg outline-none' type="text" placeholder='name' />
                            </div>
                            
                            <div className="virtualName border-b py-2 flex gap-3">
                                <i class="ri-mail-unread-line text-xl"></i>
                                <input className='text-lg outline-none' type="text" placeholder='mail' />
                            </div>
                            
                            <div className="virtualName border-b py-2 flex gap-3">
                                <i class="ri-phone-line text-xl"></i>
                                <input className='text-lg outline-none' type="text" placeholder='phone no' />
                            </div>

                            <div className="virtualButton">
                                <button className='px-6 py-2 border rounded-full'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Virtualcard;