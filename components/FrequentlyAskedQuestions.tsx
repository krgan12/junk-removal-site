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
        <div className='border-t border-[#e5e5e5] py-7'>
            <div className='flex items-center justify-between'>
                {faqs.map((item, index) => (
                <button onClick={()=> setOpenIndex(index)} className=''>
                    {/* {openIndex === index ? <ChevronUp size={20}/> :
                    
                        <ChevronDown size={20} />
                    
                    } */}
                    {item.question}
                    <ChevronDown className={`transition-transform duration-300
                    ${openIndex === index ? "rotate-180": "rotate-0"} 

                    `}
                        
                    />
                    {openIndex === index && (
                        <p className='mt-6 max-w-[640px] text-[17px] leading-9 text-[#666]'>
                            {item.answer}
                        </p>
                    )}
                    {/* {item.answer} */}
                </button>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FrequentlyAskedQuestions