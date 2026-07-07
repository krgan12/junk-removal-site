import ServicesFooter from '@/components/ServicesFooter'
import React from 'react'

function page() {

  const HEADER_OFFSET = 17.4;

  return (
    <div className='min-h-screen'>
        <section id='quote' className='mx-auto max-w-[850px]' style={{paddingTop: `${HEADER_OFFSET}vh`}}>
          <div className='mx-auto flex flex-col items-center justify-center'>
              <p className="uppercase items-center justify-center tracking-[5px] text-[15px] font-medium text-[#6f6f6f]">
                Whatever you need gone, we'll take care of it. Professional, insured, and always on time.
              </p>

              <h1 className='text-center text-[44px] leading-[2] font-normal tracking-[-1px] text-[#222]'>Our Junk Removal Services</h1>
          </div>
        </section> 

        <ServicesFooter />
    </div>
  )
}

export default page