import React from 'react'
import { useState } from 'react'
import referimg from "../../../assests/images/Home/referal.png"
import "./Refer.css"

const Refer = () => {
  
  const [page,setPage] = useState(false);

  function changePAge() {
    setPage(!page);
  }

  return (
    <div className='refer h-full w-full py-[80px] max-sm:my-6'>
        <div className="referContainer h-full w-11/12 mx-auto flex">
            {/* refer top */}
            <div className="referTop h-[500px] px-2 w-2/3 flex bg-primary rounded-l-[30px] 
            max-sm:px-1 max-sm:flex-col max-sm:h-full">
              
              <div className="referLeft h-full p-8 w-1/2 text-white flex flex-col justify-center 
              max-sm:w-full max-sm:p-4">
                  <h1 className='text-4xl w-fit font-bold text-white'>GREENWAYS</h1>
                  <h2 className='text-3xl font-semibold border-b py-1 w-fit'>Referral Program</h2>
                  <p>Refer your freinds for more exciting offers.</p>
                  <ul className='py-4'>
                    <li className='flex gap-2 text-xl'>
                      <i class="ri-add-line font-semibold"></i>
                      <p>
                        You Get 5% Of The Monthly Membership Fee
                      </p>
                    </li>
                    <li className='flex gap-2 text-xl'>
                      <i class="ri-add-line font-semibold"></i>
                      <p>
                      Your Referral Gets 15% Discount on Private Office Cabin
                      </p>
                    </li>
                  </ul>
              </div>
              
              <div className="referRight h-full w-1/2 max-sm:w-full">
                  <img className='h-full w-full object-scale-down p-10 max-sm:w-full max-sm:h-52 max-sm:mx-auto' src={referimg} alt="" />
              </div>
            </div>
            
            {/* refer bottom */}
            <div className="referBottom h-[500px] w-1/3 border-2 border-primary rounded-r-[30px]">
                <form action="#" className='flex flex-col h-full w-full pt-8'>
                  <div className='flex h-full w-full relative items-center justify-center'>
                    {/* Refer Left */}
                    <div className={page === false ? "referBottomLeft absolute h-fit w-full flex flex-col justify-center p-8 fadein" : "hidden"}>
                        <h1 className='text-3xl font-semibold py-1 text-primary border-b border-primary max-sm:text-xl'>Your Details</h1>
                        <div className='flex flex-col gap-6 py-6 w-full'>
                          
                          <div className="yourName relative w-full">
                            <input className='inputField w-full py-2 border-b  outline-none' type="text" required=" " />
                            <p className='inputName absolute top-0 left-0 py-2 text-lg text-gray-500'>Your Name</p>
                          </div>
                          
                          <div className="yourName relative w-full">
                            <input className='inputField w-full py-2 border-b  outline-none' type="email" required=" " />
                            <p className='inputName absolute top-0 left-0 py-2 text-lg text-gray-500'>Your Email</p>
                          </div>
                          
                          <div className="yourName relative w-full">
                            <input className='inputField w-full py-2 border-b  outline-none' type="number" required=" " />
                            <p className='inputName absolute top-0 left-0 py-2 text-lg text-gray-500'>Your Number</p>
                          </div>
                        
                        </div>
                      </div>
                      {/* Refer Right */}
                      <div className={page === true ? "referBottomLeft absolute h-fit w-full flex flex-col justify-center p-8 fadein" : "hidden"}>
                        <h1 className='text-3xl font-semibold py-1 text-primary border-b border-primary max-sm:text-xl'>Referral Details</h1>
                        <div className='flex flex-col gap-6 py-6 w-full'>
                          
                          <div className="yourName relative w-full">
                            <input className='inputField w-full py-2 border-b  outline-none' type="text" required=" " />
                            <p className='inputName absolute top-0 left-0 py-2 text-lg text-gray-500'>Referal Name</p>
                          </div>
                          
                          <div className="yourName relative w-full">
                            <input className='inputField w-full py-2 border-b  outline-none' type="email" required=" " />
                            <p className='inputName absolute top-0 left-0 py-2 text-lg text-gray-500'>Referal Email</p>
                          </div>
                          
                          <div className="yourName relative w-full">
                            <input className='inputField w-full py-2 border-b  outline-none' type="number" required=" " />
                            <p className='inputName absolute top-0 left-0 py-2 text-lg text-gray-500'>Referal Number</p>
                          </div>
                        
                        </div>
                      </div>
                  
                  </div>
                  
                  <div className='w-full h-fit pb-4 flex gap-2 items-center justify-center'>
                    <p onClick={changePAge} className={page === false ? 'py-2 px-6 bg-primary text-white w-fit text-xl tracking-wide font-semibold rounded-[30px] fadein cursor-pointer' : "hidden"}>Next</p>
                    <p onClick={changePAge} className={page === true ? 'py-2 px-6 bg-primary text-white w-fit text-xl tracking-wide font-semibold rounded-[30px] fadein cursor-pointer' : "hidden"}>back</p>
                    <p className={page === true ? 'py-2 px-6 bg-primary text-white w-fit text-xl tracking-wide font-semibold rounded-[30px] fadein cursor-pointer' : "hidden"}>SUBMIT</p>
                  </div>
                
                </form>
            </div>
        </div>
    </div>
  )
}

export default Refer;