// // 'use client'
// import HomeFooter from "@/components/HomeFooter";
// import HomeImgColl1 from "@/components/HomeImgColl1";
// import HomeImgColl2 from "@/components/HomeImgColl2";
// import HomeImgColl3 from "@/components/HomeImgColl3";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { homeQuery } from "@/sanity/queries/home";
// import Image from "next/image";
// import Link from "next/link";
// // import { useState } from "react";
// import { CiDeliveryTruck } from "react-icons/ci";
// import { FaWind } from "react-icons/fa";

// export default async function Page() {

//   const homeData = await client.fetch(homeQuery);

//   const selectedImage = homeData.find(
//     (item: { name: string; }) => item.name === "Image1"
//   );

//   const imageUrl = selectedImage?.image?urlFor(selectedImage.image).width(1000).url() : "";

//    const selectedImage2 = homeData.find(
//     (item: { name: string; }) => item.name === "Image2" 
//   );

//   const imageUrl2 = selectedImage?.image?urlFor(selectedImage2.image).width(500).url() : "";

//   // const [email, setEmail] = useState("");
//   // const [emailTouched, setEmailTouched] = useState(false);

//   const MIDDLE_DIVIDER = 20;

//   return (
    
//     <div className="min-h-screen overflow-x-hidden">
//       <script src="https://elfsightcdn.com/platform.js" async></script>

//       <section className="relative flex min-h-screen">

//         {/* Left */}
//         <div className="flex w-1/2 flex-col justify-center pl-60 mt-25">

//           <p className="uppercase mt-[-15] ml-1.5 tracking-[5px] text-[15px] font-medium text-[#6f6f6f]">
//             We Get Rid of Unwanted Items
//           </p>

//           <h1 className="mt-7 relative bottom-2 ml-[-1%] text-[50px] leading-[1.05] tracking-[-2px] font-normal text-[#222]">Junk Removal Oakville</h1>

//           <div className="mt-4 space-y-6 max-w-[550px]">

//             <p className="text-[17px] leading-7 text-[#666]">

//               <span className="font-semibold text-[#555]">Need reliable junk removal in Oakville?</span>

//               {" "}Whether you have a small 
//               load or a full estate cleanout, we handle jobs of all sizes.

//             </p>

//             <p className="text-[17px] leading-7 text-[#666]">
//               Our team is trained, insures, and ready to remove junk from homes 
//               and businesses. We offer fast, stress-free service to make the 
//               process easy.
//             </p>

//             <p className="text-[17px] leading-7 text-[#666]">
//               We care about the environment.
//               We donate, recycle, and repurpose items whenever possible to
//               keep waste out of landfills.
//             </p>

//             <p className="text-[17px] leading-7 text-[#666]">
//               We proudly serve the Greater Oakville area,
//               including Oakville,
//               Brantford,
//               Caledonia,
//               St. Catherines,
//               and everywhere in between.
//             </p>

//           </div>

//            <div className="mt-10 flex gap-6">

//             <Link href="/contact-us">
              
//               <button className="h-[50px] w-[190px] bg-[#db2424] text-white text-[17.5px] transition-colors
//               hover:bg-[#cf201f] hover:cursor-pointer">Request a Quote</button>

//             </Link>

//             <Link href="/services">
              
//               <button className="h-[50px] w-[180px] bg-[#102356] text-white text-[17.5px] transition-colors
//               hover:bg-[#162454] hover:cursor-pointer">Learn More</button>

//             </Link>

//           </div>
        
//         </div>


//         {/* Right */}
//         <div className="relative w-1/2 h-screen overflow-hidden">
//           <Image
//             src={imageUrl}
//             alt={selectedImage || "Image"}
//             fill
//             className="object-cover"
//           />
//         </div>

//       </section>



//        <div className='max-w-[640px] relative ml-61 mt-35'>
//               <p className="uppercase tracking-[5px] text-[15px] font-medium text-[#6f6f6f]">
//                 Affordable Junk Removal In Oakville
//               </p>

//               <h2 className='mt-4.5 text-[45px] leading-[1.15] font-md tracking-[-1px]
//               text-[#222]'>
//                 Flexible Services for your Specific Needs
//               </h2>

//               <p className='mt-5 text-[18px] leading-9 text-[#666]'>
//                 <p className='text-[#767676] font-bold'>
//                   Our Services:
//                 </p>
//                 {/* Leading-7 or ADJUST later on */}
//                 {/* <p className='leading-7.5 max-w-[550px]'>Household waste removal, furniture removal, construction cleanup, dump runs, yard waste removal, garbage removal, hot tub removal, piano removal, concrete disposal, clean fill (dirt) disposal, asphalt disposal, roofing disposal, debris removal, bulk landscape material delivery, and more.</p> */}

//               </p>
//               <p className='leading-7 max-w-[550px] text-[#666] text-[17px]'>Household waste removal, furniture removal, construction cleanup, dump runs, yard 
//                 waste removal, garbage removal, hot tub removal, piano removal, 
//                 concrete disposal, clean fill (dirt) disposal, asphalt disposal, roofing 
//                 disposal, bulk landscape material delivery, and more.</p>
              
//               <p className='text-[17.5px] mt-6 font-semibold text-[#767676]'>Flexible options to fit your needs:</p>
//               <ul className='mt-6 space-y-3 pl-8 marker:text-[15.5px] text-[17px] text-[#767676] list-disc'>
                
//                 <li className=''>
//                   <span className='font-bold'>Small to Medium Loads:</span> 6.5 ft pickup truck bed
//                 </li>

//                 <li className=''>
//                  <span className='font-bold'>Medium to Large Loads:</span> 7x12 ft dump trailer or 12–40 yard bins
//                 </li>

//                 <li className=''>
//                   <span className='font-bold'>DIY Option:</span> Ask about our Junk Removal Bin rentals
//                 </li>
//               </ul>

//           </div>

//           <div>
//           </div>
            
//           <div className="relative mt-[-28.5%] ml-218 h-[700px] w-[580px] overflow-hidden">
//             <Image src={imageUrl2} alt={selectedImage2 || "Image"} fill className="object-cover"/>
//           </div>

//           <div className="flex flex-col gap-16 mt-[-10%] ml-[2.5%] relative left-50">
//             {/* Icons */}
//             <div className="flex items-center gap-4">
//               <svg className="w-15 h-15 text-[#50659b]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path data-name="layer2" fill="none" stroke="#50659b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M55.9 46h5M24 46h22.1M46 12H34l-6 10H6L2 36.9 8.7 46H14"></path><path data-name="layer2" fill="none" stroke="#50659b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.3 40H62V30h-5.8l-5-10H40v20m16.2-10H40"></path><circle data-name="layer1" cx="19" cy="47" r="5" fill="none" stroke="#50659b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><circle data-name="layer1" cx="51" cy="47" r="5" fill="none" stroke="#50659b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
//             <div>

//               <h3 className="font-normal text-[22.5px] ml-5 text-[black]">No Job is Too <span className="text-[30px]">Big</span> or Too <span className="text-[15px]">Small</span></h3>

//             </div>
            
//             </div>

//             <div className="flex items-center gap-4 mt-[-45]">
//               <svg className="w-15 h-15 text-[#50659b]" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32.401 58H2V2h44v38.02M12 2v8m-2 0h4m10-8v8m-2 0h4m10-8v8m-2 0h4" stroke-width="2" stroke-miterlimit="10" stroke="#50659b" fill="none" data-name="layer2" stroke-linejoin="round" stroke-linecap="round"></path><path d="M42 51.885L32.113 59l3.809-11.471L26 41l12.242-1L42 29l3.758 11L58 41l-9.918 6.529L51.891 59 42 51.885z" stroke-width="2" stroke-miterlimit="10" stroke="#50659b" fill="none" data-name="layer1" stroke-linejoin="round" stroke-linecap="round"></path></svg>

//               <div>
//                 <h3 className="font-normal text-[22.5px] ml-5 text-[black]">Over 125+ 5 Star Reviews on Google</h3>
//               </div>
//             </div>
//           </div>

//           {/* </div> */}
      
//       <section id='quote' className='' style={{paddingTop: `${MIDDLE_DIVIDER}vh`}}>
//       </section>     

//       <div className="hover:cursor-pointer">

//         <HomeImgColl1 />

//       </div>

//       <div>
//         {/* Div to work on */}

//          {/* <form className='mt-10 flex w-full flex-col max-w-[610px]'>

//             <div className='mb-7'>
              
//               <label className='mb-2 block text-[16px] font-normal text-[black]' htmlFor="">Name</label>
//               <input placeholder='Enter your name' className='h-[50px] w-full border rounded-sm border-[#dddddd] px-4 text-[16px] placeholder:text-[#777] outline-none transition-colors focus:border-[#bdbdbd]' />

//               <label className="mb-2 mt-4 block text-[16px]">E-mail <span className='text-red-600'>*</span></label>
//               <input
//                value={email}
//                onChange={(e) => setEmail(e.target.value)}
//                onBlur={() => setEmailTouched(true)}
//                placeholder='Enter your email' 
//                className='h-[50px] w-full border rounded-sm border-[#dddddd] px-4 text-[16px] placeholder:text-[#777] outline-none transition-colors focus:border-[#bdbdbd]' />

//               {emailTouched && email.trim() === "" && (
//                 <p className='mt-2 text-[16px] text-red-600'>This field cannot be empty.</p>
//               )}

//               <label className="mb-2 mt-4 block text-[16px]">Phone</label>
//               <input placeholder='Enter your phone number' className='h-[50px] w-full border rounded-sm border-[#dddddd] px-4 text-[16px] placeholder:text-[#777] outline-none transition-colors focus:border-[#bdbdbd]' />

//               <label className="mb-2 mt-4 block text-[16px]">Message</label>
//               <textarea rows={2} placeholder='Enter your message' className='min-h-[45px] w-full
//                border rounded-sm border-[#dddddd] px-4 py-3 text-[16px] placeholder:text-[#777]
//               outline-none transition-colors focus:border-[#bdbdbd]'>

//               </textarea>

//               <div className='mt-4 h-[55px] w-[304px] border border-[#d9d9d9] bg-white'></div>
              
//               <button type='submit' className='hover:cursor-pointer mt-6 h-[48px] w-[120px] bg-[#e32726] text-[18px] font-normal text-white transition-colors hover:bg-[#cf201f]'>Submit</button>
//             </div>
           
//           </form> */}
//       </div>

//       <div>
//          <div className="elfsight-app-b894e184-964e-4b52-a5b2-ceeb63ff37bb" data-elfsight-app-lazy></div>
//       </div>

//       <div className="hover:cursor-pointer">

//         <HomeImgColl2 />

//       </div>
      
//       <div>

//       </div>

//       <div className="hover:cursor-pointer">
//         <HomeImgColl3 />
//       </div>

//       <HomeFooter />
//     </div>
//   );
// }