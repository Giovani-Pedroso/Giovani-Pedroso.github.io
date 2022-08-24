import Link from 'next/link'
import { GrLinkedin } from 'react-icons/gr'
import { SiFiverr, SiGithub } from 'react-icons/si'
import { motion } from 'framer-motion'

const linkVariants = {
  holver: {
    scale: 1.4
  },
  tap: {
    scale: 0.8
  }

}

const Intro = () => {
  return (
    <header className="flex flex-col justify-between mb-[60px] md:flex-row">
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src="./images/place-holder-profile.png" alt="profile picture" width="466" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}

        className="flex flex-col max-w-[366px] text-right justify-center">

        {/*
	<h1 className="text-right text-primary text-[36px] ">
          Hi
        </h1>
	  */}
        <p className="my-6">
          Hello, I am <span className="text-primary">Giovani</span>, I{"'"}m a  {/*freelancer*/} front-end developer based in São Paulo - Brazil
        </p>
        <div className="flex justify-end text-[36px] w-full text-primary ">

          {/*
	  <motion.button
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.8 }}
            className="border-2 border-[#01A7C2] bg-[#01A7C2] text-white p-2">
            <a href="https://www.fiverr.com/users/giovani_pedroso" target="_blank">Contate me</a>
          </motion.button>
	  */}

          <motion.a href="https://www.linkedin.com/in/giovani-sant-ana/"
            variants={linkVariants}
            whileHover="holver"
            whileTap="tap"
            className=" ml-[40px]"
            target="_blank">
            <GrLinkedin />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/giovani-sant-ana/"
            variants={linkVariants}
            whileHover="holver"
            whileTap="tap"
            className=" ml-[40px]"
            target="_blank">
            <SiGithub className="" />
          </motion.a>
          <motion.a href="https://www.fiverr.com/users/giovani_pedroso"
            variants={linkVariants}
            whileHover="holver"
            whileTap="tap"
            className=" ml-[40px]"
            target="_blank">
            <SiFiverr className="" />
          </motion.a>
        </div>
      </motion.div>
    </header >
  )
}

export default Intro
