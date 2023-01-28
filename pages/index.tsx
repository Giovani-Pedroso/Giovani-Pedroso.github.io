import type { NextPage } from "next";
import Intro from "../components/Home/Intro";
import Tecnologias from "../components/Home/Tecnologias";
//import Highlights from "../components/Home/Highlights";
import Projects from "../components/Home/Projects";
import Tutorials from "../components/Home/Tutorial";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="pt-30px">
      <Navbar />
      <div className="min-h-[200vh] mt-[50px] font-main px-[5%]">
        <Intro />
        <Tecnologias />
        {/* <Highlights /> */}
        <Tutorials />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
