"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/logo.svg";
import { useState } from "react";
import { Project } from "../typings";
import {urlFor} from "../lib/urlFor";
import {motion} from 'framer-motion'
import ProjectComponent from "./ProjectComponent";
import CustomButton from "./CustomButton";


type Props = {
  projects: Project[]
}

const Works = ({projects}: Props) => {
  
  return (
    <div className="bg-background px-4 md:px-16 font-random w-full">
    <div className="border-x-[1px] border-secondary px-5 xs:px-10 py-4">
      <div className='flex flex-col items-start justify-start mt-2 md:mt-10'>
      <motion.h2 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport ={{once:true}}
      className="text-[7vw]  text-secondary font-random font-semibold "> Portfolio</motion.h2>
      {projects.slice(0,3).map((project, index) => (
        <ProjectComponent project={project} flipped = {`${index % 2 !== 0 ? 'true': 'false'}`} index={index} key={project._id} />
      ))}
       <Link href='/portfolio' className="flex w-full items-center justify-end mt-32 relative before:block before:w-[90%] before:bg-secondary before:h-[1px] ">
      <CustomButton
              backgroundColor="bg-secondary"
              arrowColor="dark"
              size="w-[12vw] h-[12vw]"
              rotate="rotate-0"
              arrowSize="w-[5vw]"
            />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Works;
