'use client'
import { useState } from "react"

export default function PageServer() {

    const [email, setEmail] = useState("");
    const [emailTouched, setEmailTouched] = useState(false);

    return (
        <div>

         <form className='mt-10 flex w-full flex-col max-w-[610px]'>

            <div className='mb-7'>
              
              <label className='mb-2 block text-[18px] font-normal text-[black]' htmlFor="">Name</label>
              <input placeholder='Enter your name' className='h-[50px] w-full border rounded-sm border-[#dddddd] px-4 text-[17px] placeholder:text-[#777] outline-none transition-colors focus:border-[#bdbdbd]' />

              <label className="mb-2 mt-4 block text-[18px]">E-mail <span className='text-red-600'>*</span></label>
              <input
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               onBlur={() => setEmailTouched(true)}
               placeholder='Enter your email' 
               className='h-[50px] w-full border rounded-sm border-[#dddddd] px-4 text-[17px] placeholder:text-[#777] outline-none transition-colors focus:border-[#bdbdbd]' />

              {emailTouched && email.trim() === "" && (
                <p className='mt-2 text-[16px] text-red-600'>This field cannot be empty.</p>
              )}

              <label className="mb-2 mt-4 block text-[18px]">Phone</label>
              <input placeholder='Enter your phone number' className='h-[50px] w-full border rounded-sm border-[#dddddd] px-4 text-[17px] placeholder:text-[#777] outline-none transition-colors focus:border-[#bdbdbd]' />

              <label className="mb-2 mt-4 block text-[18px]">Message</label>
              <textarea rows={2} placeholder='Enter your message' className='min-h-[45px] w-full
               border rounded-sm border-[#dddddd] px-4 py-3 text-[17px] placeholder:text-[#777]
              outline-none transition-colors focus:border-[#bdbdbd]'>

              </textarea>

              <div className='mt-4 h-[55px] w-[304px] border border-[#d9d9d9] bg-white'></div>

              {/* <div className="h-captcha" data-sitekey="e38e91b6-41b8-443c-85b0-3490aa4ab272"></div>
              <script src="https://js.hcaptcha.com/1/api.js" async defer></script>
             */}
              
              <button type='submit' className='hover:cursor-pointer mt-6 h-[48px] w-[120px] bg-[#e32726] text-[18px] font-normal text-white transition-colors hover:bg-[#cf201f]'>Submit</button>
            </div>
           
          </form>
        </div>
    )
}