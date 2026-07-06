import { groq } from "next-sanity";

export const contactUsQuery = groq`
*[_type == "contactus"] {
    name,
    image, 
    gallery
}
`