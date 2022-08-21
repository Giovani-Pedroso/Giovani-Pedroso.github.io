
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import axios from 'axios'

import CardProject from '../../components/Home/CardProject'

const url = 'http://localhost:5000'

const : NextPage = () => {
  const [allPosts, setAllPosts] = useState([])

  useEffect(() => {

    const getProjects = async () => {
      try {

        const req: any = await axios.get(`${url}/get-post/projects/`)
        console.log("The return ", req)
        setAllPosts(req.data)
      }
      catch (err) {
        console.log(err)
        alert(err.message)
      }
    }
    getProjects()

  }, [])


  const cardsRequest = () => {
    return allPosts.map(project => {
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
    <div className="min-h-[200vh] font-main px-[5%]">
      <h1 className="text-[#01A7C2] text-[36px] mb-2 font-[300]">Projects</h1>

      <div className="flex justify-between flex-wrap">
        {cardsRequest()}
      </div>
    </div>
  )
}

export default Home
