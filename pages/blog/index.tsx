import type { NextPage } from "next";
/* import { useEffect, useState } from "react";
 * import axios from "axios";
 * import { url } from "../../utils/const"; */

import Navbar from "../../components/Navbar";
import CardBlog from "../../components/Home/TutorialCard";
import tutorials from "../../content/tutorials.json";

const Blog: NextPage = () => {
  const cardsRequest = () => {
    return tutorials.map((project: any) => {
      const data: any = project;
      // console.log("proj", project)
      return (
        <CardBlog
          img={data.img}
          title={data.title}
          category={data.category}
          description={data.description}
          key={project.title}
        />
      );
    });
  };

  return (
    <div className="pb-[28px] pt-[30px] ">
      <Navbar />
      <div className="mt-[40px] mt-[50px] font-main px-[5%]">
        <h1 className="text-[#01A7C2] text-[36px] mb-2 font-[300]">Blog</h1>

        <div className="flex justify-between flex-wrap">{cardsRequest()}</div>
      </div>
    </div>
  );
};

export default Blog;
