import React, { useEffect } from "react";
import ContactBanner from "../../components/contact/ContactBanner";
import HomeContact from "../../components/home/HomeContact";
import { useLenis } from "../../components/SmoothScroll";
import ContactSocial from "../../components/contact/ContactSocial";

const ContactPage = () => {
  const lenisRef = useLenis();
  useEffect(() => {
    lenisRef?.current?.scrollTo(0); // top of the page
  }, []);
  return (
    <>
      <title>Contact Rohan Jha | Full-Stack Projects & Hiring</title>

      <meta
        name="description"
        content="Get in touch with Rohan Jha for full-stack web development projects, collaborations, or inquiries. Reach out via email, social media, or contact form."
      />
      <meta
        name="keywords"
        content="Rohan Jha, Contact, Web Developer, Portfolio, Email, Social Media, Collaboration, Full-Stack Developer, React JS, Java, Spring Boot, MySQL, MongoDB"
      />
      {/* Open Graph */}
      <meta
        property="og:title"
        content="Contact Rohan Jha | Web Development Portfolio"
      />
      <meta
        property="og:description"
        content="Reach out to Rohan Jha for collaborations, inquiries, or web development projects. Fast and professional communication."
      />
  
      <ContactBanner />
      <ContactSocial />
      <HomeContact />
    </>
  );
};

export default ContactPage;
