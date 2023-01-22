'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import spinningcircle from "../public/assets/spinningcircle.svg";
const Hero = () => {
  return (
    <div className="bg-background px-4 md:px-16 font-random w-full  ">
      <div className="relative -z-2 flex flex-col items-start justify-center xs:justify-evenly border-x-[1px] border-secondary py-4  w-full ">
        <div className="relative px-5 xs:px-10 mt-32 md:mt-10">
          <motion.p
          initial = {{opacity:0, x:30}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:1}}
          viewport ={{once:true}}
          className="text-[11vw] md:text-[9vw] md:leading-[9vw] leading-[13vw] font-bold text-secondary font-random">
            CREATIVE<span className="text-primary">,</span>
          </motion.p>
          <motion.p
          initial = {{opacity:0, x:-30}}
          animate = {{opacity:1, x:0}}
          transition={{duration:1}}
          viewport={{once:true}}
           className="text-[11vw] md:text-[9vw] md:leading-[9vw] leading-[13vw] font-bold text-secondary font-random">
            <span className="md:ml-[5vw] lg:ml-[13vw] xl:ml-[11vw]" />
            ENGINEER<span className="text-primary">,</span>
          </motion.p>
          <motion.p
          initial = {{opacity:0, x:10}}
          animate = {{opacity:1, x:0}}
          transition={{duration:1}}
          viewport={{once:true}}
           className="text-[11vw] md:text-[9vw] md:leading-[9vw] leading-[13vw] font-bold text-secondary font-random">
            <span className="md:ml-[9vw] lg:ml-[18vw] xl:ml-[22vw]" />
            DEVELOPER<span className="text-primary">, &</span>{" "}
          </motion.p>
          <motion.p
          initial = {{opacity:0, x:-30}}
          animate = {{opacity:1, x:0}}
          transition={{duration:1}}
          viewport={{once:true}}
           className="text-[11vw] md:text-[9vw] md:leading-[9vw] leading-[13vw] font-bold text-secondary font-random">
            DESIGNER<span className="text-primary">.</span>
          </motion.p>
        </div>
        <div className="w-full h-[1px] bg-secondary p-[-0.5rem] mt-32 md:mt-16" />
        <ul className="flex flex-row items-center justify-between text-center px-5 xs:px-10 w-[100%] mt-6">
          <li className="py-2 font-random font-medium  text-secondary hover:text-primary transition ease-in-out duration-300 text-md lg:text-xl hidden md:flex">
            Ahmad Abdeen
          </li>
          <li className="py-2 font-random font-medium  text-secondary hover:text-primary transition ease-in-out duration-300 text-md lg:text-xl">
            ByAbdeen
          </li>
          <li className="py-2 font-random font-medium  text-secondary hover:text-primary transition ease-in-out duration-300 text-md lg:text-xl">
            hello@byabdeen.com
          </li>
        </ul>
        <div className="relative w-full h-[1px] bg-secondary p-[-0.5rem] mt-6 lg:pt-0" />
        <div className="lg:absolute lg:right-20 lg:bottom-32 md:pt-0 md:absolute md:right-20 md:bottom-50 absolute right-10 bottom-32 ">
          <Image
            src={spinningcircle}
            alt="hero"
            className=" transition duration-1000 animate-spin-slow w-[18vw] md:w-[10vw]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
