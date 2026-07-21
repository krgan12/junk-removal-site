'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import HCaptcha from '@hcaptcha/react-hcaptcha';

function ContactUsClient({
  image,
  footer
}: {
  image: React.ReactNode,
  footer: React.ReactNode
}) {

  const HEADER_OFFSET = 17.4;

  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const SERVICES_OFFSET = 10;

  const AREAS_OFFSET = 10;

  const GOOGLE_REVS_OFFSET = 12;

  const FOOTER_OFFSET = 1;

  const scrollTo = () => {
    const element = document.getElementById("quote");

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className='min-h-screen'>

        <section id='quote' className='mx-auto max-w-[610px]' style={{paddingTop: `${HEADER_OFFSET}vh`}}>
        </section>

        <div className='mx-auto flex flex-col items-center'>
          
          <h1 className='text-center text-[44px] leading-[1.15] font-normal tracking-[-1px] text-[#222]'>JunkBGone Junk Removal - Get a free Quote</h1>
          
          <p className='mt-6 text-center max-w-[850px] text-[19px] leading-8.5 text-[#222]'>Get a free junk removal quote! Tell us your city, nearest intersection, and what you need removed
          (example: 1 couch, 10 bags). You can also text the details to: <span className='underline cursor-pointer text-[#4d69b3]'>905-781-4046.</span>
          </p>
          <form className='mt-10 flex w-full flex-col max-w-[610px]'>

            <div className='mb-7'>
              
              <label className='mb-2 block text-[16px] font-normal text-[black]' htmlFor="">Name</label>
              <input placeholder='Enter your name' className='h-[50px] w-full border rounded-sm border-[#dddddd] px-4 text-[16px] placeholder:text-[#777] outline-none transition-colors focus:border-[#bdbdbd]' />

              <label className="mb-2 mt-4 block text-[16px]">E-mail <span className='text-red-600'>*</span></label>
              <input
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               onBlur={() => setEmailTouched(true)}
               placeholder='Enter your email' 
               className='h-[50px] w-full border rounded-sm border-[#dddddd] px-4 text-[16px] placeholder:text-[#777] outline-none transition-colors focus:border-[#bdbdbd]' />

              {emailTouched && email.trim() === "" && (
                <p className='mt-2 text-[16px] text-red-600'>This field cannot be empty.</p>
              )}

              <label className="mb-2 mt-4 block text-[16px]">Phone</label>
              <input placeholder='Enter your phone number' className='h-[50px] w-full border rounded-sm border-[#dddddd] px-4 text-[16px] placeholder:text-[#777] outline-none transition-colors focus:border-[#bdbdbd]' />

              <label className="mb-2 mt-4 block text-[16px]">Message</label>
              <textarea rows={2} placeholder='Enter your message' className='min-h-[45px] w-full
               border rounded-sm border-[#dddddd] px-4 py-3 text-[16px] placeholder:text-[#777]
              outline-none transition-colors focus:border-[#bdbdbd]'>

              </textarea>

              {/* <div className='mt-4 h-[55px] w-[304px] border border-[#d9d9d9] bg-white'></div> */}
                 <div className="mt-4">
                    <HCaptcha sitekey={`${process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}`}
                      onVerify={(token) => {console.log(token); setCaptchaToken(token)}}
                    />
                  </div>
              
              <button type='submit' className='hover:cursor-pointer mt-6 h-[48px] w-[120px] bg-[#e32726] text-[18px] font-normal text-white transition-colors hover:bg-[#cf201f]'>Submit</button>
            </div>
           
          </form>
        </div>

        <section className='mx-auto max-w-[1250px]' style={{ paddingTop: `${SERVICES_OFFSET}vh`}}>

        </section>

        <div className='mx-auto flex max-w-[1250px] justify-between gap-20'>
          
          <div className='max-w-[640px]'>
              <p className="uppercase tracking-[5px] text-[15px] font-medium text-[#6f6f6f]">
                Affordable Waste Removal Services
              </p>

              <h2 className='mt-5 text-[45px] leading-[1.15] font-md tracking-[-1px]
              text-[#222]'>
                Flexible Services for your Specific Needs
              </h2>

              <p className='mt-5 text-[18px] leading-9 text-[#666]'>
                <p className='text-[#767676] font-bold'>
                  Our Services:
                </p>
                {/* Leading-7 or ADJUST later on */}
                <p className='leading-7.5 max-w-[550px]'>Household waste removal, furniture removal, construction cleanup, dump runs, yard waste removal, garbage removal, hot tub removal, piano removal, concrete disposal, clean fill (dirt) disposal, asphalt disposal, roofing disposal, debris removal, bulk landscape material delivery, and more.</p>
              </p>
              
              <p className='text-[17.5px] mt-6 font-semibold text-[#767676]'>Flexible options to fit your needs:</p>
              <ul className='mt-6 space-y-5 pl-6 text-[17.5px] text-[#767676] list-disc'>
                
                <li className=''>
                  <span className='font-bold'>Small to Medium Loads:</span> 6.5 ft pickup truck bed
                </li>

                <li className=''>
                 <span className='font-bold'>Medium to Large Loads:</span> 7x12 ft dump trailer or 12–40 yard bins
                </li>

                <li className=''>
                  <span className='font-bold'>DIY Option:</span> Ask about our Junk Removal Bin rentals
                </li>
              </ul>

              <div className='mt-9 flex gap-5'>
                
                <button onClick={scrollTo} className='h-[50px] w-[155px] bg-[#db2424] text-[18px] font-medium text-white 
                transition-colors hover:bg-[#cf201f] hover:cursor-pointer'>Free Quote!</button>

                <a href="/"><button className='h-[50px] w-[155px] bg-[#102356] text-[18px] font-medium text-white transition-colors hover:bg-[#162454] hover:cursor-pointer'>Learn More</button></a>

              </div>

          </div>

          <div className='relative mt-19 h-[440px] w-[800px] overflow-hidden'>
            {image}
          </div>

        </div>

        <section className='mx-auto max-w-[1250px] ml-58' style={{ paddingTop: `${AREAS_OFFSET}vh`}}>

          <div className='flex flex-col items-center'>
            
            <p className="uppercase ml-7 tracking-[5px] text-[15px] font-medium text-[#6f6f6f] text-center">
              Garbage Removal Services in Oakville & SURROUNDING AREAS
            </p>

            <h2 className='mt-5 ml-2 text-[45px] leading-[1.15] font-medium tracking-[-1px]
              text-[#222]'>
                Junk Removal Oakville | JunkBGone
            </h2>

            <div className='mt-5 max-w-[1000px] space-y-8 font-normal'>
              
              <p className='text-center text-[17px] leading-7.5 text-[#666]'>Looking for professional waste removal in Oakville and surrounding areas? JunkBGone offers fast, dependable junk hauling services for residential and commercial properties throughout Hamilton and nearby areas. Whether you need furniture disposal, construction debris removal, yard waste cleanup, or a full property cleanout, our experienced team is ready to handle it all.</p>
              <p className='text-center text-[17px] leading-7.5 text-[#666]'>We provide flexible scheduling, competitive rates, and eco-friendly disposal practices, including recycling and donating reusable items whenever possible. Contact us today for a free junk removal estimate in Hamilton and discover how easy it is to reclaim your space.</p>
              <p className='text-center text-[17px] leading-7.5 text-[#666]'>We proudly serve the Greater Oakville area, including Oakville, Brantford, Caledonia, St. Catharines, and everywhere in between.</p>

            </div>
          </div>

        </section>


        {/* <section className='mx-auto max-w-[1250px]' style={{ paddingTop: `${GOOGLE_REVS_OFFSET}vh`}}>
            <div className="elfsight-app-b894e184-964e-4b52-a5b2-ceeb63ff37bb" data-elfsight-app-lazy></div>
        </section>

        <script src="https://elfsightcdn.com/platform.js" async></script> */}

         <section className='mx-auto max-w-[1250px]' style={{ paddingTop: `${GOOGLE_REVS_OFFSET}vh`}}>
            <div className="elfsight-app-b894e184-964e-4b52-a5b2-ceeb63ff37bb" data-elfsight-app-lazy></div>
        </section>

        <script src="https://elfsightcdn.com/platform.js" async></script>

        <section className='mx-auto max-w-[1250px]' style={{ paddingTop: `${FOOTER_OFFSET}vh`}}>

        </section>

        {/* <ContactUsFooter /> */}
        {footer}
    </div>
  )
}

export default ContactUsClient