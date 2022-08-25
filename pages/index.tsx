import type { NextPage } from 'next'
import Tecnologias from '../components/Home/Tecnologias'
import Intro from '../components/Home/Intro'
import Projects from '../components/Home/Projects'
import Blog from '../components/Home/Blog'
import Responsivos from '../components/Home/Responsivos'
import RecentWorks from '../components/Home/RecentWorks'
//import dotenv from 'dotenv'

//dotenv.config()

const Home: NextPage = () => {
  return (
    <div className="min-h-[200vh] font-main px-[5%]">
      <Intro />
      <Tecnologias />
      {/*
      <RecentWorks />
      <Responsivos />
      <Blog />
	*/}
      <Projects />
    </div>
  )
}

export default Home
