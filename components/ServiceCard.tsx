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

   const paragraph = [];

   const bullets = [];

   let bulletMode = false;

   console.log("Services Data: ", servicesData);

   console.log("Selected Service: ", selectedService);
   console.log("Image URL: ", imageUrl);
   console.log("Description: ", description);
   console.log("Lines: ", lines)

   for (const line of lines) {

    if (
        line.includes("Furniture") ||
        line.includes("Drywall") ||
        line.includes("Full house") ||
        line.includes("Full disconnection") 
    ) {
        bulletMode = true;
    }

    if (bulletMode) {
        bullets.push(line);
    }
    else {
        paragraph.push(line);
    }
   }

  return (
    <>  

        <Image 
            src={imageUrl}
            alt={servicesData?.name || "Placeholder"}
            // fill
            width={1000}
            height={1000}
            className='object-cover'
        />

        <p className='mt-5 text-[17px] leading-8 text-[#666]'>
            {paragraph.join(" ")}
        </p>

        <ul className='mt-8 space-y-4 pl-6 list-disc text-[17px] leading-8 text-[#666]'>
            
            {bullets.map((item) => (
                <li key={item}>
                    {item}
                </li>
            ))}

        </ul>
    </>
  )
}

export default ServiceCard