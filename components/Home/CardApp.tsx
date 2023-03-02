/* import { FaGooglePlay } from "react-react-icons/fa"; */
import { FaGooglePlay } from "react-icons/fa";
import { motion } from "framer-motion";

const linkVariants = {
  holver: {
    scale: 1.04,
  },
  tap: {
    scale: 0.9,
  },
};

export default function CardApp() {
  return (
    <div className="flex  h-full  md:w-max-[33%] ">
      <motion.a
        href="https://play.google.com/store/apps/details?id=com.giovanisfpv.controledeestoquesimples&pli=1"
        variants={linkVariants}
        whileHover="holver"
        whileTap="tap"
        className=""
        target="_blank"
      >
        <img className="max-h-[100%]" src="https://i.imgur.com/JeWLQBG.jpg" />
      </motion.a>
      {/* <div className="flex flex-col items-end ml-[20px]">
            <h1 className="text-[#01A7C2] text-[20px] mb-[40px] ">
            Controle de estoque simple
            </h1>
            <p className="mb-[40px]">jaksfd kjfasd jfaks</p>
            <FaGooglePlay />
            </div> */}
    </div>
  );
}
