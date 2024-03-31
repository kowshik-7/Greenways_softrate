import React from 'react'

const Footer = () => {
  return (
    <div className='footer h-[300px] w-full flex justify-between p-12 bg-primary rounded-t-[30px] flex-wrap max-sm:h-full max-sm:flex-col max-sm:gap-2'>
    {/* footer section 1 */}
        <div className="foot1 h-full w-full flex-1 flex flex-col justify-center text-white gap-2">
          <div className="footLogo">
            <h1 className=' text-3xl font-semibold tracking-wide'>GREENWAYS</h1>
          </div>
          <div className="footLink text-2xl flex gap-2">
            <i class="cursor-pointer ri-instagram-line"></i>
            <i class="cursor-pointer ri-facebook-fill"></i>
            <i class="cursor-pointer ri-whatsapp-line"></i>
            <i class="cursor-pointer ri-linkedin-fill"></i>
          </div>  
        </div>
      {/* footer section 2 */}
        <div className="foot2 h-full w-full flex-1 text-white">
          <div className="foot2Head">
            <h1>Address</h1>
          </div>
          <div className="foot2Content">
            <p>113,<br /> Palandeeswarar Kovil Street,<br /> Mangadu, Chennai, <br />Tamil Nadu 600122</p>
          </div>
        </div>
      {/* footer section 3 */}
        <div className="foot3 h-full w-full flex-1 text-white">
          <div className="footMail">
            <h1>Mail Id</h1>
            <p>greenwaysbusinesspark@gmail.com</p>
            <p>helpdesk@greenwaysbusinesspark.com</p>
          </div>
          <div className="footPhno">
            
          </div>
        </div>
    </div>
  )
}

export default Footer;