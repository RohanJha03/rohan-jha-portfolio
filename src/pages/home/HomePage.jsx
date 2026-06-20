import React, { useEffect } from "react";
import HomeBanner from "../../components/home/HomeBanner";
import HomeQuote from "../../components/home/HomeQuote";
import HomeAbout from "../../components/home/HomeAbout";
import HomeSkills from "../../components/home/HomeSkills";
import HomeProjects from "../../components/home/HomeProjects";
import HomeContact from "../../components/home/HomeContact";
import ScrollSKills from "../../components/home/ScrollSKills";
import { useLenis } from "../../components/SmoothScroll";
import HomeGithub from "../../components/home/HomeGithub";

const HomePage = () => {
  const lenisRef = useLenis();
  useEffect(() => {
    lenisRef?.current?.scrollTo(0); // top of the page
  }, []);
  return (
    <>
      <title>
        Rohan Jha | MERN Stack | Java | Full-Stack Developer Portfolio
      </title>
      <meta
        name="description"
        content="Welcome to Rohan Jha's personal portfolio. Explore creative and responsive full-stack web projects built with React, Node.js, Express, MongoDB, Java, and MySQL."
      />
      <meta
        name="keywords"
        content="Full-Stack Developer, Software Engineer, Java Developer, React JS, Tailwind CSS, JavaScript, Node.js, MongoDB, MySQL, Portfolio, Responsive Web Design, UI/UX, Personal Website, Projects, HTML, CSS"
      />
      {/* Open Graph */}
      <meta
        property="og:title"
        content="Rohan Jha | Full-Stack Developer | MERN Stack Engineer | Java Developer Portfolio"
      />
      <meta
        property="og:description"
        content="Explore creative and responsive full-stack web projects built with React, Node.js, Express, MongoDB, Java, and MySQL."
      />
     
      <HomeBanner />
      <HomeQuote />
      <HomeAbout />
      <HomeSkills />
      <ScrollSKills />
      <HomeProjects />
      <HomeGithub />
      <HomeContact />
    </>
  );
};

export default HomePage;
