import ServiceCard from '@/components/ServiceCard';
import ServicesFooter from '@/components/ServicesFooter'
import React from 'react'

function page() {

  const HEADER_OFFSET = 17.4;

  const GOOGLE_REVS_OFFSET = 17.4;

  return (
    <div className='min-h-screen'>

        <section id='quote' className='mx-auto max-w-[760px]' style={{paddingTop: `${HEADER_OFFSET}vh`}}>
          
        </section> 

        {/* <div className='mx-auto text-center max-w-[800px] relative mr-115'> */}
        <div className='mx-auto max-w-[1220px] text-center'>
             <div className='max-w-[900px] relative ml-[18%]'>
              <p className="uppercase items-center justify-center tracking-[4.5px] text-[15px] font-medium text-[#6f6f6f]">
                Whatever you need gone, we'll take care of it. Professional, insured, and always on time.
              </p>
            </div>

              <h1 className='mt-4 relative ml-[15%] text-[44px] leading-[1.15] tracking-[-1.55px] font-normal'>Our Junk Removal Services</h1>

              <p className='mt-5 text-[20px] text-[black] ml-[11%]'>From single-item pickups to full estate cleanouts, JunkBGone handles it all. Fast, affordable, and eco-friendly junk removal across the Greater Oakville area.</p>

            {/* <div className='mt-20 space-y-[32px]'> */}
            {/* <div className='mt-20 grid grid-cols-4 gap-x-6 -ml-34'> */}
            {/* <div className='mt-20 grid grid-cols-4 gap-x-6 relative left-[-100px]'> */}
            <div className='mt-20 grid grid-cols-4 gap-x-6 relative left-[40px]'>

              <div>
                <ServiceCard serviceName='Household_Junk_Removal'/>
              </div>
              <div>
                <ServiceCard serviceName='Construction_Waste_Removal'/>
              </div>
              <div>
                <ServiceCard serviceName='Estate_Cleanouts'/>
              </div>
              <div>
                <ServiceCard serviceName='Hot_Tub_&_Spa_Removal'/>
              </div>

            </div>

            <div className='mt-9 flex gap-6 ml-120'>
                
                <a href="/contact-us"><button className='h-[50px] w-[155px] bg-[#db2424] text-[18px] font-medium text-white 
                transition-colors hover:bg-[#cf201f] hover:cursor-pointer'>Book Today!</button></a>
              
                <a href="/contact-us"><button className='h-[50px] w-[200px] bg-[#102356] text-[18px] font-medium text-white transition-colors hover:bg-[#162454] hover:cursor-pointer'>Request a Quote!</button></a>

              </div>
              
        </div>
        

        {/* <section className='mx-auto max-w-[1250px]' style={{ paddingTop: `${GOOGLE_REVS_OFFSET}vh`}}>
            <div className="elfsight-app-b894e184-964e-4b52-a5b2-ceeb63ff37bb" data-elfsight-app-lazy></div>
        </section> */}

        <script src="https://elfsightcdn.com/platform.js" async></script>
        <ServicesFooter />
    </div>
  )
}

export default page