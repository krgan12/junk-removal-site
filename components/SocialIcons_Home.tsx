import { Facebook, House, HouseIcon, HousePlugIcon, HousePlus, HouseWifi, HouseWifiIcon, Instagram, InstagramIcon, Youtube } from 'lucide-react'
import React from 'react'
import { BsHouse, BsHouseAdd, BsHouseCheckFill, BsYelp } from 'react-icons/bs'
import { FaFacebook, FaGoogle, FaTiktok } from 'react-icons/fa'
import { SiNextdoor } from 'react-icons/si'

function SocialIcons_Home() {
  return (
    <div>
        <a className='bg-white' href="">
            <Facebook />
        </a>
        <a className='bg-white' href="">
            <InstagramIcon  />
        </a>
        <a className='bg-white' href="">
            <FaTiktok />
        </a>
        <a className='bg-white' href="">
            <BsHouse />
        </a>
        <a className='bg-white' href="">
            <BsYelp />
        </a>
        <a className='bg-white' href="">
            <FaGoogle />
        </a>
    </div>
  )
}

export default SocialIcons_Home