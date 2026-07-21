import ServicesFooter from '@/components/ServicesFooter'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import { serviceAreaQuery } from '@/sanity/queries/serviceArea'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

async function page() {

  const serviceAreaData = await client.fetch(serviceAreaQuery);

  // SEARCH BY CUSTOM NAME
  const selectedImage = serviceAreaData.find(
    (item: any) => item.location == "Image1"
  )

  const imageUrl = selectedImage?.image?urlFor(selectedImage.image).width(1000).url() : "";

  const TOP_DIVIDER = 22;

  const SECTION_DIVIDER = 25;
  
  return (
    <div>
      <section id='quote' className='justify-between items-center' style={{paddingTop: `${TOP_DIVIDER}vh`}}>
        
        <div className='max-w-[620px] ml-61 relative'>
          
          <p className='uppercase tracking-[5px] text-[15px] font-medium text-[#6f6f6f]'>Oakville's Most Affordable Junk Removal</p>
          <h1 className='mt-5 max-w-[680px] text-[60px] leading-[1.18] tracking-[1.5px] font-normal text-[#222]'>
            Junk Removal Service Areas — Oakville & Surrounding Communities
          </h1>

          <p className='mt-6 text-[33px] leading-11 text-[#222] max-w-[500px]'>
            Locally owned. Lowest prices. Same-day pickup available. 
            Let Junk2Go handle the heavy lifting.
          </p>

          <p className='mt-4 text-[17px] leading-7 text-[#666] max-w-[546.5px] font-medium'>
            Not sure if we service your area?
            Give us a call at 
            {" "}
            <span className='font-semibold text-[#50659b] underline'>
              <a href="tel:+1-905-905-781-4046" target='_blank'>905-781-4046</a>
            </span>
            {" "}
            or text us a photo of what you need removed for a fast, free quote.
            We're open 7 days a week and ready to help.
          </p>

          <div className='mt-10 flex gap-5.5'>
            <Link href="/contact-us">
              <button className='h-[50px] w-[235px] hover:cursor-pointer bg-[#da2424] text-white text-[17px] transition-colors 
              hover:bg-[#cf201f]'>Get your Quote Today!</button>
            </Link>
            <Link href="/contact-us">
              <button className='h-[50px] w-[180px] bg-[#102355] hover:cursor-pointer text-white text-[17px] transition-colors
              hover:bg-[#162454]'>Free Estimates</button>
            </Link>
            
          </div>

        </div>

        <div className='relative ml-229 mt-[-720px] h-[700px] w-[580px] overflow-hidden'>
        <Image 
          src={imageUrl}
          alt={selectedImage || "Service Area Img"}
          fill
          className='object-cover'
        />
        </div>

        <section id='quote' className='mx-auto max-w-[1350px] justify-between items-center' style={{paddingTop: `${SECTION_DIVIDER}vh`}}>

          <div className='flex flex-col items-center'>

            <p className='uppercase tracking-[5px] text-[16.7px] font-medium text-[#6f6f6f]'>
              Same Day Junk Removal. JunkBGone is the go-to junk removal service.
            </p>

            <h2 className='mt-5 max-w-[2000px] text-center text-[48px] leading-[1.12] 
            tracking-[-1.3px] font-normal text-[#222]'>Service Areas - Oakville & Surrounding Communities</h2>

            <p className='mt-7 max-w-[950px] text-center text-[18px] leading-8 text-[#666]'>
              Not sure if we service your area? Give us a call at
              {" "}<span className='font-semibold text-[#50659b] underline'>905-781-4046</span>{" "}
              or text us a photo of what you need removed for a fast, free quote. 
              We're open 7 days a week and ready to help.
            </p>

            <div className='mt-20 grid grid-cols-3 gap-8'>

              <div className='flex flex-col items-center bg-[#f7f7f7] px-10 py-12 min-h-[360px]'>

                <h3 className='text-[30px] leading-tight text-[#50659b] underline font-semibold'>Junk Removal Oakville</h3>

                <p className='mt-6 text-center text-[17px] leading-8 text-[#666] text-center'>
                  We proudly serve all Oakville neighbourhoods including Downtown Oakville, South Oakville, Mid Oakville, and North Oakville. 
                  Whether it's a garage cleanout, appliance removal, or full estate cleanout, we got you covered.
                </p>

                
              </div>       


            </div>

            <div className='mt-100 gap-10 flex'>
                  <Link href="/contact-us">
                      <button className='h-[46px] w-[165px] bg-[#da2424] text-white text-[16px] transition-colors hover:bg-[#cf201f]
                      hover:cursor-pointer'
                      >Get a Quote
                    </button>
                  </Link>
                  <Link href="/contact-us">
                    <button className='h-[46px] w-[165px] bg-[#da2424] text-white text-[16px] transition-colors hover:bg-[#cf201f]
                      hover:cursor-pointer'
                    >Free Estimates</button>
                  </Link>
                </div>

          </div>

        </section>

        <ServicesFooter />
      </section>
    </div>
  )
}

export default page