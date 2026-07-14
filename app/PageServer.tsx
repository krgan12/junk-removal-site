'use client'
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useState } from "react"

export default function PageServer() {

    const [email, setEmail] = useState("");
    const [emailTouched, setEmailTouched] = useState(false);

    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const [name, setName] = useState("");

    const [phoneNumber, setPhoneNumber] = useState("");

    const [message, setMessage] = useState("");

    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const [error, setError] = useState("");

    // Prevent submitting form until verified via Captcha
   
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      
      e.preventDefault();

      // Check captcha token
      if (!captchaToken) {
        alert("Please complete the captcha");
        return;
      }

      // Check email format
      if (!EMAIL_REGEX.test(email.trim())) {
        alert("Please enter a valid e-mail address.");
        return;
      }

      const response = await fetch('/api/contact', {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          captchaToken,
          email,
          name,
          phoneNumber,
          message
        }),

      })

      const data = await response.json();

      if (!response.ok) {
        alert(data.error);
        return;
      }

      alert("Form submitted")
      window.location.href = "/"

    }


    return (

        <div>

         <form className='mt-10 flex w-full flex-col max-w-[610px]' onSubmit={handleSubmit}>

            <div className='mb-7'>
              
              <label className='mb-2 block text-[18px] font-normal text-[black]' htmlFor="">Name</label>
              <input onChange={(e) => setName(e.target.value)} placeholder='Enter your name' className='h-[50px] w-full border rounded-sm border-[#dddddd] px-4 text-[17px] placeholder:text-[#777] outline-none transition-colors focus:border-[#bdbdbd]' />

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
              <input onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Enter your phone number' className='h-[50px] w-full border rounded-sm border-[#dddddd] px-4 text-[17px] placeholder:text-[#777] outline-none transition-colors focus:border-[#bdbdbd]' />

              <label className="mb-2 mt-4 block text-[18px]">Message</label>
              <textarea onChange={(e) => setMessage(e.target.value)} rows={2} placeholder='Enter your message' className='min-h-[45px] w-full
               border rounded-sm border-[#dddddd] px-4 py-3 text-[17px] placeholder:text-[#777]
              outline-none transition-colors focus:border-[#bdbdbd]'>

              </textarea>

              {/* <div className='mt-4 h-[55px] w-[304px] border border-[#d9d9d9] bg-white'></div> */}

              {/* <div className="h-captcha" data-sitekey="e38e91b6-41b8-443c-85b0-3490aa4ab272"></div>
              <script src="https://js.hcaptcha.com/1/api.js" async defer></script>
             */}
              <div className="mt-4">
                <HCaptcha sitekey={`${process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}`}
                  onVerify={(token) => {setCaptchaToken(token)}}
                  onExpire={() => setCaptchaToken(null)}
                />
              </div>
              
              <button type='submit' className='hover:cursor-pointer mt-6 h-[48px] w-[120px] bg-[#e32726] text-[18px] font-normal text-white transition-colors hover:bg-[#cf201f]'>Submit</button>
            </div>
           
          </form>
        </div>
    )
}