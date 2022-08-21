import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { HiMenu, HiOutlineX } from 'react-icons/hi'

const Navbar = () => {
  const controlNav = useAnimation()
  const controlBtn = useAnimation()

  const [navStyle, setNavStyle] = useState('bg-[#fff] text-[#01A7C2]')
  const [navOpen, setNavOpen] = useState(false)
  const changeBackGround = () => {
    if (window.scrollY > 100) {
      controlNav.start({
        backgroundColor: "#01A7C2",
        color: "white",
        transition: { duration: .1 }

      })
      controlBtn.start({
        backgroundColor: "#fff",
        color: "#01A7C2",
        transition: { duration: .1 }
      })
      //setNavStyle('bg-[#01A7C2] text-white shadow-lg')
    }
    else {
      controlNav.start({
        backgroundColor: "#fff",
        color: "#01A7C2",
        transition: { duration: .2 }
      })
      controlBtn.start({
        backgroundColor: "#01A7C2",
        color: "white",
        transition: { duration: .2 }

      })
      //setNavStyle('bg-[#fff] text-[#01A7C2]')
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackGround);
  }, []);

  return (
    <motion.nav
      animate={controlNav}
      className={`flex flex-col z-50 w-full sticky items-center text-[#01A7C2] top-0 left-0 md:p-2 text-[24px] md:px-[5%] justify-between md:p-2 md:flex-row pb-4`}>
      <div className="flex w-full  justify-between px-3 md:p-0 ">
        <h1 className="font-[500]">
          <Link href="./">
            Giovani SFPV
          </Link>
        </h1>
        <button className="p-2 md:hidden"
          onClick={() => setNavOpen(!navOpen)}>
          {navOpen ?
            <HiMenu />
            :
            <HiOutlineX />
          }
        </button>
      </div>
      {/*
	*/}
      <div className="md:flex w-full hidden justify-end items-center">
        <ul className=" md:flex ">
          <li className="mr-[40px] ">
            <Link href="/projects">
              Projects
            </Link>
          </li>
          <li className="text-right mr-[40px] ">
            <Link href="/blog">
              Blog
            </Link>
          </li>
          <li >
            <motion.button
              animate={controlBtn}
              className="py-1 px-3 bg-[#01A7C2] rounded text-white">
              <a>
                Resume
              </a>
            </motion.button>
          </li>
          {/*
        <li className="mr-[40px]">
          <Link href="./create-post">
            Create Post
          </Link>
        </li>
	  */}
        </ul>

      </div>

    </motion.nav >
  )
}

export default Navbar
