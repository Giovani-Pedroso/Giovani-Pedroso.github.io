import { useEffect, useState } from "react";
import axios from "axios";
import { FaGlobe, FaPython, FaMicrochip } from "react-icons/fa";
import { url } from "../../utils/const";
import ReactLoading from "react-loading";

import CardProject from "./CardProject";

import projects from "../../content/projects.json";

const Projects = () => {
  const [projectsPost, setProjectPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /* useEffect(() => {
  *   const getProjects = async () => {
  *     try {
  *       const req: any = await axios.get(`${url}/get-post/projects/`);
  *       console.log("The return ", req);
  *       setProjectPost(req.data);
  *     } catch (err: any) {
  *       console.log(err);
  *       alert(err.message);
  *     }
  *   };
  *   getProjects();
  
  *   setIsLoading(false);
  * }, []);
   */
  /*
  const cards = (num: number) => {
    let cards = []

    for (let i = 0; i != num; i++) {
      cards.push(

        <CardProject img="./images/placeholder-project-1.png"
          title="Florest site"
          categories={['next', 'node', 'firebase', 'ts']} linkSite="#" linkRepo="#"
        />
      )
    }
    

    return cards

  }
    */
  console.log("projects", projects);

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
          content={project.content}
          linkSite={project.linkSite}
          id={project.postId}
          key={project.title}
          linkRepo={project.linkRepo}
        />
      );
    });
  };

  return (
    <section className="my-[60px]">
      <h1 className="text-[#01A7C2] text-[36px] mb-2 font-[300]">Projects</h1>
      <div className="flex justify-between flex-wrap">{cardsRequest()}</div>
    </section>
  );
};

export default Projects;
