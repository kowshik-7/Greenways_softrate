import React from 'react'
import "./Faciliteis.css"
import officespace from "../../../assests/images/Home/officespace.png"
import cowork from "../../../assests/images/Home/cowork.png"
import dedicated from "../../../assests/images/Home/dedicatedesk.png"
import virtualdesk from "../../../assests/images/Home/virtualoffice.png"

const Faciliteis = () => {
  return (
    <div className='faciliteis h-full w-full bg-primary py-12'>
        <div className='facilitesContainer h-full w-full flex flex-col gap-10'>
          
          <div className="facilityHead text-primary bg-white rounded-r-xl h-fit  w-[50%] flex flex-col justify-end border-b py-4 px-6">
              <h1 className='text-5xl font-bold py-2'>We <br /> Provide</h1>
              <p className='text-lg leading-[1.2] font-normal bg-white py-4 text-primary rounded-xl'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis rerum reiciendis nam nemo rem cumque illo quasi sunt dolore quaerat facere, debitis ut nihil aliquid veniam, earum perspiciatis recusandae ipsum
              </p>
          </div>
          <div className="facilityCardContianer h-[500px] w-full flex justify-evenly gap-8">
              <div className="facilityCard h-fit border-l border-b pl-2 rounded-es-2xl w-[250px] flex flex-col text-white">
                  <div className="facilityIcon relative h-20 w-20 p-2">
                    <img className='h-full w-full bg-white rounded-xl p-2' src={officespace} alt="" />
                    <div className='absolute h-16 w-16 top-0 left-0 border border-white rounded-lg'></div>
                  </div>
                  <h1 className='text-4xl font-bold'>Office Space</h1>
                  <p className='leading-[1.2] py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora laborum corporis sed minima excepturi odit necessitatibus veritatis nihil consequuntur saepe facere vel consectetur blanditiis assumenda, optio recusandae, voluptates, aperiam perferendis. Explicabo, placeat vel?</p>
              </div>
              
              <div className="facilityCard h-fit pl-2 self-end w-[250px] border-l rounded-es-2xl border-b flex flex-col justify-end text-white">
                  <div className="facilityIcon relative h-20 w-20 p-2">
                    <img className='h-full w-full bg-white rounded-xl p-2' src={cowork} alt="" />
                    <div className='absolute h-16 w-16 top-0 left-0 border border-white rounded-lg'></div>
                  </div>
                  <h1 className='text-4xl font-bold'>Coworking Space</h1>
                  <p className='leading-[1.2] py-4 border-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora laborum corporis sed minima excepturi odit necessitatibus veritatis nihil consequuntur saepe facere vel consectetur blanditiis assumenda, optio recusandae, voluptates, aperiam perferendis. Explicabo, placeat vel?</p>
              </div>
              
              <div className="facilityCard h-fit border-l border-b pl-2 rounded-es-2xl w-[250px] flex flex-col text-white">
                  <div className="facilityIcon relative h-20 w-20 p-2">
                    <img className='h-full w-full bg-white rounded-xl p-2' src={dedicated} alt="" />
                    <div className='absolute h-16 w-16 top-0 left-0 border border-white rounded-lg'></div>
                  </div>
                  <h1 className='text-4xl font-bold'>Dedicated Desk</h1>
                  <p className='leading-[1.2] py-4 border-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora laborum corporis sed minima excepturi odit necessitatibus veritatis nihil consequuntur saepe facere vel consectetur blanditiis assumenda, optio recusandae, voluptates, aperiam perferendis. Explicabo, placeat vel?</p>
              </div>
              
              <div className="facilityCard h-fit w-[250px] border-b border-l pl-2 rounded-es-2xl self-end flex flex-col justify-end text-white pr-2">
                  <div className="facilityIcon relative h-20 w-20 p-2">
                    <img className='h-full w-full bg-white rounded-xl p-2' src={virtualdesk} alt="" />
                    <div className='absolute h-16 w-16 top-0 left-0 border border-white rounded-lg'></div>
                  </div>
                  <h1 className='text-4xl font-bold'>Virtual Office</h1>
                  <p className='leading-[1.2] py-4 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora laborum corporis sed minima excepturi odit necessitatibus veritatis nihil consequuntur saepe facere vel consectetur blanditiis assumenda, optio recusandae, voluptates, aperiam perferendis. Explicabo, placeat vel?</p>
              </div>
          </div>

        </div>
    </div>
  )
}

export default Faciliteis;