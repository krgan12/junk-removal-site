import HomeFooter from "@/components/HomeFooter";
import HomeImgColl1 from "@/components/HomeImgColl1";
import HomeImgColl2 from "@/components/HomeImgColl2";
import HomeImgColl3 from "@/components/HomeImgColl3";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { homeQuery } from "@/sanity/queries/home";
import Image from "next/image";
import Link from "next/link";

export default function Page() {

  // const homeData = await client.fetch(homeQuery);

  // const heroImage = homeData.find(
  //   (item: { name: string; }) => item.name === "Image1"
  // );

  // console.log(heroImage);

  return (
    
    <div className="n">
      <script src="https://elfsightcdn.com/platform.js" async></script>
      <div className="">
      We Get Rid Of Your Unwanted Items

        {/* Title */}
        <h1>Junk Removal Oakville</h1>

        {/* <Image height={25} width={25} alt="" src={urlFor(heroImage.image).url()} /> */}

        {/* Request quote Button */}
        <Link className="bg-red-600" href="/contact-us">Request a quote</Link>

        {/* Learn more Button */}
        <Link className="bg-blue-600" href="/services">Learn more</Link>

        {/* Image component */}

        {/* Sanity back-end connect */}



      </div>

      <div>
        
      </div>

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
