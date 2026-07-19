import { groq } from "next-sanity";

export const serviceAreaQuery = groq`
*[_type == "servicearea"] {
    name,
    image, 
    location,
    gallery
}
`