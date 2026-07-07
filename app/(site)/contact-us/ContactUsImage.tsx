import React from 'react'
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { contactUsQuery } from "@/sanity/queries/contactUs";
import { urlFor } from "@/sanity/lib/image";

async function ContactUsImage() {

  const contactUsData = await client.fetch(contactUsQuery);

  // SEARCH BY CUSTOM NAME

  const selectedImage = contactUsData.find(
    (item: any) => item.name === "Image1"
  );

  console.log("Sanity Images: ", contactUsData);
  console.log("Selected Image: ", selectedImage)

  const imageUrl = selectedImage?.image?urlFor(selectedImage.image).width(1000).url() : "";

  return (
    <>
     <Image 
      src={imageUrl} 
      alt={contactUsData?.name || "Contact Image"} 
      fill 
      className='object-cover' />
    </>
  )
}

export default ContactUsImage