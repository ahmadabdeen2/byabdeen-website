"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/logo.svg";
import { useState } from "react";
import {motion, AnimatePresence} from 'framer-motion'
import {useRouter} from 'next/navigation'


const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [pageExit, setPageExit] = useState(false)
  const NavbarLinks = [
    {
      id: "HOME1",
      name: "Home",
      link: "/",
    },
    {
      id: "BLOG2",
      name: "Blog",
      link: "/blog",
    },
    {
      id: "PORTFOLIO3",
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      id:'CV',
      name: 'Resume',
      link: 'https://s3.me-south-1.amazonaws.com/byabdeen.com/Ahmad_Abdeen_CV_08_23.pdf'
    }
  ];
  const router = useRouter()
  const handleClick = (e: any , link: any) => {
    e.preventDefault()

    setPageExit(true)
    router.push(link.link)
    setTimeout(() => {
      setPageExit(false)
    }, 3000)
    




  }
  const variants = {
    hidden: {opacity: 0, y:'100vh'},
    enter: { opacity: 1, y:0},
    exit: { opacity: 0, y:'100vh'},
}

  return (
    
    
    <>
    
    {/* <motion.div 
    variants={variants}
    initial = 'hidden'
    animate = 'enter'
    exit = 'exit'
    transition = {{duration: 2}}
    className="absolute w-[100vh] h-[100vh] bg-white z-50"></motion.div> */}
    <div className="bg-background px-4 md:px-16 font-random w-full">
      <div className="flex items-center justify-between border-x-[1px] border-secondary px-5 xs:px-10 py-4 mt-5">
        <Link href='/' className="flex items-center justify-center">
          <Image src={logo} alt="logo" width={50} />
        </Link>
        <ul className="hidden list-none xs:flex xs:flex-row items-end justify-end text-end">
          {NavbarLinks.map((link, index) => (
            <li
              key={index}
              className="px-4 py-2 font-random font-book  text-secondary hover:text-primary transition ease-in-out duration-300 text-md lg:text-xl"
            >

              <Link href={link.link
              }
              
              target={link.name === 'Resume' ? "_blank" : ""}

              >{link.name}</Link>

            </li>
          ))}
        </ul>
        <div
          className="space-y-2 xs:hidden transition ease-in-out duration-500 "
          onClick={() => setToggle(!toggle)}
        >
          <span className={`block w-8 h-0.5 bg-secondary`}></span>
          <span
            className={`block w-8 h-0.5 bg-secondary transition ease-in-out duration-500 ${
              toggle && "opacity-0"
            }`}
          ></span>
        </div>
        <div
          className={`${
            toggle ? "block" : "hidden"
          } flex p-6 bg-background border-2 border-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[100]`}
        >
          <ul className="list-none xs:hidden flex flex-col justify-start items-center flex-1">
            {NavbarLinks.map((link, index) => {
              return (
                <li
                  key={link.id}
                  className={`font-random  cursor-pointer text-[15px] py-2 text-lg text-secondary font-book`}
                >
                 
                  <Link onClick={() => setToggle(!toggle)} href={link.link}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
          
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Header;
