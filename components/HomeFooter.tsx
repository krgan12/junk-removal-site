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

    
    // <footer className='bg-black'>
    // <div className='mx-auto max-w-full h-[1200px] px-10 py-20'>
    // <div className='flex justify-between items-end gap-8'>
    
    //   <div className='relative h-[130px] w-[125px] overflow-hidden rounded-sm'>
        
    //     <Image 
    //       src={imageUrl}
    //       alt={""}
    //       fill
    //       className='object-cover'
    //     />
    //   </div>
    //     <div className=''>

    //       <h2 className='text-[25px] max-w-[350px] tracking-[1.1px] leading-8 font-normal text-[white]'>JunkBGone - Junk Removal Service</h2>

    //   </div>
    //   <div>
    //     <p className='text-[18px] font-normal text-[#666]'>From Oakville to Brantford to Niagara Region</p>
    //     <a href="tel:+1-905-781-4046" className='hover:cursor-pointer'><p className='text-[18px] font-normal text-[#666]'>905-781-4046</p></a>
    //     <p className='text-[18px] font-normal underline text-[#355ca8]'>junkbgoneoakville@gmail.com</p>
    //   </div>

    //     </div>

       
    //   </div>
    // </footer>

    <footer className='bg-black'>

      <div className='mx-auto max-w-full px-10 py-20'>

        <div className='flex justify-between items-end gap-8'>

          
          <div className='flex flex-col relative'>

            <div className='flex items-center gap-6'>

              <Image 
                src={imageUrl}
                alt={""}
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

            <p className='pl-50 mt-5.5 text-[#666] text-[17.5px] font-normal'>© 2026 JunkBGone - Junk Removal Service</p>

          </div>

          
          <div>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default HomeFooter