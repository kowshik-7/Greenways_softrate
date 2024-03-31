import React from 'react'
import { useState } from 'react';

const FAQTag = ({FAQdata}) => {
    const  [showAnswer, setShowAnswer] = useState(false);
    function openFaq()  {
        setShowAnswer(!showAnswer)
    };
  return (
    <div>
        <div onClick={openFaq} className="faqTag h-full w-11/12 mx-auto">
            <div className="faqQuestion cursor-pointer h-full w-full border-b px-4 py-2 mx-auto flex justify-between items-center z-10 bg-white">
                <p className='text-md'>{FAQdata.Question}</p>
                <button><i class="ri-arrow-down-s-line"></i></button>
            </div>
            <div className={showAnswer === true ? "faqAnswer opentag h-full w-full border mx-auto overflow-hidden" : "faqAnswer closetag h-0 w-full opacity-0 mx-auto border transition ease-in-out delay-500"}>
                <p>{FAQdata.Answer}</p>
            </div>
        </div>
    </div>
  )
}

export default FAQTag;