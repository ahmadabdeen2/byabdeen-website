"use client";
import React from "react";
import Image from "next/image";
import { Project } from "../typings";
import { urlFor } from "../lib/urlFor";
import CustomButton from "./CustomButton";
import Link from "next/link";
import {motion} from 'framer-motion'

type Props = {
  project: Project;
  flipped: string;
  index: number;
};


const ProjectComponent = ({ project, flipped, index }: Props) => {
  return (
    <Link href={project?.link} className="flex flex-col items-start justify-center w-full h-full">
      <motion.p
                  initial = {{opacity: 0, y: 50}}
                  whileInView = {{opacity: 1, y: 0}}
                  transition = {{duration: 1}}
                  viewport ={{once:true}}
        className={` ${
          flipped == "true" ? "self-start" : "self-end"
        } text-secondary text-[15vw] font-semibold mt-20`}
      >
        {" "}
        {index > 10 ? " " : "0"}
        {index + 1}.{" "}
      </motion.p>
      <div
        className={`flex flex-col xs:flex-row mt-20 justify-between w-full items-center ${
          flipped == "true" ? "flex-row-reverse" : "flex-row"
        } h-full`}
      >
        <motion.div className={`xs:w-[38vw] w-[100%]`}
        initial = {{opacity: 0, y: flipped == "true" ? 100 : -100}}
        whileInView = {{opacity: 1, y: 0}}
        transition = {{duration: 1}}
        viewport ={{once:true}}
        >
          <Image
            src={urlFor(project?.mainImage).url()}
            alt={project.title}
            width={2000}
            height={2000}
          />
        </motion.div>
        <div className={`flex flex-col h-full xs:max-w-[40%] w-full`}>
          <div className="flex items-start justify-start mt-5 xs:mt-0">
            {project?.categories?.map((category, index) => (
              <motion.p 
              initial = {{opacity: 0, x: flipped == "true" ? 50 : -50}}
              whileInView = {{opacity: 1, x: 0}}
              transition = {{duration: 1}}
              viewport ={{once:true}}
              className="text-secondary text-[2vw] xs:text-[1.2vw] font-light pr-1">
                {category?.title}
                {index !== project?.categories.length - 1 ? " |  " : ""}
              </motion.p>
            ))}
          </div>
          <motion.h2 
              initial = {{opacity: 0, x: flipped == "true" ? -50 : 50}}
              whileInView = {{opacity: 1, x: 0}}
              transition = {{duration: 1}}
              viewport ={{once:true}}
          className="text-secondary text-[6vw] xs:text-[3vw] font-semibold">

            {project?.title} 
          </motion.h2>

          <Link
            href={project?.link}
            className="flex items-center justify-start mt-10"
          >
            <CustomButton
              backgroundColor="bg-primary"
              arrowColor="light"
              size="w-[10vw] h-[10vw] xs:w-[5vw] xs:h-[5vw]"
              rotate="rotate-0"
              arrowSize="w-[3vw] xs:w-[1.5vw]"
            />
            <p className="text-secondary text-[3vw] xs:text-[1.5vw] font-light pl-4">
              View Project
            </p>
          </Link>
        </div>
      </div>
   
    </Link>
  );
};

export default ProjectComponent;
