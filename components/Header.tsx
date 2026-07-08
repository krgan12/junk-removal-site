'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { SetStateAction, useEffect, useState } from 'react';

function Header() {

  const pathname = usePathname();

  return (

    <div>
      <a href="/"><h1 className='hover:cursor-pointer'>Junk B Gone - Junk Removal Service</h1> </a>&nbsp;
      <Link href="/" className={pathname === '/' ? 'text-red-500': 'text-black'}>Home</Link> &nbsp;
      <Link href="/contact-us" className={pathname === '/contact-us' ? 'text-red-500': 'text-black'}>Contact Us</Link>&nbsp;
      <Link href="/service-area" className={pathname === '/service-area' ? 'text-red-500' : 'text-black'}>Service Area</Link>&nbsp;
      <Link href="/services" className={pathname === '/services' ? 'text-red-500' : 'text-black'}>Services</Link> &nbsp;
    </div>
  )
}

export default Header