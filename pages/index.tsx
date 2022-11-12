import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Intro from "../components/Home/Intro";
import Tecnologias from "../components/Home/Tecnologias";
import Highlights from "../components/Home/Highlights";
import Projects from "../components/Home/Projects";
import Tutorials from "../components/Home/Tutorial";

const Home: NextPage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-[200vh] font-main px-[5%]">
        <Intro />
        <Tecnologias />
        <Highlights />
        <Tutorials />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
