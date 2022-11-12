import { useState, useEffect } from "react";
import { motion } from "framer-motion";

//Icons imports
import { DiHtml5, DiCss3 } from "react-icons/di";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiFirebase,
  SiNextdotjs,
  SiPython,
  SiArduino,
  SiCplusplus,
  SiStmicroelectronics,
  SiEspressif,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

type Prop = {
  img: string;
  title: string;
  categories: string[];
  linkSite?: string;
  linkRepo?: string;
  content: string;
  isArticle: boolean;
};
const classIcons = "mr-[10px]";

const CardProject = (props: Prop) => {
  const [categories, setCategories] = useState([]);
  //console.log("Card props", props)
  useEffect(() => {
    const cat = props.categories.sort();
    //const cat = props.ca
    //console.log("props", props)

    //Function that will place the categories icons
    const icons: any = cat.map((icon: string) => {
      switch (icon) {
        case "ts":
          return <SiTypescript className={classIcons} />;
        case "js":
          return <SiJavascript className={classIcons} />;
        case "ts":
          return <SiTypescript className={classIcons} />;
        case "tailwind":
          return <SiTailwindcss className={classIcons} />;
        case "node":
          return <SiNodedotjs className={classIcons} />;
        case "firebase":
          return <SiFirebase className={classIcons} />;
        case "next":
          return <SiNextdotjs className={classIcons} />;
        case "react":
          return <FaReact className={classIcons} />;
        case "html":
          return <DiHtml5 className={classIcons} />;
        case "css":
          return <DiCss3 className={classIcons} />;
        case "stm":
          return <SiStmicroelectronics className={classIcons} />;
        case "esp":
          return <SiEspressif className={classIcons} />;
        case "arduino":
          return <SiArduino className={classIcons} />;
        case "cpp":
          return <SiCplusplus className={classIcons} />;
        case "python":
          return <SiPython className={classIcons} />;
      }
    });
    setCategories(icons);
  }, []);

  //console.log("test", props.category)

  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
      className="mt-[32px]"
    >
      <img
        src={props.img}
        alt="image project"
        className="border-2 border-[#ABAAAA]"
        width="331"
      />
      <h2 className="mt-2 text-[24px] text-[#01A7C2]">{props.title}</h2>

      <div className="flex text-[#ABAAAA] mb-3 text-[16px]">{categories}</div>
      <div>
        {props.linkSite != "" && (
          <button className="py-1 border-2 border-[#01A7C2] bg-[#01A7C2] text-white w-[80px] mr-[20px]">
            <a href={props.linkSite} rel="noreferrer" target="_blank">
              Visitar
            </a>
          </button>
        )}
        {props.linkRepo != "" && (
          <button className="py-1 border-2 border-[#01A7C2] mr-[20px] text-[#01A7C2] w-[80px] ">
            <a href={props.linkRepo} rel="noreferrer" target="_blank">
              Repo
            </a>
          </button>
        )}
        {props.isArticle && (
          <button className="py-1 border-2 border-[#ABAAAA] bg-[#ABAAAA] text-white mr-[20px] w-[80px] ">
            <a
              href={`./projects/${props.title}`}
              rel="noreferrer"
              target="_blank"
            >
              About
            </a>
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default CardProject;
/*

*/
