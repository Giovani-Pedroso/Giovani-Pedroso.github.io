import { motion } from 'framer-motion'
import { DiHtml5, DiCss3 } from 'react-icons/di'

//import { TbBrandNextjs } from 'react-icons/tb'

import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiFirebase,
  SiNextdotjs,
} from 'react-icons/si'

import { FaReact } from 'react-icons/fa'

const Tecnologias = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: .8 }}
      className=" w-full text-tertiary text-[20px] md:text-[30px]">
      <div className="flex flex-wrap justify-between my-[20px] ">
        <DiHtml5 />
        <DiCss3 />
        <SiJavascript />
        <SiTypescript />
        <SiFirebase />
        <SiNextdotjs />
        <SiNodedotjs />
        <FaReact />
        <SiTailwindcss />
      </div>
      <h1 className="text-center text-[20px] font-[400]">I work with</h1>
    </motion.div>
  )
}

export default Tecnologias
