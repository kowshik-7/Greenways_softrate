import React from 'react'
import "./FAQ.css";
import FAQTag from './FAQTag';

const FAQ = () => {
    const FAQlist = [
        {
            id:1,
            Question:"some  question ?",
            Answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            id:2,
            Question:"some  question ?",
            Answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            id:3,
            Question:"some  question ?",
            Answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
        
    ];

  return (
    <div className='faq h-full w-full py-16'>
        <div className="faqContainer h-full w-11/12 mx-auto">
            <div className="faqHead py-4">
                <h1 className='text-4xl font-semibold text-text_color border-b py-2'>Frequently Asked Questions ?</h1>
            </div>
            <div className="faqContainer h-full w-11/12 mx-auto flex flex-col gap-2">
                {
                    FAQlist.map(FAQData=>(
                        <FAQTag key={FAQlist.id} FAQdata={FAQData} />
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default FAQ;