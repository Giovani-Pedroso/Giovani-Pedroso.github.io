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

import { TbBrandNextjs } from 'react-icons/tb'
import { DiHtml5, DiCss3 } from 'react-icons/di'

import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiFirebase,
  SiNextdotjs,
  SiPython,
  SiArduino,
  SiCplusplus,
  SiStmicroelectronics,
  SiEspressif,
} from 'react-icons/si'

import { FaReact } from 'react-icons/fa'

const classIcons = "mr-[10px]"

const Home: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [content, setContent] = useState({})
  const [categories, setCategories] = useState([])
  const [article, setArticle] = useState()

  useEffect(() => {
    const getProject = async () => {
      try {
        const req: any = await axios.get(`${url}/get-post/projects/${id}`)
        setContent(req.data)

        const cat = req.data.categories.sort()
        //const cat = props.ca
        const icons = cat.map(icon => {
          switch (icon) {
            case 'ts':
              return <SiTypescript className={classIcons} />
            case 'js':
              return <SiJavascript className={classIcons} />
            case 'ts':
              return <SiTypescript className={classIcons} />
            case 'tailwind':
              return <SiTailwindcss className={classIcons} />
            case 'node':
              return <SiNodedotjs className={classIcons} />
            case 'firebase':
              return <SiFirebase className={classIcons} />
            case 'next':
              return <SiNextdotjs className={classIcons} />
            case 'react':
              return <FaReact className={classIcons} />
            case 'html':
              return <DiHtml5 className={classIcons} />
            case 'css':
              return <DiCss3 className={classIcons} />
            case 'stm':
              return <SiStmicroelectronics className={classIcons} />
            case 'esp':
              return <SiEspressif className={classIcons} />
            case 'arduino':
              return <SiArduino className={classIcons} />
            case 'cpp':
              return <SiCplusplus className={classIcons} />
            case 'python':
              return <SiPython className={classIcons} />
          }
        })
        setCategories(icons)



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
      <div className="text-[30px] text-[#ABAAAA]">{categories}</div>
      <article className="mt-[40px]">
        <img className="text-center" src={content.imgLink} />
        <div className="post" dangerouslySetInnerHTML={{ __html: converter.makeHtml(content.content) }} />
      </article>
    </div>
  )
}

export default Home
