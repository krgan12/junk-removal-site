import ServicesFooter from '@/components/ServicesFooter'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import { serviceAreaQuery } from '@/sanity/queries/serviceArea'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

async function page() {

  const serviceAreaData = await client.fetch(serviceAreaQuery);

  // SEARCH BY CUSTOM NAME
  const selectedImage = serviceAreaData.find(
    (item: any) => item.location == "Image1"
  )

  const imageUrl = selectedImage?.image?urlFor(selectedImage.image).width(1000).url() : "";

  const TOP_DIVIDER = 22;

  const SECTION_DIVIDER = 25;
  
  return (
    <div>
      <section id='quote' className='justify-between items-center' style={{paddingTop: `${TOP_DIVIDER}vh`}}>
        
        <div className='max-w-[620px] ml-61 relative'>
          
          <p className='uppercase tracking-[5px] text-[15px] font-medium text-[#6f6f6f]'>Oakville's Most Affordable Junk Removal</p>
          <h1 className='mt-5 max-w-[680px] text-[60px] leading-[1.18] tracking-[1.5px] font-normal text-[#222]'>
            Junk Removal Service Areas — Oakville & Surrounding Communities
          </h1>

          <p className='mt-6 text-[33px] leading-11 text-[#222] max-w-[500px]'>
            Locally owned. Lowest prices. Same-day pickup available. 
            Let Junk2Go handle the heavy lifting.
          </p>

          <p className='mt-4 text-[17px] leading-7 text-[#666] max-w-[546.5px] font-medium'>
            Not sure if we service your area?
            Give us a call at 
            {" "}
            <span className='font-semibold text-[#50659b] underline'>
              <a href="tel:+1-905-905-781-4046" target='_blank'>905-781-4046</a>
            </span>
            {" "}
            or text us a photo of what you need removed for a fast, free quote.
            We're open 7 days a week and ready to help.
          </p>

          <div className='mt-10 flex gap-5.5'>
            <Link href="/contact-us">
              <button className='h-[50px] w-[235px] hover:cursor-pointer bg-[#da2424] text-white text-[17px] transition-colors 
              hover:bg-[#cf201f]'>Get your Quote Today!</button>
            </Link>
            <Link href="/contact-us">
              <button className='h-[50px] w-[180px] bg-[#102355] hover:cursor-pointer text-white text-[17px] transition-colors
              hover:bg-[#162454]'>Free Estimates</button>
            </Link>
            
          </div>

        </div>

        <div className='relative ml-229 mt-[-720px] h-[700px] w-[580px] overflow-hidden'>
        <Image 
          src={imageUrl}
          alt={selectedImage || "Service Area Img"}
          fill
          className='object-cover'
        />
        </div>

        <section id='quote' className='mx-auto max-w-[1350px] justify-between items-center' style={{paddingTop: `${SECTION_DIVIDER}vh`}}>

          <div className='flex flex-col items-center'>

            <p className='uppercase tracking-[5px] text-[16.7px] font-medium text-[#6f6f6f]'>
              Same Day Junk Removal. JunkBGone is the go-to junk removal service.
            </p>

            <h2 className='mt-5 max-w-[2000px] text-center text-[48px] leading-[1.12] 
            tracking-[-1.3px] font-normal text-[#222]'>Service Areas - Oakville & Surrounding Communities</h2>

            <p className='mt-7 max-w-[950px] text-center text-[18px] leading-8 text-[#666]'>
              Not sure if we service your area? Give us a call at
              {" "}<span className='font-semibold text-[#50659b] underline'>905-781-4046</span>{" "}
              or text us a photo of what you need removed for a fast, free quote. 
              We're open 7 days a week and ready to help.
            </p>

            <div className='mt-10 grid grid-cols-3 gap-8'>

              <div className='flex flex-col items-center bg-[#f7f7f7] px-10 py-12 max-h-[390px] max-w-[420px]'>

                <a href="/"><h3 className='hover:text-[#7e8db4] text-[23px] leading-tight text-[#566b9e] underline font-black'>Junk Removal Oakville</h3></a>

                <p className='mt-6 text-center text-[17px] leading-7 text-[#666] text-center max-w-[250px]'>
                  We serve all Oakville neighbourhoods including Downtown Oakville, South Oakville, Mid Oakville, and North Oakville. 
                  Whether it's a garage cleanout, appliance removal, or full estate cleanout; we got you covered.
                </p>

              </div>

              <div className='flex flex-col items-center bg-[#f7f7f7] px-10 py-12 max-h-[390px] max-w-[420px]'>

                <a href="/"><h3 className='hover:text-[#7e8db4] text-[23px] leading-tight text-[#566b9e] underline font-black'>Junk Removal Stoney Creek</h3></a>

                <p className='mt-6 text-center text-[17px] leading-7 text-[#666] text-center max-w-[300px]'>
                  Need junk removal in Stoney Creek? We handle household junk, furniture, appliances, yard waste, and construction debris for homes and businesses across Stoney Creek and the surrounding area.
                </p>

              </div>

              <div className='flex flex-col items-center bg-[#f7f7f7] px-10 py-12 max-h-[390px] max-w-[420px]'>

                <a href="/"><h3 className='hover:text-[#7e8db4] text-[23px] leading-tight text-[#566b9e] underline font-black'>Junk Removal Ancaster</h3></a>

                <p className='mt-6 text-center text-[17px] leading-7 text-[#666] text-center'>
                  From basement cleanouts to hot tub removal, JunkBGone provides affordable junk removal in Ancaster. Our team is insured, on time, and ready to haul away whatever you need gone.
                </p>

              </div>       


            </div>

            <div className='mt-10 gap-5 flex'>
                  <Link href="/contact-us">
                      <button className='h-[46px] w-[165px] bg-[#da2424] text-white text-[16px] transition-colors hover:bg-[#cf201f]
                      hover:cursor-pointer'
                      >Get a Quote
                    </button>
                  </Link>
                  <Link href="/contact-us">
                    <button className='h-[46px] w-[165px] bg-[#102355] text-white text-[16px] transition-colors hover:bg-[#162454]
                      hover:cursor-pointer'
                    >Free Estimates</button>
                  </Link>
            </div>

            <div className='mt-30 grid grid-cols-3 gap-8'>

              <div className='flex flex-col items-center bg-[#f7f7f7] px-10 py-12 max-h-[390px] max-w-[420px]'>

                <a href="/"><h3 className='hover:text-[#7e8db4] text-[23px] leading-tight text-[#566b9e] underline font-black'>Junk Removal Dundas</h3></a>

                <p className='mt-6 text-center text-[17px] leading-7 text-[#666] text-center max-w-[250px]'>
                  Serving Dundas for residential and commercial junk removal. Whether you're renovating, downsizing, or just decluttering, we'll take care of the heavy lifting and disposal.
                </p>

              </div>

              <div className='flex flex-col items-center bg-[#f7f7f7] px-10 py-12 max-h-[390px] max-w-[420px]'>

                <a href="/"><h3 className='hover:text-[#7e8db4] text-[23px] leading-tight text-[#566b9e] underline font-black'>Junk Removal Burlington</h3></a>

                <p className='mt-6 text-center text-[17px] leading-7 text-[#666] text-center max-w-[300px]'>
                  JunkBGone is proud to offer junk removal services in Burlington. Furniture removal, garbage removal, estate cleanouts, construction waste — we handle it all at the best prices in the area.
                </p>

              </div>

              <div className='flex flex-col items-center bg-[#f7f7f7] px-10 py-12 max-h-[390px] max-w-[420px]'>

                <a href="/"><h3 className='hover:text-[#7e8db4] text-[23px] leading-tight text-[#566b9e] underline font-black'>Junk Removal Hamilton</h3></a>

                <p className='mt-6 text-center text-[17px] leading-7 text-[#666] text-center'>
                  Looking for junk removal in Hamilton? We provide fast, eco-friendly service for homeowners and businesses. From single-item pickups to full property cleanouts, no job is too big or too small.
                </p>

              </div>       


            </div>

            <div className='mt-30 grid grid-cols-3 gap-8'>

              <div className='flex flex-col items-center bg-[#f7f7f7] px-10 py-12 max-h-[390px] max-w-[420px]'>

                <a href="/"><h3 className='hover:text-[#7e8db4] text-[23px] leading-tight text-[#566b9e] underline font-black'>Junk Removal Milton</h3></a>

                <p className='mt-6 text-center text-[17px] leading-7 text-[#666] text-center max-w-[250px]'>
                  Our junk removal service extends to Milton and the surrounding area. We remove furniture, appliances, electronics, yard waste, renovation debris, and more — with flexible scheduling that works around you.
                </p>

              </div>

              <div className='flex flex-col items-center bg-[#f7f7f7] px-10 py-12 max-h-[390px] max-w-[420px]'>

                <a href="/"><h3 className='hover:text-[#7e8db4] text-[23px] leading-tight text-[#566b9e] underline font-black'>Junk Removal Brantford</h3></a>

                <p className='mt-6 text-center text-[17px] leading-7 text-[#666] text-center max-w-[300px]'>
                  Junk2Go serves Brantford with the same fast, affordable service we're known for in Hamilton. Household junk, construction debris, estate cleanouts, and commercial jobs — all handled professionally.
                </p>

              </div>

              <div className='flex flex-col items-center bg-[#f7f7f7] px-10 py-12 max-h-[390px] max-w-[420px]'>

                <a href="/"><h3 className='hover:text-[#7e8db4] text-[23px] leading-tight text-[#566b9e] underline font-black'>Junk Removal Caledonia</h3></a>

                <p className='mt-6 text-center text-[17px] leading-7 text-[#666] text-center'>
                  Need junk removed in Caledonia? We offer pickup and hauling for residential and commercial properties. Tell us what you need gone and we'll give you a free, no-obligation quote.
                </p>

              </div>       


            </div>

            <div className='mt-30 grid grid-cols-3 gap-8'>

              <div className='flex flex-col items-center bg-[#f7f7f7] px-10 py-12 max-h-[390px] max-w-[420px]'>

                <a href="/"><h3 className='hover:text-[#7e8db4] text-[23px] leading-tight text-[#566b9e] underline font-black'>Junk Removal Cayuga</h3></a>

                <p className='mt-6 text-center text-[17px] leading-7 text-[#666] text-center max-w-[250px]'>
                  We're happy to serve Cayuga and Haldimand County for junk removal, dump runs, and property cleanouts. Same great service, same affordable pricing.
                </p>

              </div>

              <div className='flex flex-col items-center bg-[#f7f7f7] px-10 py-12 max-h-[390px] max-w-[420px]'>

                <a href="/"><h3 className='hover:text-[#7e8db4] text-[23px] leading-tight text-[#50659b] underline font-black text-center'>Junk Removal Grimsby, Lincoln & Beamsville</h3></a>

                <p className='mt-6 text-center text-[17px] leading-7 text-[#666] text-center max-w-[300px]'>
                  JunkBGone provides junk removal in Grimsby, Lincoln and Beamsville for everything from single items to full truckloads. Construction waste, appliances, furniture, yard debris — we take it all.
                </p>

              </div>

              <div className='flex flex-col items-center bg-[#f7f7f7] px-10 py-12 max-h-[390px] max-w-[420px]'>

                <a href="/"><h3 className='hover:text-[#7e8db4] text-[23px] leading-tight text-[#50659b] underline font-black text-center'>Junk Removal St. Catharines, Thorold & Wellend</h3></a>

                <p className='mt-6 text-center text-[17px] leading-7 text-[#666] text-center'>
                  Our service area reaches into St. Catharines and the Niagara Region. Whether you need a hot tub removed, a garage cleaned out, or construction debris hauled away, Junk2Go has you covered.
                </p>

              </div>       


            </div>

             <div className='mt-15 gap-5 flex'>
                  <Link href="/contact-us">
                      <button className='h-[46px] w-[165px] bg-[#da2424] text-white text-[16px] transition-colors hover:bg-[#cf201f]
                      hover:cursor-pointer'
                      >Book Today!
                    </button>
                  </Link>
                  <Link href="/contact-us">
                    <button className='h-[46px] w-[165px] bg-[#102355] text-white text-[16px] transition-colors hover:bg-[#162454]
                      hover:cursor-pointer'
                    >Free Estimates</button>
                  </Link>
            </div>

          </div>

        </section>

        <ServicesFooter />
      </section>
    </div>
  )
}

export default page