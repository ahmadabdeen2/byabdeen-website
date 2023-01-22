'use client';
import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/logo.svg";
import { motion } from 'framer-motion'
import CustomButton from "./CustomButton";
import ServiceListItem from "./ServiceListItem";

const ServiceItems = [
    {
        id: 1,
        title: 'Frontend Development',
        description: 'I specialize in designing and building user interfaces for web applications using React, Next.js, HTML, CSS, and JavaScript. My job is to bring the design and functionality to life, creating a seamless experience for the end user.',
    },
    {
        id: 2,
        title: 'Backend Development',
        description: 'I specialize in using Django to build and maintain large scale web applications. I also use the Django Rest Framework to create RESTful APIs for the application which allows for seamless communication between the frontend and backend. Additionally, I have experience working with Sanity as a CMS, This website\'s backend is built using Sanity.',
    },
    {
        id: 3,
        title: 'UI/UX Design',
        description: 'My primary focus in UI/UX is to design and improve the user experience of web and mobile applications. I use a variety of tools, including Figma, Illustrator, and Photoshop, to create wireframes, mockups, and interactive prototypes that visually communicate the design and user flow of the application. My job is to understand the user\'s needs, goals, and pain points and translate them into intuitive and visually appealing interfaces. I conduct user research, testing, and analysis to validate design decisions and ensure that the final product meets the user\'s needs.',
    }
]


const Services = () => {

  return (
    <>
    <div className="bg-background px-4 md:px-16 font-random w-full">
      <div className="flex items-center justify-between border-x-[1px] border-secondary px-5 xs:px-10 py-4">
      <div className='flex flex-col items-start justify-start mt-2 md:mt-10 w-full'>
      <motion.h2 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport ={{once:true}}
      className="text-[7vw]  text-secondary font-random font-semibold mb-5"> Services</motion.h2>
      {
        ServiceItems.map((item, index) => (
            <ServiceListItem key={item.id} title={item.title} index={index} description={item.description} />
        ))
      }
      


      </div>
  
       
      </div>
    </div>
    
    </>
  );
};

export default Services;
