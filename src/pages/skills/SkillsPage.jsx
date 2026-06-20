import React, { useEffect } from "react";
import SkillBanner from "../../components/skills/SkillBanner";
import SkillsAbout from "../../components/skills/SkillsAbout";
import SkillsCards from "../../components/skills/SkillsCards";
import SkillProcess from "../../components/skills/SkillProcess";
import { useLenis } from "../../components/SmoothScroll";
// import MarqueeText from "../../components/MarqueeText";
import CurvedLoop from "../../components/about/AboutScroll";
const SkillsPage = () => {
  const lenisRef = useLenis();
  useEffect(() => {
    lenisRef?.current?.scrollTo(0); // top of the page
  }, []);
  return (
    <>
      <title>Rohan Jha's Skills | Full-Stack Developer & Software Engineer</title>
        <meta
          name="description"
          content="Explore Rohan Jha’s technical skillset: React, Node.js, Express, Java, MySQL, MongoDB, and Git. Building interactive, responsive, and robust full-stack solutions."
        />
        <meta
          name="keywords"
          content="Rohan Jha, Full-Stack Developer, Skills, React JS, Java, Spring Boot, MySQL, MongoDB, Node.js, Express, Web Development, Responsive Design, UI/UX, Portfolio"
        />
        {/* Open Graph */}
        <meta property="og:title" content="Rohan Jha's Skills | Full-Stack Developer & Software Engineer" />
        <meta property="og:description" content="Check out Rohan Jha’s skills in React, Node.js, Express, Java, MySQL, MongoDB, and Git for full-stack projects." />
        <meta property="og:type" content="website" />
     
      <SkillBanner />
      <SkillsAbout />
      <SkillsCards />
      <SkillProcess />
      {/* <MarqueeText /> */}
      <CurvedLoop speed={3}
        curveAmount={20}
        direction="right"
        interactive={true}
        marqueeText="🔁 Repeat 😴 Sleep 💻 Code 🍔 Eat 🔁 Repeat 😴 Sleep 💻 Code 🍔 Eat 🔁 Repeat 😴 Sleep 💻 Code 🍔 Eat"
      />
    </>
  );
};

export default SkillsPage;
