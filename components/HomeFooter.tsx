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
    // <div className='bg-black'>

    //   <Image 
    //     src={imageUrl}
    //     alt={homeData?.name}
    //     fill 
    //     className='object-contain'
    //   />

    //   <br /><br />

    //   <h3 className='text-white'>JunkBGone - Junk Removal Service</h3>

    //   <SocialIcons_Home />

    //   <div>
    //     <h3 className='text-gray-500'>From Oakville to Mississauga to
    //       Brantford to Niagara Region
    //       <br />
    //       905-781-4046
    //     </h3>
    //     <a href="mailto:junkbgoneoakville@gmail.com"><h3 className='text-blue-500 underline hover:cursor-pointer'>junkbgoneoakville@gmail.com</h3></a>
    //   </div>

    //   <p className='text-gray-500'>© 2026 JunkBGone - Junk Removal Service</p>
    // </div>
    <footer>
    <div className='mx-auto max-w-full h-[1200px]'>
    {/* <div className='flex items-end gap-8 bg-black'> */}
    <div className='flex justify-between items-end bg-black gap-8'>

      <div className='relative h-[95px] w-[105px] overflow-hidden rounded-sm'>
        
        <Image 
          src={imageUrl}
          alt={""}
          fill
          className='object-cover'
        />

        {/* Company Name */}
        <div className='relative'>
          <h2 className='text-[42px] tracking-[1px] leading-none font-normal text-[red]'>JunkBGone</h2>

          <p className='mt-2 text-[22px] text-[#666]'>Junk Removal Service</p>
        </div>


      </div>

      <div className='space-y-4 text-center items-start'>
        <p className='text-[18px] font-normal text-[#666]'>From Oakville to Brantford to Niagara Region</p>
        <a href="tel:+1-905-781-4046" className='hover:cursor-pointer'><p className='text-[18px] font-normal text-[#666]'>905-781-4046</p></a>
        <p className='text-[18px] font-normal underline text-[#355ca8]'>junkbgoneoakville@gmail.com</p>
      </div>

        </div>
      </div>
    </footer>
  )
}

export default HomeFooter