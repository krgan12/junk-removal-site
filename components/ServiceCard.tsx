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

//    console.log("Services Data: ", servicesData);

//    console.log("Selected Service: ", selectedService);
//    console.log("Image URL: ", imageUrl);
//    console.log("Description: ", description);
//    console.log("Lines: ", lines);

   const formattedServiceName = selectedService?.name?.replace(/_/g, " ").replace(/\b\w/g, (char: string) => char.toUpperCase());

  return (
    <>  

        <Image 
            src={imageUrl}
            alt={servicesData?.name || "Placeholder"}
            // fill
            width={250}
            height={400}
            className='object-cover'
        />

        <h1>
            {formattedServiceName}
        </h1>

        <p className='mt-5 text-[17px] leading-8 text-[#666]'>
            {selectedService.description}
        </p>

        <ul className='mt-8 space-y-4 pl-6 list-disc text-[17px] leading-8 text-[#666]'>

            {selectedService.features.map((feature: any) => (
                <li key={feature}>
                    {feature}
                </li>
            ))}

        </ul>
    </>
  )
}

export default ServiceCard