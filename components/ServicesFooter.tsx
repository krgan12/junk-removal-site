import React from 'react'
import SocialIcons_Home from './SocialIcons_Home'

function ServicesFooter() {
  return (
    <footer className='mt-32 w-full bg-white'>

      <div className='mx-auto max-w-[1250px] text-center'>

        <h2 className='text-[30px] tracking-[-1.5px] font-normal text-[#222]'>
          JunkBGone - Junk Removal Service
        </h2>

        <div className='mt-8 flex justify-center gap-10'>
          
          <a href="/" className='text-[18px] text-[#102356] transition-colors duration-300 hover:text-[#db2424]'>Home</a>

          <a href="/contact-us" className='text-[18px] text-[#102356] transition-colors duration-300 hover:text-[#db2424]'>Contact</a>

        </div>

         <div className='mt-12 border-t border-[#dddddd]'></div>


        <div className='mt-10 flex justify-center'>

          <SocialIcons_Home />

        </div>

       
        <p className='py-8 text-[16px] text-[#666]'>© 2026 JunkBGone - Junk Removal Service</p>

      </div>

    </footer>
  )
}

export default ServicesFooter