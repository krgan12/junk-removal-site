'use client'
import { ChevronDown, ChevronUp, ChevronUpIcon } from 'lucide-react';
import React, { useState } from 'react'

function FrequentlyAskedQuestions() {

    const faqs = [
    {
      question: 'How much does junk removal cost?',
      answer: "Pricing depends on the volume and type of items being removed. We offer free, no-obligation quotes — just tell us what you need removed and we'll give you an honest price. Text us a photo at 905-781-4046 for the fastest estimate."
    },
    {
      question: "What items do you accept for removal?",
      answer: "We accept almost everything including furniture, appliances, electronics, construction waste, yard debris, hot tubs, pianos, mattresses, and general household junk. If you're unsure about a specific item, give us a call and we'll let you know."
    },
    {
      question: "How quickly can you come for a pickup?",
      answer: "In many cases, we can offer same-day or next-day service. We're open 7 days a week and do our best to work around your schedule. Contact us to check availability for your area."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve the Greater Oakville area including Oakville, Hamilton, Burlington, Milton, Brantford, Caledonia, Cayuga, Grimsby, Lincoln, St. Catharines, and the wider Niagara Region. If you're unsure whether we cover your area, just ask!"
    }
  ]

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className='mx-auto mt-16 max-w-[760px]'>
       
            {/* <div className='flex items-center justify-between'> */}
            {/* <div className='mt-16'> */}

            <div className='mt-16'>
                
                {faqs.map((item, index) => (

                <div key={index} className='border-t border-[#e6e6e6]'>
                
                <button onClick={()=> setOpenIndex(openIndex === index ? -1 : index)} className='w-full
                flex items-center justify-between py-8 text-left hover:cursor-pointer'>
             
                    <p className='text-[20px] font-normal text-[#222]'>{item.question}</p>
                        <ChevronDown className={`transition-transform duration-300 text-[#b1b1b2]
                        ${openIndex === index ? "rotate-180": "rotate-0"} 

                        `}
                        
                    />
              
                </button>

                    {openIndex === index && (
                        <div className={`overflow-hidden transition-all duration-300
                        ${
                            openIndex === index ? "pb-8" : "pb-0"
                        }
                        `}>
                        
                         <p className='mt-[-5px] max-w-[650px] text-[17px] leading-6.5 text-[#666]'>
                            {item.answer}
                        </p>
                        </div>
                    )}
                <div className='border-b border-[#e6e6e6]'></div>
                </div>
                ))}

                <div className='border-b border-[#e6e6e6]'></div>
                
            </div>
        

    </div>
  )
}

export default FrequentlyAskedQuestions