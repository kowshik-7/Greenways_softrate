import React from 'react'
import icon1 from '../../../assests/images/Home/icon/icon1.png'

const ItemCard = ({item}) => {
  return (
    <div className="Items h-84 w-[20%] border-[1px] bg-gray-50 border-gray-100 rounded-[20px] p-5 flex flex-col  gap-2 
    max-md:w-[45%] max-md:gap-0
    max-sm:text-sm">
        <div className="itemIcon h-16 w-16 bg-gray-200 rounded-[20px]
        max-sm:h-10 max-sm:w-10 max-sm:rounded-[10px]">
            <img className='h-full w-full' src={icon1} alt="" />
        </div>
        <div className="itemContent space-y-2 max-sm:py-2">
            <h1 className='text-fontColor text-xl font-regular border-t py-1 max-sm:text-sm'>{item.name}</h1>
            {/* <p className='text-fontColor leading-[1.2]'>{item.desc}</p> */}
        </div>
    </div>
  )
}

export default ItemCard;