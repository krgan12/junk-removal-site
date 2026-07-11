import HomeImgColl1 from "@/components/HomeImgColl1";
import HomeImgColl2 from "@/components/HomeImgColl2";
import HomeImgColl3 from "@/components/HomeImgColl3";
import PageClient from "../PageClient";
import PageServer from "../PageServer";

export default function page() {
  return (
    <PageClient 
      col1={<HomeImgColl1 />}
      col2={<HomeImgColl2 />}
      col3={<HomeImgColl3 />}
      form={<PageServer />}
    />
  )
}