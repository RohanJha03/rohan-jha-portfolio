import React, { useEffect } from "react";
import AboutBanner from "../../components/about/AboutBanner";
import AboutMe from "../../components/about/AboutMe";
import AboutExperience from "../../components/about/AboutExperience";
import AboutCertificate from "../../components/about/AboutCertificate";
import EducationTimeline from "../../components/about/AboutTimeline";
import { useLenis } from "../../components/SmoothScroll";
import CurvedLoop from "../../components/about/AboutScroll";
const AboutPage = () => {
  const lenisRef = useLenis();
  useEffect(() => {
    lenisRef?.current?.scrollTo(0); // top of the page
  }, []);
  return (
    <><title>Get to Know Rohan Jha's Personal details, Education, Experience</title>
      <meta
          name="description"
          content="Learn more about Rohan Jha, a passionate Full-Stack Developer & Software Engineer. Skilled in React, Node.js, Express, Java, MongoDB, and SQL."
        />
        <meta
          name="keywords"
          content="About Rohan Jha, Full-Stack Developer, Software Engineer, React JS, Tailwind CSS, JavaScript, Portfolio, UI/UX, Personal Website, Skills, Experience"
        />
        {/* Open Graph */}
        <meta property="og:title" content="About Me | Rohan Jha - Full-Stack Developer & Software Engineer" />
        <meta property="og:description" content="Learn more about Rohan Jha, a passionate Full-Stack Developer & Software Engineer crafting responsive and interactive websites." />
        <meta property="og:type" content="website" />

      <AboutBanner />
      <AboutMe />
      <AboutExperience />
      <AboutCertificate />
      <EducationTimeline />
      <CurvedLoop   direction="right" marqueeText="⚡ React 🎨 Tailwind 🛠️ Node 🗄️ Mongo ☕ Coffee 💡 Ideas 🖥️ Coding 📦 Deploy 🎮 Game 🎶 Music 💻 Code 🌍 Explore" />
    <div className="mt-40"></div>
    </>
  );
};

export default AboutPage;
