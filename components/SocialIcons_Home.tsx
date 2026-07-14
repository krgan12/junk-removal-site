import { Facebook, House, HouseIcon, HousePlugIcon, HousePlus, HouseWifi, HouseWifiIcon, Instagram, InstagramIcon, Youtube } from 'lucide-react'
import React from 'react'
import { BsHouse, BsHouseAdd, BsHouseCheckFill, BsYelp } from 'react-icons/bs'
import { FaFacebook, FaGoogle, FaTiktok } from 'react-icons/fa'
import { SiNextdoor } from 'react-icons/si'

function SocialIcons_Home() {

    const iconStyle = `
    text-[#102356]
    text-[26px]
    transition-all 
    duration-300
    hover:text-[#db2424]
    hover:-translate-y-1
    `

  return (
    <div className='flex items-center gap-7'>
        <a className='text-[blue]' href="">
            <Facebook />
        </a>
        <a className='text-[purple]' href="">
            <InstagramIcon  />
        </a>
        <a className='' href="">
            <FaTiktok className='' />
        </a>
        <a className='text-[#de0000]' href="">
            <BsHouse />
        </a>
        <a className='text-[#de0000]' href="">
            <BsYelp />
        </a>
        <a className='' href="">
            <FaGoogle />
        </a>
    </div>
  )
}

export default SocialIcons_Home