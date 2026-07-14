import React from 'react'
import SocialIcons_Home from './SocialIcons_Home'
import { homeQuery } from '@/sanity/queries/home'
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

async function HomeFooter() {


  const homeData = await client.fetch(homeQuery);

  // SEARCH BY CUSTOM NAME
  const selectedImage = homeData.find(
    (item: any) => item.name == "Footer"
  )

  const imageUrl = selectedImage?.image?urlFor(selectedImage.image).width(1000).url() : "";

  return (
    <footer className='bg-[#131416]'>

      <div className='mx-auto max-w-full px-10 py-20'>

        <div className='flex justify-between items-end gap-8'>

          
          <div className='flex flex-col relative'>

            <div className='flex items-center gap-6'>

              <Image 
                src={imageUrl}
                alt={selectedImage || "Image"}
                // fill
                height={500}
                width={90}
                className='w-[] h-[] ml-50'
              />

              <h2 className='text-[25px] max-w-[300px] leading-8 font-normal text-[white]'>JunkBGone - Junk Removal Service</h2>

            </div>

            <div className='mt-8 ml-50 relative'>
              <SocialIcons_Home />
            </div>

            <p className='pl-50 mt-5.5 text-[#78797a] text-[17.5px] font-light'>© 2026 JunkBGone - Junk Removal Service</p>
            {/* #68696a */}
          </div>

          
          <div className='flex flex-col relative right-200 bottom-25 leading-8.5'>
            <p className='text-[18px] font-normal leading-7.5 text-[#78797a] max-w-[250px]'>From Oakville to Brantford to Niagara Region</p>
            <a href="tel:+1-905-781-4046"><p className='text-[18px] leading-12 font-normal text-[#78797a]'>905-781-4046</p></a>
            <a href="mailto:junkbgoneoakville@gmail.com"><p className='text-[18px] font-normal underline text-[#6a7aa2]'>junkbgoneoakville@gmail.com</p></a>
          </div>

        </div>

      </div>

    </footer>
  )
}

export default HomeFooter