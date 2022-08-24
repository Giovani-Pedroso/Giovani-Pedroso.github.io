import { useState } from 'react'
import type { NextPage } from 'next'
//import Editor from '../components/create-post/Editor'
import axios from 'axios'
const labelStyle = "text-[#01A7C2] text-[26px]"
const inputStyle = "mb-6 active:border-0"

//it will be change
const url = 'http://localhost:5000'

const CreatePost: NextPage = () => {
  const [imgLink, setImgLink] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [categories, setCategories] = useState('')
  const [linkSite, setLinkSite] = useState('')
  const [linkRepo, setLinkRepo] = useState('')
  const [tolken, setTolken] = useState('')
  const [content, setContent] = useState("")
  const [isArticle, setIsArticle] = useState("false")

  const handleSaveDraft = () => {
    const body = {
    }

    console.log("Saved test", body)
  }

  const handleCreatePost = async () => {
    let body = {}

    if (isArticle == "true") {
      body = {
        imgLink,
        title,
        description,
        category,
        content,
        isArticle,
        tolken
      }
    }
    else {

      const categoriesArray = categories.split(" ").join("").split(";")

      body = {
        imgLink,
        title,
        linkRepo,
        linkSite,
        categories: categoriesArray,
        content,
        isArticle,
        tolken
      }
    }
    try {
      const data = await axios.post(`${url}/create-post-blog`, body)
      alert("post saved")
      console.log("data axios: ", data)

      setImgLink('')
      setTitle('')
      setDescription('')
      setCategory('')
      setCategories('')
      setLinkSite('')
      setLinkRepo('')
      setTolken('')
      setContent("")
    }
    catch (err) {
      console.log(err)
    }
    console.log("Create test ", body)
  }

  return (
    <div className="px-[5%]">
      <h1 className="text-[#01A7C2] text-[36px] my-6 font-[500] " >Create
        <span className="border-2 mx-2 border-[#01A7C2] p-2">
          <button onClick={() => setIsArticle("true")}
            className={isArticle == "false" ? "text-[#ABAAAA]" : ""}> Blog </button>
          {" | "}
          <button onClick={() => setIsArticle("false")}
            className={isArticle == "true" ? "text-[#ABAAAA]" : ""}>
            Project
          </button>
        </span>

        Post</h1>
      <form className="flex flex-col">

        <label className={labelStyle}>Image Baner:</label>
        <input value={imgLink}
          className={inputStyle}
          onChange={(e) => setImgLink(e.target.value)}
          placeholder="Link image"
          required
        />

        <label className={labelStyle}>Title:</label>
        <input value={title}
          className={inputStyle}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Title" />

        {isArticle == "true" &&
          <div className="flex flex-col">
            <label className={labelStyle}>Description:</label>

            <input value={description}
              className={inputStyle}
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder="Description" />
            <label className={labelStyle}>Category:</label>
            <input value={category}
              className={inputStyle}
              onChange={(e) => setCategory(e.target.value)}
              required
              placeholder="Category" />

          </div>
        }


        {isArticle == "false" &&
          <div className="flex flex-col">
            <label className={labelStyle}>Link site:</label>
            <input value={linkSite}
              className={inputStyle}
              onChange={(e) => setLinkSite(e.target.value)}
              required
              placeholder="Link site" />

            <label className={labelStyle}>Link Repo:</label>
            <input value={linkRepo}
              className={inputStyle}
              onChange={(e) => setLinkRepo(e.target.value)}
              required
              placeholder="Description" />

            <label className={labelStyle}>Categories:</label>
            <input value={categories}
              className={inputStyle}
              onChange={(e) => setCategories(e.target.value)}
              required
              placeholder="Separate the categories with ; example: next;js;firebase" />
          </div>
        }

        <label className="text-[#01A7C2] text-[26px]  ">Content</label>

        {/*
	<Editor value={content} setValue={setContent} />
	*/}

        <label className={`${labelStyle} mt-6`}>Tolken:</label>
        <input value={tolken}
          className={inputStyle}
          type="password"
          onChange={(e) => setTolken(e.target.value)}
          required
          placeholder="Tolken" />


        <div className="my-[30px]">
          <button type="button"
            onClick={handleCreatePost}
            className="py-1 border-2 border-[#01A7C2] bg-[#01A7C2] text-white w-[150px] mr-[20px]">
            Create Post</button>



          <button type="button"
            onClick={handleSaveDraft}
            className="py-1 border-2 border-[#01A7C2] mr-[20px] text-[#01A7C2] w-[150px] ">
            Save draft
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost
