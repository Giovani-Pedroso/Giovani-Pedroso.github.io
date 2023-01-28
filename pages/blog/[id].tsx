import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

//import styles from "./styles.module.scss";

const Home: NextPage = () => {
  const router = useRouter();
  const id: any = router.query.id;
  const [html, setHtml] = useState("");

  useEffect(() => {
    const getHtml = async () => {
      try {
        const idSpaces = id.replace("%20", " ");
        /*This files were generated using the publish function
       of org mode*/
        const html = await import(`../../content/tutorials/${idSpaces}.html`);
        setHtml(html.default);
      } catch (err) {
        setHtml("Article not found");
      }
    };

    getHtml();
  }, []);
  //console.log(test);

  return (
    <div className="pb-[28px] pt-[30px] ">
      <Navbar />
      <div className="font-main mt-[40px] px-[5%] ">
        <h1 className="text-primary text-[40px] mb-[20px]">{id}</h1>
        {/*The styles of the articles were defined int
        global.css file*/}
        <div id="html_org" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
};

export default Home;
