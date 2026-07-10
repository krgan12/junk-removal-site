import { groq } from "next-sanity";

export const homeQuery = groq`
*[_type == "contactus"] {
    name,
    image, 
    gallery
}
`