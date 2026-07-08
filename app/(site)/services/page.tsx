import ServiceCard from '@/components/ServiceCard';
import ServicesFooter from '@/components/ServicesFooter'
import React from 'react'

function page() {

  const HEADER_OFFSET = 17.4;

  return (
    <div className='min-h-screen'>

        <section id='quote' className='mx-auto max-w-[760px]' style={{paddingTop: `${HEADER_OFFSET}vh`}}>
          
          {/* <div className='mx-auto text-center'>
             
              <p className="uppercase items-center justify-center tracking-[5px] text-[15px] font-medium text-[#6f6f6f]">
                Whatever you need gone, we'll take care of it. Professional, insured, and always on time.
              </p>

              <h1 className='text-center text-[44px] leading-[2] font-normal tracking-[-1px] text-[#222]'>Our Junk Removal Services</h1>

          </div> */}

        </section> 

        <div className='mx-auto text-center max-w-[800px] relative mr-115'>
             
              <p className="uppercase items-center justify-center tracking-[4.5px] text-[15px] font-medium text-[#6f6f6f]">
                Whatever you need gone, we'll take care of it. Professional, insured, and always on time.
              </p>

              <h1 className='mt-4 text-[44px] leading-[1.15] tracking-[-1.55px] font-normal'>Our Junk Removal Services</h1>

              <p className='mt-5 text-[20px] text-[black]'>From single-item pickups to full estate cleanouts, JunkBGone handles it all. Fast, affordable, and eco-friendly junk removal across the Greater Oakville area.</p>

              <ServiceCard serviceName='House_Junk_Removal'/>
              <></>
              <></>
              <></>
        </div>

        <ServicesFooter />
    </div>
  )
}

export default page