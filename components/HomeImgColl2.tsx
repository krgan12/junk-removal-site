import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { homeQuery } from '@/sanity/queries/home'
import { homeGalQuery } from '@/sanity/queries/homeGallery';
import Image from 'next/image';
import React from 'react'

async function HomeImgColl2() {

    const homeData = await client.fetch(homeGalQuery);

    const gallery = homeData.find(
        (item: any) => item.name === "Images4"
    )

    const images = [...gallery.gallery].reverse();

  return (
    <div className='flex w-full'>
        {images.map((image: any) => (
            <div key={image._key} className='relative flex-1 h-[370px]'>
                <Image 
                    src={urlFor(image).url()}
                    alt={image.name || "Image"}
                    fill
                    className='object-cover'
                />
            </div>
        ))}
    </div>
  )
}

export default HomeImgColl2