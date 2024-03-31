import React from 'react'
import softratelogo from "../../../assests/images/About/softratelogo.png"
import Partnercard from './Partnercard'

const Partners = () => {
    const parterlist = [
        {
            id:1,
            img:softratelogo,
            partnerReference:"Technology Partner",
            partnerName:"Softrate Technologies",
        },
        {
            id:2,
            img:softratelogo,
            partnerReference:"Knowledge Partner",
            partnerName:"Curious Wings",
        },{
            id:3,
            img:softratelogo,
            partnerReference:"Education Partner",
            partnerName:"Softrate Technologies",
        }
    ]
  return (
    <div className='partners h-full w-full'>
        <div className="partnersCotnainer h-full w-11/12 mx-auto flex flex-col rounded-3xl gap-4 items-center justify-center border-t shadow-2xl p-8">
            <h1 className='text-3xl self-start font-bold text-primary p-2 border-l-2 border-primary'>GREENWAYS PARTNERS</h1>
            <div className="partnersList h-full w-full flex justify-center gap-8 py-4">
                {
                    parterlist.map(parterDetails=>(
                        <Partnercard key={parterDetails.id} partnerDetails={parterDetails} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Partners;