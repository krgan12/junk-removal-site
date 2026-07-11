import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { serviceUsQuery } from '@/sanity/queries/serviceUs';
import Image from 'next/image';
import React from 'react'

interface serviceName {
    serviceName: string;
}

async function ServiceCard({serviceName}: serviceName) {


   const servicesData = await client.fetch(serviceUsQuery);

   const selectedService = servicesData.find(
    (item: any) => item.name === serviceName
   )
    
   const imageUrl = selectedService?.image?urlFor(selectedService.image).width(1000).url() : "";

   const description = selectedService?.description ?? "";

   const lines = description.split("\n");

   const formattedServiceName = selectedService?.name?.replace(/_/g, " ").replace(/\b\w/g, (char: string) => char.toUpperCase());

  return (
    // <div className='w-full'>  
    <div className='flex flex-col'>

        {/* <div className='relative overflow-hidden'> */}
        <div className='flex flex-col items-center'>
            <Image 
                src={imageUrl}
                alt={servicesData?.name || "Placeholder"}
                // fill
                width={300}
                height={100}
                // className='object-cover'
                // className='w-[285px] h-[350px]'
                className='w-full h-[340px] object-cover'
            />
        </div>
        

        <h1 className='max-w-[500px] text-center mt-10 text-[26px] leading-[1.1] tracking-[-0.01px] font-normal text-black'>

            {formattedServiceName}
        </h1>
        <div className='mt-5 text-left max-w-[275px]'>
            <p className='text-[17.5px] leading-7.5 text-[#666]'>
                {selectedService.description}
            </p>
        </div>

        <ul className='mt-7.5 space-y-4 ml-[7%] text-[17.5px] leading-7 text-[#666]'>

            {selectedService.features.map((feature: any) => (

                <li className='flex items-start gap-3 relative bottom-3' key={feature}>
                    <span className='mt-[11px] h-[4px] w-[4px] rounded-full bg-[#6b6b6b] shrink-0'></span>

                    <span className='text-[17.5px]'>
                        {feature}
                    </span>
                </li>
            ))}

        </ul>
    </div>
  )
}

export default ServiceCard