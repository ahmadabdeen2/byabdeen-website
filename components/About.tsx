'use client'
import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/logo.svg";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";



const About = () => {

  return (
    <div className="bg-background px-4 md:px-16 font-random w-full">
      <div className="border-x-[1px] border-secondary px-5 xs:px-10 py-4">
        <div className='flex flex-col items-start justify-start mt-2 md:mt-10'>
        <h2 
 
        className="text-[7vw]  text-secondary font-random font-semibold "> Creadev Engineer</h2>
        <p 
       
        className='text-[3vw] md:text-[2vw] leading-[5vw] md:leading-[3.5vw] font-random text-secondary  mt-2'> I am a Creative Developer Designer Engineer. I like to tackle all of the steps in a project, beginning with the initial UX research all the way to developing the platform backend.  I usually spend all of my days on my computer, exposing my self to the latest trends and products because I am a firm believer that in this industry, if you miss one week, you would miss a year worth of content and updates. </p> 
<div className="flex items-center justify-center  mt-6 md:mt-16">
      <CustomButton backgroundColor={"bg-primary"} arrowColor={"light"} size={"w-[5vw] h-[5vw]"} rotate={"-rotate-0"} arrowSize={'w-[1.5vw] h-[1.5vw]'} />
     <div 
      
      className='flex items-center  justify-center'>  <Link href='/blog' className='text-secondary font-random font-medium ml-5 text-[3vw] md:text-[2vw]'> Talk to me</Link> </div>
      </div>
     </div> 
      </div>
    </div>
  );
};

export default About;
