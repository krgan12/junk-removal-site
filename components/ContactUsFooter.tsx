import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { contactUsQuery } from '@/sanity/queries/contactUs'
import Image from 'next/image';
import React from 'react'

async function ContactUsFooter() {

  const FooterData = await client.fetch(contactUsQuery);

  const selectedImage = FooterData.find(
    (item: any) => item.name === "Image2"
  )

  const imageUrl = selectedImage?.image?urlFor(selectedImage.image).width(1000).url() : "";

  return (
    <div className='w-full'>
      <div className='relative'>
        <Image 
          src={imageUrl} 
          alt=''
          fill
          className='object-cover' 
        />
       <h2 className='mt-5 ml-2 text-[40px] text-white leading-[1.15] font-medium tracking-[-1px]
          text-[#222]'>
          Ready to Clear Your Space?
        </h2>
         
        <p className='leading-8 text-[18px] text-white font-normal max-w-[550px]'>Contact Junk2Go today for fast, affordable junk removal in Hamilton and beyond! Call/text us at 289-456-8076 or email junk2gohamilton@gmail.com</p>
      </div>
      <div className='bg-[#131416] items-center h-[212px] relative'>
        <p className='text-[#727374] text-[18px] text-center relative top-40 '>© 2026 JunkBGone - Junk Removal Service</p>
      </div>
    </div>
  )
}

export default ContactUsFooter