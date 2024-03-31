import React from 'react'

const Contactdeatils = () => {
  return (
    <div className='contactDetails h-full w-full'>
        <div className="contactDetailsContainer h-full w-4/5 mx-auto flex items-center justify-center px-14 py-6 border border-primary rounded-2xl">
            <div className='flex-1 h-36 px-2 flex flex-col gap-4'>
                <i class="ri-phone-fill text-5xl text-primary"></i>
                <p>+91 6383612433</p>
            </div>
            <div className='flex-1 px-2 h-36 flex flex-col gap-4 border-l border-primary'>
                <i class="ri-building-2-fill text-5xl text-primary"></i>
                <p>113, Palandeeswarar Kovil Street, <br /> Mangadu, Chennai, <br /> Tamil Nadu 600122</p>
            </div>
            <div className='flex-1 px-2 h-36 flex flex-col gap-4 border-l border-primary'>
                <i class="ri-mail-fill text-5xl text-primary"></i>
                <p>greenwaysbusinesspark@gmail.com</p>
                <p>helpdesk@greenwaysbusinesspark.com</p>
            </div>
        </div>
    </div>
  )
}

export default Contactdeatils;