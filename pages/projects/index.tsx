import type { NextPage } from "next";
/* import { useEffect, useState } from "react";
 * import axios from "axios";
 * import { url } from "../../utils/const"; */
import Navbar from "../../components/Navbar";

import CardProject from "../../components/Home/CardProject";
import projects from "../../content/projects.json";

const Project: NextPage = () => {
  //The original version was designed to call
  //an api, because loading times the information
  //now is stored in a json file, now can find the
  //the original version in the folder of this file
  //by the name: Projects Web request.tsx
  const cardsRequest = () => {
    return projects.map((project: any) => {
      return (
        <CardProject
          img={project.img}
          title={project.title}
          categories={project.categories}
          linkSite={project.linkSite}
          isArticle={project.isArticle}
          key={project.title}
          linkRepo={project.linkRepo}
        />
      );
    });
  };

  return (
    <div className="pb-[28px] pt-[30px]">
      <Navbar />
      <div className="mt-[40px] mt-[50px] font-main px-[5%]">
        <h1 className="text-[#01A7C2] text-[36px] mb-2 font-[300]">Projects</h1>

        <div className="flex justify-between flex-wrap">{cardsRequest()}</div>
      </div>
    </div>
  );
};

export default Project;
