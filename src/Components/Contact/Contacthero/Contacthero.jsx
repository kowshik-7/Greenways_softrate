import React from 'react'
import "./Contacthero.css"  


const Contacthero = () => {
  return (
    <div className='contactHero h-[100vh] w-full relative flex flex-col items-center justify-center'>
        <div className="contactMap h-[60%] w-full absolute top-[60px]">
            <iframe title='contactmap' className='h-full w-full'
             src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15548.484181837517!2d80.1086469!3d13.0279629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261128d84efb7%3A0x9e75042cbd336b6f!2sGreenways%20Business%20Park!5e0!3m2!1sen!2sin!4v1710612940813!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="contactDesc h-full w-full absolute flex items-center justify-center">
            <div className="form h-[60%] w-[60%] mt-44 bg-white rounded-[30px] z-20 flex overflow-hidden">
                {/* contact form left */}
                <form className='h-full w-1/2 p-8 border-r-2 flex flex-col justify-center gap-4' action="post">
                    <h1 className='text-3xl text-primary font-bold tracking-wider'>Reach Us Here</h1>
                    
                    <div className="yourName relative w-full">
                      <input className='inputField w-full py-2 border-b  outline-none' type="text" required=" " />
                      <p className='inputName absolute top-0 left-0 py-2 text-lg text-gray-500'>Your Name</p>
                    </div>
                    
                    <div className="yourName relative w-full">
                      <input className='inputField w-full py-2 border-b  outline-none' type="text" required=" " />
                      <p className='inputName absolute top-0 left-0 py-2 text-lg text-gray-500'>Your Email</p>
                    </div>
                    
                    <div className="yourName relative w-full">
                      <input className='inputField w-full py-2 border-b  outline-none' type="number" required=" " />
                      <p className='inputName absolute top-0 left-0 py-2 text-lg text-gray-500'>Your Number</p>
                    </div>

                    <textarea className='border-2 p-2 rounded-md outline-none' placeholder='Comments' cols="20" rows="10"></textarea>
                    <div className="contactBtn">
                        <button type='submit' className='px-6 py-2 bg-primary text-white font-bold rounded-md hover:opacity-90'>Submit</button>
                    </div>
                </form>
                {/* contact form right */}
                <div className="contactRight h-full w-1/2 overflow-hidden">
                    <img className='h-full w-full object-cover' 
                    src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacthero;