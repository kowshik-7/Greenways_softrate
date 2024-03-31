import React from 'react'
import "./Header.css"
import { useState } from 'react'


const Header = () => {
  
  const [toggle, setToggle] = useState(false);

  function toggleMenu () {
    setToggle(!toggle);
  }

  return (
    <>
      <div className='header fixed h-[60px] w-full flex items-center justify-between px-12 bg-white z-50 rounded-b-[20px] max-md:hidden'>
          <div className="navLogo">
          <a href="/"><h1 className='text-3xl font-bold'>GREENWAYS</h1></a>
          </div>
          <div className="navContent flex gap-4">
              <a href="/about">About</a>
              <a href="/blog">Blog</a>
              <a href="/virtualoffice">Virtual Office</a>
              <a href="/referal">Referal</a>
              <a href="/contact">Contact</a>
              <p>+91 9876543210</p>
          </div>
      </div>
      <div className='headermob fixed h-fit w-full flex flex-col items-center px-12 max-sm:px-6 z-20 bg-white rounded-b-[20px] md:hidden'>
          <div className="nav h-[60px] w-full flex justify-between items-center z-20 ">
            <div className="navLogo">
              <a href="/"><h1 className='text-3xl font-bold max-sm:text-xl'>GREENWAYS</h1></a>
            </div>
              <button ><i onClick={toggleMenu} class="ri-menu-4-line text-2xl"></i></button>
          </div>
          <div className={toggle === true ? "navContent absolute top-[60px] overflow-hidden h-fit w-full py-12 text-white bg-primary rounded-b-2xl flex flex-col items-center gap-4" : 
          "navContent absolute top-[0px] overflow-hidden h-0 w-full bg-primary rounded-b-2xl flex flex-col items-center gap-4"}>
              <a href="/about">About phn</a>
              <a href="/blog">Blog</a>
              <a href="/referal">Referal</a>
              <a href="/contact">Contact</a>
              <p>+91 9876543210</p>
          </div>
      </div>

    </>
  )
}

export default Header;