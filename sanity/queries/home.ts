import { groq } from "next-sanity";

export const homeQuery = groq`
*[_type == "home"] {
    name,
    image, 
    gallery
}
`