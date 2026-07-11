import HomeFooter from "@/components/HomeFooter";
import HomeImgColl1 from "@/components/HomeImgColl1";
import HomeImgColl2 from "@/components/HomeImgColl2";
import HomeImgColl3 from "@/components/HomeImgColl3";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { homeQuery } from "@/sanity/queries/home";
import Image from "next/image";
import Link from "next/link";
import { FaWind } from "react-icons/fa";

export default async function Page() {

  const homeData = await client.fetch(homeQuery);

  const selectedImage = homeData.find(
    (item: { name: string; }) => item.name === "Image1"
  );

  const imageUrl = selectedImage?.image?urlFor(selectedImage.image).width(1000).url() : "";

   const selectedImage2 = homeData.find(
    (item: { name: string; }) => item.name === "Image2"
  );

  const imageUrl2 = selectedImage?.image?urlFor(selectedImage2.image).width(500).url() : "";

  const TOP_HEADER = 8;

  return (
    
    <div className="min-h-screen">
      <script src="https://elfsightcdn.com/platform.js" async></script>

      {/* <section className="mx-auto max-w-[610px]" style={{paddingTop: `${TOP_HEADER}vh`}}>

      </section> */}

      <section className="relative flex min-h-screen">

        {/* Left */}
        {/* <div className="relative w-1/2 h-screen"> */}
        <div className="flex w-1/2 flex-col justify-center pl-60 mt-25">

          <p className="uppercase mt-[-15] ml-1.5 tracking-[5px] text-[15px] font-medium text-[#6f6f6f]">
            We Get Rid of Unwanted Items
          </p>

          <h1 className="mt-7 relative bottom-2 ml-[-1%] text-[50px] leading-[1.05] tracking-[-2px] font-normal text-[#222]">Junk Removal Oakville</h1>

          <div className="mt-4 space-y-6 max-w-[550px]">

            <p className="text-[17px] leading-7 text-[#666]">

              <span className="font-semibold text-[#555]">Need reliable junk removal in Hamilton?</span>

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
              <ul className='mt-6 space-y-3 pl-8 text-[17.5px] text-[#767676] list-disc'>
                
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
            {/* Icons */}
            
          </div>

          {/* <div className='relative mt-19 h-[440px] w-[800px] overflow-hidden'>
            <Image src={imageUrl2} alt="" fill className="object-cover"/>
          </div> */}
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div>

        <HomeImgColl1 />

      </div>

      <div>

      </div>

      <div>
         <div className="elfsight-app-b894e184-964e-4b52-a5b2-ceeb63ff37bb" data-elfsight-app-lazy></div>
      </div>

      <div>

        <HomeImgColl2 />

      </div>
      
      <div>

      </div>

      <div>
        <HomeImgColl3 />
      </div>

      <HomeFooter />
    </div>
  );
}
