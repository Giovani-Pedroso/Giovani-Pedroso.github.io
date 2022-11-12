import { useEffect, useState } from "react";
import axios from "axios";
import TutorialCard from "./TutorialCard";
import { url } from "../../utils/const";
import ReactLoading from "react-loading";
import tutorials from "../../content/tutorials.json";

const Blog = () => {
  const cardsRequest = () => {
    return tutorials.map((tutorial: any) => {
      const dataPost = tutorial;
      console.log(dataPost);
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
      <h1 className="text-[#01A7C2] text-[36px] mb-2 font-[300]">Tutorials</h1>
      <div>
        <div className="flex justify-between flex-wrap">{cardsRequest()}</div>
      </div>
    </section>
  );
};

export default Blog;
