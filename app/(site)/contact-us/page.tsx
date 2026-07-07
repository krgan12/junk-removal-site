import ContactUsImage from "@/app/(site)/contact-us/ContactUsImage";
import ContactUsClient from "./ContactUsClient";
import ContactUsFooter from "@/components/ContactUsFooter";

// page.tsx now becomes the composition layer
export default function Page() {
  return (
    <ContactUsClient
      image={<ContactUsImage />}
      footer={<ContactUsFooter />}
    />
  )
}