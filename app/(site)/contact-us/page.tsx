'use client'
import ContactUsFooter from '@/components/ContactUsFooter'
import React, { useState } from 'react'

function page() {

  const HEADER_OFFSET = 17.4;

  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const SERVICES_OFFSET = 14;

  return (
    <div className='min-h-screen'>

        <section className='mx-auto max-w-[610px]' style={{paddingTop: `${HEADER_OFFSET}vh`}}>
        </section>

        {/* <div className='mx-auto flex max-w-[610px] flex-col items-center'> */}
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

              <div className='mt-4 h-[55px] w-[304px] border border-[#d9d9d9] bg-white'></div>
              
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

              <h2 className='mt-5 text-[45px] leading-[1.15] font-normal tracking-[-1px]
              text-[#222]'>
                Flexible Services for your Specific Needs
              </h2>

              <p className='mt-5 text-[18px] leading-9 text-[#666]'>
                {/* <strong className='text-[#555]'>
                  Our Services:
                </strong> */}
                <p className='text-[#767676] font-bold'>
                  Our Services:
                </p>
                {/* Leading-7 or ADJUST later on */}
                <p className='leading-7.5 max-w-[550px]'>Household waste removal, furniture removal, construction cleanup, dump runs, yard waste removal, garbage removal, hot tub removal, piano removal, concrete disposal, clean fill (dirt) disposal, asphalt disposal, roofing disposal, debris removal, bulk landscape material delivery, and more.</p>
              </p>



          </div>

        </div>
        <ContactUsFooter />
        <ContactUsFooter />
        <ContactUsFooter />
        <ContactUsFooter />
        <ContactUsFooter />
        <ContactUsFooter />
        <ContactUsFooter />
        <ContactUsFooter />
        <ContactUsFooter />
        <ContactUsFooter />
        <ContactUsFooter />
        <ContactUsFooter />
        <ContactUsFooter />
        <ContactUsFooter />
        <ContactUsFooter />
        <ContactUsFooter />
        <ContactUsFooter />
        <ContactUsFooter />
        <ContactUsFooter />
        <ContactUsFooter />
        <ContactUsFooter />
        <ContactUsFooter />

      
    </div>
  )
}

export default page