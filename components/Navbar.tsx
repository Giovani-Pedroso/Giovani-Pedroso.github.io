import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
//import { HiMenu, HiOutlineX } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
const resumeLink =
  "https://docs.google.com/document/d/1TzGyo9hyv_pjDT1WtMasqXjUs3mZh8Rk/edit?usp=sharing&ouid=103350776471574179649&rtpof=true&sd=true";
const Navbar = () => {
  const controlNav = useAnimation();
  const controlBtn = useAnimation();

  const [navStyle, setNavStyle] = useState("bg-[#fff] text-[#01A7C2]");
  const [navOpen, setNavOpen] = useState(false);
  const changeBackGround = () => {
    if (window.scrollY > 40) {
      controlNav.start({
        backgroundColor: "#01A7C2",
        color: "white",
        transition: { duration: 0.1 },
      });
      controlBtn.start({
        backgroundColor: "#fff",
        color: "#01A7C2",
        transition: { duration: 0.1 },
      });
      //setNavStyle('bg-[#01A7C2] text-white shadow-lg')
    } else {
      controlNav.start({
        backgroundColor: "#fff",
        color: "#01A7C2",
        transition: { duration: 0.2 },
      });
      controlBtn.start({
        backgroundColor: "#01A7C2",
        color: "white",
        transition: { duration: 0.2 },
      });
      //setNavStyle('bg-[#fff] text-[#01A7C2]')
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackGround);
  }, []);

  return (
    <motion.nav
      animate={controlNav}
      className={`flex z-50 w-full fixed items-center text-[#01A7C2]  left-0 text-[24px] md:px-[5%] justify-between p-2 flex-row top-0 md:top-0`}
    >
      <div className="flex w-full  justify-between px-3 md:p-0 ">
        <h1 className="font-[500]">
          <Link href="/">
            <div className="cursor-pointer">
              <div className="text-[0px] md:text-[24px]">Giovani SFPV</div>
              <div className="text-[24px] md:text-[0px]">
                <IoHomeOutline />
              </div>
            </div>
          </Link>
        </h1>
        {/*
        <button className="p-2 md:hidden"
          onClick={() => setNavOpen(!navOpen)}>
          {navOpen ?
            <HiMenu />
            :
            <HiOutlineX />
          }
        </button>
	*/}
      </div>
      <div className="flex w-full justify-end items-center">
        <ul className="flex ">
          <li className="mr-[40px] ">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="text-right mr-[40px] ">
            <Link href="/blog">Blog</Link>
          </li>
          {/* <li>
            <motion.button
              animate={controlBtn}
              className="py-1 px-3 bg-[#01A7C2] rounded text-white"
            >
              <a href={resumeLink} rel="noreferrer" target="_blank">
                Resume
              </a>
            </motion.button>
          </li> */}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
