import React from 'react'
import "./Aboutus.css"
import cardbg from "../../../assests/images/Virtualoffice/virtualcardbg.png"

const Aboutus = () => {
  return (
    <div className='about mt-12 h-full w-full rounded-t-[30px] bg-primary py-12'>
        {/* <div className="aboutHead w-11/12 mx-auto flex flex-col items-center justify-center py-2 gap-2">
            <h1 className='font-jost text-white text-5xl tracking-widest font-light max-sm:text-4xl'>ABOUT</h1>
            <div className='h-[1px] w-24 bg-white'></div>
        </div> */}
        {/* <div className="aboutContent h-full w-11/12 mx-auto flex items-center justify-center gap-2">
            <div className="aboutLeft h-full w-1/2">
              <h1 className='font-jost text-white text-4xl pr-8 border-b py-2 tracking-widest font-normal max-sm:text-4xl'>ABOUT</h1>
              <div className='h-[1px] w-[20%] bg-white'></div>
              <p className='text-white text-xl w-11/12 leading-[1.1] py-4 
              max-sm:w-full max-sm:px-4 max-sm:text-lg max-sm:leading-[1.2] max-sm:font-normal'>
                At Greenways Business Park, we redefine office spaces, offering a collaborative haven for forward-thinking individuals and teams. Our state-of-the-art facilities foster creativity, productivity, and growth, from stylish workstations to cutting-edge meeting rooms. Embrace work-life balance in our verdant surroundings, where contemporary architecture meets lush greenery. Sustainability is ingrained in every aspect of our business park. Experience seamless networking and community engagement as you connect with like-minded professionals. Established in 2023 by Balaji Rajendran and Rajendran Thirunavukarasu, Greenways Business Park (GBP) is India's premier coworking space network, recognized as the best provider of exclusively managed coworking environments.
              </p>
            </div>
            <div className="aboutRight h-full w-1/2 p-4 flex items-center justify-center">
                <div className="imgContainer relative h-full w-11/12">
                    <div className='aboutBorder absolute top-0 left-0 h-full w-full translate-x-4 -translate-y-4 rounded-[25px] border-2 border-white'></div>
                    <img className='aboutImg h-full w-full object-scale-down rounded-[20px] overflow-hidden' src={AboutImg} alt="" />
                </div>
            </div>
        </div> */}
        <div className="aboutVirtualOfficeContianer h-full w-11/12 mx-auto flex px-8">
            <p className='text-lg inline-block text-justify text-white'>
            <h1 className='text-4xl font-bold px-4 py-2 mr-6 inline-block text-white h-fit w-fit border border rounded-full'>About GREENWAYS</h1>
            At Greenways Business Park, we redefine the traditional office space, offering a collaborative haven for forward-thinking individuals and visionary teams. Our state-of-the-art facilities are tailored to foster creativity, productivity, and growth.  
            <img className='object-cover h-[250px] w-[350px] float-right m-4' src={cardbg} alt="" />
            From stylish and fully-equipped workstations to cutting-edge meeting rooms, every detail is curated to enhance your professional journey.Embrace a new era of work-life balance within our verdant surroundings, where lush greenery intertwines with contemporary architecture, providing a refreshing backdrop for your daily endeavours. Our commitment to sustainability extends beyond aesthetics, with eco-conscious practices woven into the fabric of our business park.
            Experience a seamless blend of networking opportunities and community engagement as you connect with like-minded professionals. Greenways Business Park is more than just a workspace; it's a thriving hub where collaboration thrives, ideas flourish, and success unfolds.
            Greenways Business Park (GBP) is a prominent Indian coworking space network, ranking as the world's best provider of exclusively managed coworking environments, shared offices, and collaborative living spaces. Established in 2023, the company was founded by Balaji Rajendran and Rajendran Thirunavukarasu.
            </p>
        </div>
    </div>
  )
}

export default Aboutus;