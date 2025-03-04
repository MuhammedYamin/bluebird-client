import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Have questions about our real estate projects or construction services? our team is here to help. Reach out today, and let's turn your vision into reality!."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
