import React from 'react'
import ItemCard from './ItemCard';
import items from './EssentialMapData';

const Essentials = () => {

  return (
    <div className='essentials h-full w-full bg-primary pt-0 pb-24 rounded-b-[30px] font-jost text-white'>
        <div className="essentaialHead h-full w-11/12 mx-auto py-6 text-center ">
            <h1 className='mx-auto w-fit text-5xl font-light py-2 max-sm:text-4xl'>All workspace essentials taken care of</h1>
            <div className='h-[1px] w-[20%] bg-white mx-auto'></div>
        </div>
        <div className="essentialItems h-full w-11/12 mx-auto py-4 flex justify-center gap-6 flex-wrap">
            {items.map(item =>(
                <ItemCard key={item.id} item={item} />
            ))}
        </div>
    </div>
  )
}

export default Essentials;