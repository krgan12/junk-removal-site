import { groq } from "next-sanity";

export const homeGalQuery = groq`
*[_type == "home" &&
    defined(gallery)
] | order(name desc) {
    name,
    gallery
}
`