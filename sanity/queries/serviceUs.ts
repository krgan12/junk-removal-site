import { groq } from "next-sanity";

export const serviceUsQuery = groq`
*[_type == "services"] {
  name,
  description,
  features,
  image
}
`