//import { useEffect, useState } from "react";
//import axios from "axios";
import TutorialCard from "./TutorialCard";
//import { url } from "../../utils/const";
//import ReactLoading from "react-loading";
import tutorials from "../../content/tutorials.json";
import Link from "next/link";

const Blog = () => {
  const cardsRequest = () => {
    const newestTutorials = tutorials.slice(0, 4);
    return newestTutorials.map((tutorial: any) => {
      const dataPost = tutorial;
      return (
        <TutorialCard
          img={dataPost.img}
          category={dataPost.category}
          title={dataPost.title}
          description={dataPost.description}
          key={dataPost.title}
        />
      );
    });
  };

  return (
    <section className="my-[60px]">
      <div className="flex flex-row items-baseline">
        <h1 className="text-[#01A7C2] text-[36px] mb-2 font-[300] mr-6">
          Blog{" "}
        </h1>
        <Link href="./blog">
          <a className="text-[20px] text-[#01A7C2]  underline">See all</a>
        </Link>
      </div>
      <div>
        <div className="flex justify-between flex-wrap">{cardsRequest()}</div>
      </div>
    </section>
  );
};

export default Blog;
