import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import * as Showdown from "showdown";
import { url } from '../../utils/const'

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

const Home: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [content, setContent] = useState({})

  useEffect(() => {
    const getProject = async () => {
      try {
        const req: any = await axios.get(`${url}/get-post/blog/${id}`)
        setContent(req.data)

      }
      catch (err) {
        console.log(err)
        alert(err.message)
      }
    }
    getProject()


  }, [])

  return (

    <div className="font-main mt-[40px] px-[5%] ">
      <h1 className="text-[#01A7C2] text-[36px] mb-2 font-[300]">{content.title}</h1>
      <p className="text-[16px] text-[#ABAAAA]">{content.description}</p>
      <article className="mt-[40px]">
        <img className="text-center" src={content.imgLink} />
        <div className="post" dangerouslySetInnerHTML={{ __html: converter.makeHtml(content.content) }} />
      </article>
    </div>
  )
}

export default Home
