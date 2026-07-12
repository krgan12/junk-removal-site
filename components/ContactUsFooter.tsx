import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { contactUsQuery } from '@/sanity/queries/contactUs'
import Image from 'next/image';

async function ContactUsFooter() {

  const FooterData = await client.fetch(contactUsQuery);

  const selectedImage = FooterData.find(
    (item: any) => item.name === "Image2"
  )

  const imageUrl = selectedImage?.image?urlFor(selectedImage.image).width(1000).url() : "";

  return (
    <div className='w-full'>
      <div className='relative h-[429px] overflow-hidden'>
        <Image 
          src={imageUrl} 
          alt=''
          fill
          className='object-cover object-[center_100%] -z-10' 
        />
       <div className='absolute inset-0 bg-black/45 z-0'></div>
       <div className='relative left-68 top-22'>
       <h2 className='mt-5 text-[40px] text-white leading-[1.15] font-medium tracking-[-1px]'>
          Ready to Clear Your Space?
        </h2>
         <br />
        <p className='leading-8 text-[18px] text-white max-w-[550px]'>Contact Junk2Go today for fast, affordable junk removal in Oakville and beyond! Call/text us at <a href="tel:+1-905-481-4046" className='underline'>905-781-4046</a> or email <a href='' className='underline'>junkBgoneoakville@gmail.com</a></p>
        <a href="/contact-us"><button className='border rounded-sm border-red-500 mt-10 h-[50px] w-[175px] bg-[#e32726] text-[18px] font-medium text-white transition-colors hover:bg-[#cf201f] hover:cursor-pointer'>Book Now</button></a>
        </div>
      </div>
      <div className='bg-[#131416] items-center h-[212px] relative'>
        <p className='text-[#727374] text-[18px] text-center relative top-40'>© 2026 JunkBGone - Junk Removal Service</p>
      </div>
    </div>
  )
}

export default ContactUsFooter