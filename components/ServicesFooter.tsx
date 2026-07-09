import React from 'react'
import SocialIcons_Home from './SocialIcons_Home'

function ServicesFooter() {
  return (
    <footer className='mt-32 w-full bg-white'>

      <div className='mx-auto max-w-[1250px]'>

        <div className='flex items-center justify-between'>

        <a href="/"><h2 className='text-[30px] tracking-[-1.5px] font-normal text-[#222]'>
          JunkBGone - Junk Removal Service
        </h2></a>

        {/* <div className='mt-8 flex justify-center gap-10'> */}
        <div className='flex gap-10'>
          
          <a href="/" className='text-[18px] text-[#536aa1] transition-colors duration-300 hover:text-[#db2424]'>Home</a>

          <a href="/contact-us" className='text-[18px] text-[#536aa1] transition-colors duration-300 hover:text-[#db2424]'>Contact</a>

        </div>

      </div>

        <div className='mt-6 border-t border-[#dddddd]'></div>


        <div className='mt-6 mb-10 flex items-center justify-between'>

          <p className='py-8 pt-0 text-[17.5px] text-[#666]'>© 2026 JunkBGone - Junk Removal Service</p>

          <SocialIcons_Home />

        </div>


      </div>
      

    </footer>
  )
}

export default ServicesFooter