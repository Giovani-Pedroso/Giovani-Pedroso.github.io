import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../../utils/const'

import CardBlog from '../../components/Home/CardBlog'

const Blog: NextPage = () => {
  const [allPosts, setAllPosts] = useState([])

  useEffect(() => {

    const getBlog = async () => {
      try {

        const req: any = await axios.get(`${url}/get-post/blog/`)
        console.log("The return ", req)
        setAllPosts(req.data)
      }
      catch (err: any) {
        console.log(err)
        alert(err.message)
      }
    }
    getBlog()

  }, [])


  const cardsRequest = () => {
    return allPosts.map((project: any) => {
      const data: any = project.postData
      // console.log("proj", project)
      return (
        <CardBlog img={data.imgLink}
          title={data.title}
          category={data.category}
          description={data.description}
          id={project.postId}
          key={project.postId}
        />
      )
    })
  }

  return (
    <div className="mt-[40px] font-main px-[5%]">
      <h1 className="text-[#01A7C2] text-[36px] mb-2 font-[300]">Blog</h1>

      <div className="flex justify-between flex-wrap">
        {cardsRequest()}
      </div>
    </div>
  )
}

export default Blog
