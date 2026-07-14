'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { SetStateAction, useEffect, useState } from 'react';

function Header() {

  const pathname = usePathname();

  return (
    // fixed is RESPONSIBLE for the transparent header
    <div className='fixed z-50 border border-red-500 bg-white w-full h-[12.56%] pt-9 space-x-20 pl-20 items-center text-center'>
      
      <Link href="/" className='hover:cursor-pointer space-x-70 text-[24px] right-10 relative'>
        JunkBGone - Junk Removal Service
      </Link>&nbsp;

      <Link href="/" className={pathname === '/' ? 'text-red-500': 'text-black'}>Home</Link> &nbsp;
      <Link href="/contact-us" className={pathname === '/contact-us' ? 'text-red-500': 'text-black'}>Contact Us</Link>&nbsp;
      <Link href="/service-area" className={pathname === '/service-area' ? 'text-red-500' : 'text-black'}>Service Area</Link>&nbsp;
      <Link href="/services" className={pathname === '/services' ? 'text-red-500' : 'text-black'}>Services</Link> &nbsp;
    </div>
  )
}

export default Header