import { useEffect, useState } from "react";
import axios from "axios";
import TutorialCard from "./TutorialCard";
import { url } from "../../utils/const";
import ReactLoading from "react-loading";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const req: any = await axios.get(`${url}/get-post/blog/`);
        // console.log("The return ", req)
        setBlogPosts(req.data);
      } catch (err: any) {
        console.log(err);
        alert(err.message);
      }
    };

    getData();
    setIsLoading(false);
  }, []);

  const cards = (num: number) => {
    let cards = [];

    for (let i = 0; i != num; i++) {
      cards.push(
        <TutocialCard
          img="./images/placeholder-blog-0.png"
          title="Florest site"
          category="Teste"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nisi bibendum commodo purus bibendum sit mauris. Tortor lobortis elit augue eu magna."
        />
      );
    }

    return cards;
  };
  const cardsRequest = () => {
    //  console.log(blogPosts)
    //return "aaaaaaaaaaaa"

    return blogPosts.map((post: any) => {
      const dataPost = post.postData;
      console.log(dataPost);
      return (
        <TutorialCard
          img={dataPost.imgLink}
          category={dataPost.category}
          title={dataPost.title}
          description={dataPost.description}
          key={post.postId}
        />
      );
    });
  };

  return (
    <section className="my-[60px]">
      <h1 className="text-[#01A7C2] text-[36px] mb-2 font-[300]">Blog</h1>
      <div>
        {isLoading && (
          <div className="flex justify-center items-center  ">
            <ReactLoading
              type={"bars"}
              color={"#01A7C2"}
              height={100}
              width={100}
            />
          </div>
        )}
        <div className="flex justify-between flex-wrap">{cardsRequest()}</div>
      </div>
    </section>
  );
};

export default Blog;
