import ServicesFooter from '@/components/ServicesFooter'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import { serviceAreaQuery } from '@/sanity/queries/serviceArea'
import Image from 'next/image';
import React from 'react'

async function page() {

  const serviceAreaData = await client.fetch(serviceAreaQuery);

  // SEARCH BY CUSTOM NAME
  const selectedImage = serviceAreaData.find(
    (item: any) => item.location == "Image1"
  )

  const imageUrl = selectedImage?.image?urlFor(selectedImage.image).width(1000).url() : "";
  
  return (
    <div>
        <Image 
          src={imageUrl}
          alt={selectedImage || "Image"}
          fill
          className
        />
        <ServicesFooter />
    </div>
  )
}

export default page