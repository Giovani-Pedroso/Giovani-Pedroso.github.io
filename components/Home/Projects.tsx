import { useEffect, useState } from 'react'
import axios from 'axios'
import { FaGlobe, FaPython, FaMicrochip } from 'react-icons/fa'
import { url } from '../../utils/const'
import ReactLoading from 'react-loading'

import CardProject from './CardProject'


const Projects = () => {

  const [projectsPost, setProjectPost] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getProjects = async () => {
      try {

        const req: any = await axios.get(`${url}/get-post/projects/`)
        console.log("The return ", req)
        setProjectPost(req.data)
      }
      catch (err) {
        console.log(err)
        alert(err.message)
      }
    }
    getProjects()

    setIsLoading(false)
  }, [])

  const cards = (num: number) => {
    let cards = []

    for (let i = 0; i != num; i++) {
      cards.push(

        <CardProject img="./images/placeholder-project-1.png"
          title="Florest site"
          category={['next', 'node', 'firebase', 'ts']} linkSite="#" linkRepo="#"
        />
      )
    }


    return cards

  }

  const cardsRequest = () => {
    return projectsPost.map(project => {
      const data = project.postData
      // console.log("proj", project)
      return (
        <CardProject img={data.imgLink}
          title={data.title}
          categories={data.categories}
          content={data.content}
          linkSite={data.linkSite}
          id={project.postId}
          key={project.postId}
          linkRepo={data.linkRepo}
        />
      )
    })

  }

  return (
    <section className="my-[60px]">
      <h1 className="text-[#01A7C2] text-[36px] mb-2 font-[300]">Projects</h1>

      {isLoading &&
        <div className="flex justify-center itens-center  ">
          <ReactLoading type={"bars"} color={"#01A7C2"} height={100} width={100} />
        </div>

      }

      {/*
      <div className="flex text-[#01A7C2] text-[20px] ">
        <FaGlobe className="mr-[20px]" />
        <FaPython className="mr-[20px]" />
        <FaMicrochip className="mr-[20px]" />
      </div>
      */}
      <div className="flex justify-between flex-wrap">
        {cardsRequest()}
      </div>
    </section>
  )
}


export default Projects
