import HomeFooter from "@/components/HomeFooter";
import HomeImgColl1 from "@/components/HomeImgColl1";
import HomeImgColl2 from "@/components/HomeImgColl2";
import HomeImgColl3 from "@/components/HomeImgColl3";
import SocialIcons_Home from "@/components/SocialIcons_Home";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { homeQuery } from "@/sanity/queries/home";
import { Clock, Mail, MailIcon, MapIcon, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaWind } from "react-icons/fa";

export default async function Page({
    col1,
    col2, 
    col3,
    form,
    HomeFooter
}: {
    col1: React.ReactNode,
    col2: React.ReactNode,
    col3: React.ReactNode,
    form: React.ReactNode,
    HomeFooter: React.ReactNode,
}) {

  const homeData = await client.fetch(homeQuery);

  const selectedImage = homeData.find(
    (item: { name: string; }) => item.name === "Image1"
  );

  const imageUrl = selectedImage?.image?urlFor(selectedImage.image).width(1000).url() : "";

   const selectedImage2 = homeData.find(
    (item: { name: string; }) => item.name === "Image2" 
  );

  const imageUrl2 = selectedImage?.image?urlFor(selectedImage2.image).width(500).url() : "";

  // const [email, setEmail] = useState("");
  // const [emailTouched, setEmailTouched] = useState(false);

  const MIDDLE_DIVIDER = 20;

  return (
    
    <div className="min-h-screen overflow-x-hidden">
      <script src="https://elfsightcdn.com/platform.js" async></script>

      <section className="relative flex min-h-screen">

        {/* Left */}
        <div className="flex w-1/2 flex-col justify-center pl-60 mt-25">

          <p className="uppercase mt-[-15] ml-1.5 tracking-[5px] text-[15px] font-medium text-[#6f6f6f]">
            We Get Rid of Unwanted Items
          </p>

          <h1 className="mt-7 relative bottom-2 ml-[-1%] text-[50px] leading-[1.05] tracking-[-2px] font-normal text-[#222]">Junk Removal Oakville</h1>

          <div className="mt-4 space-y-6 max-w-[550px]">

            <p className="text-[17px] leading-7 text-[#666]">

              <span className="font-semibold text-[#555]">Need reliable junk removal in Oakville?</span>

              {" "}Whether you have a small 
              load or a full estate cleanout, we handle jobs of all sizes.

            </p>

            <p className="text-[17px] leading-7 text-[#666]">
              Our team is trained, insures, and ready to remove junk from homes 
              and businesses. We offer fast, stress-free service to make the 
              process easy.
            </p>

            <p className="text-[17px] leading-7 text-[#666]">
              We care about the environment.
              We donate, recycle, and repurpose items whenever possible to
              keep waste out of landfills.
            </p>

            <p className="text-[17px] leading-7 text-[#666]">
              We proudly serve the Greater Oakville area,
              including Oakville,
              Brantford,
              Caledonia,
              St. Catherines,
              and everywhere in between.
            </p>

          </div>

           <div className="mt-10 flex gap-6">

            <Link href="/contact-us">
              
              <button className="h-[50px] w-[190px] bg-[#db2424] text-white text-[17.5px] transition-colors
              hover:bg-[#cf201f] hover:cursor-pointer">Request a Quote</button>

            </Link>

            <Link href="/services">
              
              <button className="h-[50px] w-[180px] bg-[#102356] text-white text-[17.5px] transition-colors
              hover:bg-[#162454] hover:cursor-pointer">Learn More</button>

            </Link>

          </div>
        
        </div>


        {/* Right */}
        <div className="relative w-1/2 h-screen overflow-hidden">
          <Image
            src={imageUrl}
            alt=""
            fill
            className="object-cover"
          />
        </div>

      </section>



       <div className='max-w-[640px] relative ml-61 mt-35'>
              <p className="uppercase tracking-[5px] text-[15px] font-medium text-[#6f6f6f]">
                Affordable Junk Removal In Oakville
              </p>

              <h2 className='mt-4.5 text-[45px] leading-[1.15] font-md tracking-[-1px]
              text-[#222]'>
                Flexible Services for your Specific Needs
              </h2>

              <p className='mt-5 text-[18px] leading-9 text-[#666]'>
                <p className='text-[#767676] font-bold'>
                  Our Services:
                </p>
                {/* Leading-7 or ADJUST later on */}
                {/* <p className='leading-7.5 max-w-[550px]'>Household waste removal, furniture removal, construction cleanup, dump runs, yard waste removal, garbage removal, hot tub removal, piano removal, concrete disposal, clean fill (dirt) disposal, asphalt disposal, roofing disposal, debris removal, bulk landscape material delivery, and more.</p> */}

              </p>
              <p className='leading-7 max-w-[550px] text-[#666] text-[17px]'>Household waste removal, furniture removal, construction cleanup, dump runs, yard 
                waste removal, garbage removal, hot tub removal, piano removal, 
                concrete disposal, clean fill (dirt) disposal, asphalt disposal, roofing 
                disposal, bulk landscape material delivery, and more.</p>
              
              <p className='text-[17.5px] mt-6 font-semibold text-[#767676]'>Flexible options to fit your needs:</p>
              <ul className='mt-6 space-y-3 pl-8 marker:text-[15.5px] text-[17px] text-[#767676] list-disc'>
                
                <li className=''>
                  <span className='font-bold'>Small to Medium Loads:</span> 6.5 ft pickup truck bed
                </li>

                <li className=''>
                 <span className='font-bold'>Medium to Large Loads:</span> 7x12 ft dump trailer or 12–40 yard bins
                </li>

                <li className=''>
                  <span className='font-bold'>DIY Option:</span> Ask about our Junk Removal Bin rentals
                </li>
              </ul>

          </div>

          <div>
          </div>
            
          <div className="relative mt-[-28.5%] ml-218 h-[700px] w-[580px] overflow-hidden">
            <Image src={imageUrl2} alt="" fill className="object-cover"/>
          </div>

          <div className="flex flex-col gap-16 mt-[-10%] ml-[2.5%] relative left-50">
            {/* Icons */}
            <div className="flex items-center gap-4">
              <svg className="w-15 h-15 text-[#50659b]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path data-name="layer2" fill="none" stroke="#50659b" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M55.9 46h5M24 46h22.1M46 12H34l-6 10H6L2 36.9 8.7 46H14"></path><path data-name="layer2" fill="none" stroke="#50659b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.3 40H62V30h-5.8l-5-10H40v20m16.2-10H40"></path><circle data-name="layer1" cx="19" cy="47" r="5" fill="none" stroke="#50659b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><circle data-name="layer1" cx="51" cy="47" r="5" fill="none" stroke="#50659b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
            <div>

              <h3 className="font-normal text-[22.5px] ml-5 text-[black]">No Job is Too <span className="text-[30px]">Big</span> or Too <span className="text-[15px]">Small</span></h3>

            </div>
            
            </div>

            <div className="flex items-center gap-4 mt-[-45]">
              <svg className="w-15 h-15 text-[#50659b]" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32.401 58H2V2h44v38.02M12 2v8m-2 0h4m10-8v8m-2 0h4m10-8v8m-2 0h4" stroke-width="2" stroke-miterlimit="10" stroke="#50659b" fill="none" data-name="layer2" stroke-linejoin="round" stroke-linecap="round"></path><path d="M42 51.885L32.113 59l3.809-11.471L26 41l12.242-1L42 29l3.758 11L58 41l-9.918 6.529L51.891 59 42 51.885z" stroke-width="2" stroke-miterlimit="10" stroke="#50659b" fill="none" data-name="layer1" stroke-linejoin="round" stroke-linecap="round"></path></svg>

              <div>
                <h3 className="font-normal text-[22.5px] ml-5 text-[black]">Over 125+ 5 Star Reviews on Google</h3>
              </div>
            </div>
          </div>

          {/* </div> */}
      
      <section id='quote' className='' style={{paddingTop: `${MIDDLE_DIVIDER}vh`}}>
      </section>     

      <div className="hover:cursor-pointer">

        {/* <HomeImgColl1 /> */}
        {col1}

      </div>

      {/* <div> */}
      <section className="mx-auto mt-29 flex max-w-[1350px] justify-between">

        {/* <h1 className='text-center text-[35px] leading-[1.15] font-normal tracking-[-1px] text-[#222]'>Contact us for a FREE quote</h1> */}

        {/* <h1 className='text-center text-[35px] leading-[1.15] font-normal tracking-[-1px] text-[#222]'>Company Information</h1> */}
        {/* <MapIcon /> --> for NEXT section */}
        {/* <MapPin className="text-white fill-gray-500"/> */}
        {/* <p className="text-black text-[15px]">From Oakville to Brantford to Niagara Region</p>
        <Phone className="fill-gray-500 text-white"/>
        <p className="text-black text-[15px]">905-781-4046</p>
        <MailIcon className="text-white fill-gray-500"/>
        <p className="text-[blue] text-[15px] underline">junkbgoneoakville@gmail.com</p>
        <Clock className="fill-gray-500 text-white" />
        <p className="text-[blue] text-[15px] underline">Open 7 days a week</p>
        <SocialIcons_Home /> */}

        <div className="w-[360px] ml-25">

          <h2 className="text-[35px] font-normal text-[#222]">
            Company Information
          </h2>

          <div className="mt-9 space-y-6 max-w-[15000px]">

            <div className="flex items-start gap-5 max-w-[10000px]">

              <MapPin size={25} className="text-white fill-gray-500"/>

              <p className="text-[17px]">From Oakville to Brantford to Niagara Region</p>

            </div>

            <div className="flex items-center gap-5">

              <Phone 
                size={24}
                className="text-white fill-gray-500"
              />

              <p className="text-[17px]">905-781-4046</p>

            </div>

            <div className="flex items-center gap-5">

              <Mail size={24} className="text-white fill-gray-500" />

              <a href="mailto:junkbgoneoakville@gmail.com" className="text-[17px] underline text-[#355ca8]">junkbgoneoakville@gmail.com</a>

            </div>

            <div className="flex items-center gap-5">

              <Clock size={24} className="text-white fill-gray-500"/>

              <p className="text-[17px]">Open 7 days a week</p>

            </div>
            
            <div className="mt-8"><SocialIcons_Home/></div>

          </div>

        </div>

        {/* Div to work on */}
        <div className="w-[650px] ml-75.5">
          
          <h2 className="text-[35px] font-normal text-[#222] leading-tight">Contact us for a FREE quote</h2>

          <p className="mt-6 max-w-[550px] text-[20px] leading-8">
            Get a free junk removal quote! Tell us your city, nearest 
            intersection, and what you need removed (example: 1 couch, 
            10 bags). You can also text the details to&nbsp;
            <a href="tel:+1-905-781-4046" className="underline text-[#355ca8]">
              905-781-4046.
            </a>
          </p>

          {form}
        </div>
        
      {/* </div> */}
      </section>

      <div>
         <div className="elfsight-app-b894e184-964e-4b52-a5b2-ceeb63ff37bb" data-elfsight-app-lazy></div>
      </div>

      <div className="hover:cursor-pointer">

        {/* <HomeImgColl2 /> */}
        {col2}

      </div>
      
      <div className="mx-auto flex w-[1250px] mt-30 flex-col items-center mb-35">
            
            {/* <div className=""> */}

              <h1 className="text-[45px] font-normal tracking-[-1px] text-[#222] text-center">About Us</h1>

              <p className="mt-7 max-w-[750px] text-center text-[19px] leading-8">
                &nbsp;Fast & Friendly Junk Removal Services for the Greater Oakville Area including Hamilton, Milton, Burlington, Brantford, Caledonia, Cayuga, Grimsby, Lincoln, and Niagara Region. 
              </p>
              
              <div className="mt-10 flex justify-center gap-20">
              
              <div className="flex w-[400px] flex-col items-center">
              <svg className="w-14 h-16 text-[#50659b]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path data-name="layer1" d="M43.2 48.1L36 44.1M36 44.1L18 52M36 44.1V3M18 52L2 44.1V4L18 11.9M18 52V11.9M18 11.9L36 3M36 3L54 11.9V32.2" stroke="#50659b" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                <path data-name="layer2" d="M52 32C49.3478 32 46.8043 33.0536 44.9289 34.9289C43.0536 36.8043 42 39.3478 42 42C42 51 52 61 52 61C52 61 62 51 62 42C62 39.3478 60.9464 36.8043 59.0711 34.9289C57.1957 33.0536 54.6522 32 52 32Z" stroke="#50659b" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                <path data-name="layer3" d="M52 45C53.6569 45 55 43.6569 55 42C55 40.3431 53.6569 39 52 39C50.3431 39 49 40.3431 49 42C49 43.6569 50.3431 45 52 45Z" stroke="#50659b" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>

              <h3 className="mt-3 text-[26px] font-normal text-[#222]">Large Service Area</h3>

              <p className="mt-4 max-w-[450px] text-[17px] leading-7 text-[#666] text-center">
                We proudly servce from Oakville to Niagara Region, and all communities in between.
              </p>
              </div>
             

              <div className="flex w-[400px] flex-col items-center">
              <svg className="w-14 h-16 text-[#50659b]" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" aria-describedby="desc" role="img">
                <path stroke-width="2" stroke-miterlimit="10" stroke="#50659b" fill="none" d="M41.713 48.744c-1.968-1.476-1.71-3.069-1.71-4.244v-4m-16 1v3c0 1.285.425 3.083-2.194 4.67" data-name="layer2" stroke-linejoin="round" stroke-linecap="round"></path>
                <path stroke-width="2" stroke-miterlimit="10" stroke="#50659b" fill="none" d="M37.601 42.5a16.786 16.786 0 0 0 7.168-10.135c3.026-.037 4.234-2.931 4.234-6.937 0-1.994 0-4.928-3-4.928v-2m-29 0v2.006c-2-.006-3 2.994-3 4.988 0 4.006 1.391 7.006 4.436 7.006h.002a15.21 15.21 0 0 0 7.17 10m20.392-24v-2c0-10.4-7.373-14-14-14s-15 3.517-15 13.916V18.5c12 0 13-8 21-8 7.459 0 8 8 8 8z" data-name="layer2" stroke-linejoin="round" stroke-linecap="round"></path>
                <path stroke-width="2" stroke-miterlimit="10" stroke="#50659b" fill="none" d="M14.003 51.5c-12.61 2-12.001 11-12.001 11h30L21.809 49.17c-1.458.885-3.856 1.703-7.806 2.33zm36 0c-4.436-.74-6.91-1.72-8.29-2.756L32.002 62.5h30s0-9-12-11z" data-name="layer1" stroke-linejoin="round" stroke-linecap="round"></path>
              </svg>

              <h3 className="mt-3 text-[26px] font-normal text-[#222]">Professional Staff</h3>

              <p className="mt-4 max-w-[350px] text-[17px] leading-7 text-[#666] text-center">
                On time, Professional and Friendly Staff
              </p>
              </div>
              
              <div className="flex w-[400px] flex-col items-center">
              <svg className="w-14 h-16 text-[#50659b]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img">
                <path data-name="layer2" d="M10.3 29l-2.2-6.1a2.4 2.4 0 0 1 1.4-3.1L50.1 5.1a2.4 2.4 0 0 1 3.1 1.4l8.7 24a2.4 2.4 0 0 1-1.4 3.1L50 37.4m-39.9-9.2L55 11.8m-8.3 9.8l4.5-1.6" fill="none" stroke="#50659b" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                <rect data-name="layer1" x="2" y="29" width="48" height="30" rx="2.4" ry="2.4" fill="none" stroke="#50659b" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></rect>
                <path data-name="layer1" fill="none" stroke="#50659b" stroke-miterlimit="10" stroke-width="2" d="M10 43h14m12-6h6M10 51h2m8 0h2m8 0h2m8 0h2" stroke-linejoin="round" stroke-linecap="round"></path>
              </svg>

              <h3 className="mt-3 text-[26px] font-normal text-[#222]">Easy Payment Options</h3>
              <p className="mt-4 max-w-[350px] text-[17px] leading-7 text-[#666] text-center">Cash, Credit, Debit & E-transfer Available</p>
              </div>

           </div>

      </div>

      <div className="hover:cursor-pointer">
        {/* <HomeImgColl3 /> */}
        {col3}
      </div>

      {/* <HomeFooter /> */}
      {HomeFooter}
    </div>
  );
}