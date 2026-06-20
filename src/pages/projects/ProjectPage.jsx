/* eslint-disable react-hooks/exhaustive-deps */
import ProjectBanner from "../../components/projects/ProjectBanner";
import ProjectAbout from "../../components/projects/ProjectAbout";
import ProjectsAll from "../../components/projects/ProjectsAll";
import { useLenis } from "../../components/SmoothScroll";
import { useEffect } from "react";
import ProjectStats from "../../components/projects/ProjectStats";
const ProjectPage = () => {
  const lenisRef = useLenis();
  useEffect(() => {
    lenisRef?.current?.scrollTo(0); // top of the page
  }, []);
  return (
    <>
        <title>Rohan Jha's Projects | Full-Stack Web Development Portfolio</title>
        <meta
          name="description"
          content="Check out Rohan Jha’s portfolio of web projects, showcasing expertise in Java, REST APIs, Node.js, React, and MySQL/MongoDB database systems. Interactive and responsive designs."
        />
        <meta
          name="keywords"
          content="Rohan Jha, Web Projects, Portfolio, Full-Stack Developer, React JS, Java, REST APIs, MySQL, MongoDB, Node.js, Express, UI/UX, Responsive Design, Team Lead Projects"
        />
        {/* Open Graph */}
        <meta property="og:title" content="Rohan Jha's Projects | Full-Stack Web Development Portfolio" />
        <meta property="og:description" content="Explore Rohan Jha’s portfolio projects, highlighting skills in Java, Node.js, React, and database systems." />
        <meta property="og:type" content="website" />
      <ProjectBanner />
      
      <ProjectAbout />
      <ProjectStats/>
      <ProjectsAll />
    </>
  );
};

export default ProjectPage;
