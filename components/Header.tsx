'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { SetStateAction, useEffect, useState } from 'react';

function Header() {

  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  // To make a header change bg-colours, React state can simply WATCH a browser's 
  // scroll position, meaning it will automatically work on EVERY 
  // single page on your site.

  // Listen for scrolling:
  useEffect(() => {
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll(); // checks initial position

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);


  return (
    // fixed is RESPONSIBLE for the transparent header
    <div className={`fixed z-50 w-full h-[12.56%] pt-9 space-x-10 pl-20 
      items-center text-center transition-all duration-300
      ${scrolled ? "bg-white" : "bg-none"}
    `}>
      
      <Link href="/" className='hover:cursor-pointer space-x-70 text-[24px] right-55.5 relative'>
        JunkBGone - Junk Removal Service
      </Link>&nbsp;
      <div className='inline-block space-x-10 relative left-31'>
      <Link href="/" className={pathname === '/' ? 'text-red-500 text-[106%] relative': 'text-black text-[106%]'}>Home</Link> &nbsp;
      <Link href="/contact-us" className={pathname === '/contact-us' ? 'text-red-500 text-[106%]': 'text-black text-[106%]'}>Contact Us</Link>&nbsp;
      <Link href="/service-area" className={pathname === '/service-area' ? 'text-red-500 text-[106%]' : 'text-black text-[106%]'}>Service Area</Link>&nbsp;
      <Link href="/services" className={pathname === '/services' ? 'text-red-500 text-[106%]' : 'text-black text-[106%]'}>Services</Link> &nbsp;
      </div>
    </div>
  )
}

export default Header