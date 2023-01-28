//import { useEffect, useState } from "react";
//import axios from "axios";
//import { FaGlobe, FaPython, FaMicrochip } from "react-icons/fa";
//import { url } from "../../utils/const";
import Link from "next/link";

import CardProject from "./CardProject";

import projects from "../../content/projects.json";

const Projects = () => {
  //The original version was designed to call
  //an api, because loading times the information
  //now is stored in a json file, now can find the
  //the original version in the folder of this file
  //by the name: Projects Web request.tsx
  const cardsRequest = () => {
    const newestProjects = projects.slice(0, 6);
    return newestProjects.map((project: any) => {
      return (
        <CardProject
          img={project.img}
          title={project.title}
          categories={project.categories}
          linkSite={project.linkSite}
          linkRepo={project.linkRepo}
          isArticle={project.isArticle}
          key={project.title}
        />
      );
    });
  };

  return (
    <section className="my-[60px]">
      <div className="flex flex-row items-baseline">
        <h1 className="text-[#01A7C2] text-[36px] mb-2 font-[300] mr-6">
          Projects{" "}
        </h1>
        <Link href="./projects">
          <a className="text-[20px] text-[#01A7C2]  underline">See all</a>
        </Link>
      </div>
      <div className="flex justify-between flex-wrap">{cardsRequest()}</div>
    </section>
  );
};

export default Projects;
