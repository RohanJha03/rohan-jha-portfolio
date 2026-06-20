import React, { useContext, useState } from "react";
import CircularGallery from "./ProjectCircular";
import { AppContext } from "../../context/datacontext";
import prof from "../../assets/images/project_bg-01-01.png";
import pers from "../../assets/images/personal_bg-01.png";
import SplitText from "../SplitText";

const ProjectsAll = () => {
  const { projects, darkMode } = useContext(AppContext);

  const items = (projects || []).map((item) => {
    return {
      image: `${item.slug === "pharmacy-management" ? prof : pers}`,
      text: item.text,
      path: `/projects/case-study/${item.slug}`,
    };
  });

  return (
    <>
      <div className="relative z-10">
        <h2 className="text-4xl flex justify-center items-center font-bold px-8 text-center pt-20">
          <SplitText
            delay={80}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            className=""
            text="Project Showcase"
          />
        </h2>

        {items.length > 0 ? (
          <CircularGallery items={items} textColor={darkMode ? `#00ffff` : `#ff7700`} />
        ) : (
          <div className="h-[400px] flex justify-center items-center text-xl text-gray-500 font-para">
            No projects found.
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectsAll;
