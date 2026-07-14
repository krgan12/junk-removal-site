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
    <div className='bg-black'>
      
      {/* Small Image - from back-end (named: Footer) */}

      <Image 
        src={imageUrl}
        alt={homeData?.name}
        fill 
        className='object-contain'
      />

      {/* Company name (Left Hand Side) */}
      <br /><br />

      <h3 className='text-white'>JunkBGone - Junk Removal Service</h3>

      {/* Area Text - div section */}

      <div>
        <h3 className='text-gray-500'>From Oakville to Mississauga to
          Brantford to Niagara Region
          <br />
          905-781-4046
        </h3>
        <a href="mailto:junkbgoneoakville@gmail.com"><h3 className='text-blue-500 underline hover:cursor-pointer'>junkbgoneoakville@gmail.com</h3></a>
      </div>

      { /* Social icons */}
      s

      <div className='bg-white'>
        <SocialIcons_Home />
      </div>

      {/* Company name */}
      <p className='text-gray-500'>© 2026 JunkBGone - Junk Removal Service</p>
    </div>
  )
}

export default HomeFooter