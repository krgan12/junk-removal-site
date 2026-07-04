import React from 'react'
import SocialIcons_Home from './SocialIcons_Home'

function HomeFooter() {
  return (
    <div className='bg-black'>
      
      {/* Small Image - from back-end (named: Footer) */}

      <img src="" alt='text'/>

      {/* Company name (Left Hand Side) */}

      <h3 className='text-white'>JunkBGone - Junk Removal Service</h3>

      {/* Area Text - div section */}

      <div>
        <h3 className='text-gray-500'>From Oakville to Mississauga to
          Brantford to Niagara Region
          <br />
          905-781-4046
        </h3>
        <a href="mailto:junkbgoneoakville@gmail.com"><h3 className='text-blue-500 underline hover:cursor-pointer'>junkbgoneoakville@gmail.com</h3></a>
      </div>

      { /* Social icons */}
      s

      <div className='bg-white'>
        <SocialIcons_Home />
      </div>

      {/* Company name */}
      <p className='text-gray-500'>© 2026 JunkBGone - Junk Removal Service</p>
    </div>
  )
}

export default HomeFooter