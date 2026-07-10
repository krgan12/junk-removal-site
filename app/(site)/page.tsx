import HomeFooter from "@/components/HomeFooter";
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

      </div>

      <div>

      </div>

      <div>
        
      </div>

      <div>

      </div>
      
      <div>

      </div>

      <HomeFooter />
    </div>
  );
}
