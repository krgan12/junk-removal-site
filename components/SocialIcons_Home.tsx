import { Facebook, House, HouseIcon, HousePlugIcon, HousePlus, HouseWifi, HouseWifiIcon, Instagram, InstagramIcon, Youtube } from 'lucide-react'
import { The_Girl_Next_Door } from 'next/font/google'
import React from 'react'
import { BsHouse, BsHouseAdd, BsHouseCheckFill, BsYelp } from 'react-icons/bs'
import { FaFacebook, FaGoogle, FaTiktok } from 'react-icons/fa'
import { SiNextdoor } from 'react-icons/si'

function SocialIcons_Home() {

    const iconStyle = `
    text-[#50659b]
    fill-[#50659b]
    w-[20]
    font-normal
    transition-all 
    duration-300
    hover:-translate-y-1
    `

    const iconStyle2 = `
    text-[#50659b]
    w-[20]
    transition-all 
    duration-300
    hover:text-[#db2424]
    hover:-translate-y-1
    `

    const iconStyle21 = `
    text-[#50659b]
    w-[20]
    transition-all 
    duration-300
    hover:-translate-y-1
    `
     const iconStyle22 = `
    text-[#50659b]
    w-[20]
    transition-all 
    duration-300
    hover:-translate-y-1
    `

    const iconStyle3 = `
    text-[red]
    fill-[red]
    w-[20]
    transition-all 
    duration-300
    hover:text-[#db2424]
    hover:-translate-y-1
    `

  return (
    <div className='flex items-center gap-7'>
        <a className='text-[blue]' href="">
            <Facebook className={`${iconStyle}`}/>
        </a>
        <a className='text-[purple]' href="">
            <InstagramIcon className={iconStyle21} />
        </a>
        <a className='' href="">
            <FaTiktok className={iconStyle22} />
        </a>
        <a className='text-[#de0000]' href="">
            <BsHouse className={iconStyle3}/>
        </a>
        <a className='text-[#de0000]' href="">
            <BsYelp className='hover:-translate-y-1 duration-300 transition-all'/>
        </a>
        <a className='' href="">
            {/* <FaGoogle /> */}
            <svg className='w-[19] mr-20 hover:-translate-y-1 duration-300 transition-all' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
        </a>
    </div>
  )
}

export default SocialIcons_Home