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
            &nbsp;
            <span className='font-semibold text-[#50659b] underline'>
              <a href="tel:+1-905-905-781-4046" target='_blank'>905-781-4046</a>
            </span>
            &nbsp;
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
        <ServicesFooter />
      </section>
    </div>
  )
}

export default page