"use client";
import CustomButton from "./CustomButton";

import React, { useState } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";

type Props = {
  title: string;
  index: number;
  description: string;
};

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;


const variants: Variants = {
  open: {
    //   display: "block",
    opacity: 1,
    height: "auto",
    marginTop: isMobile ? 25: 50,
    transition: {
      duration: 1.5,
    //   ease: [0, 0.71, 0.2, 1.01],
    //   staggerChildren: 0.17,
    //   delayChildren: 0.2,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    marginTop: 0,

    clear: "both",
    transition: {
      duration: 1.5,
    },
  },
};

const ServiceListItem = ({ title, index, description }: Props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex flex-col items-start justify-start w-full">
      <div
        className={`flex flex-col items-center py-4 md:py-10 xs:py-6 border-b-[1px] justify-between w-full ${
          index == 0 && "border-t-[1px]"
        }`}
        onClick={() => setToggle(!toggle)}
      >
        <div
          className="flex items-center  justify-between text-s w-full"
          onClick={() => setToggle(!toggle)}
        >
          <h2 className="text-white text-[3vw] xs:text-[2.5vw] md:text-[2vw] font-book"> 0{index + 1}.</h2>
          <div className="text-start">
            <h2 className="text-white text-[3vw] xs:text-[2.5vw] md:text-[2vw] font-book"> {title} </h2>
          </div>
          <CustomButton
            backgroundColor="bg-secondary"
            arrowColor="dark"
            size="w-[4vw] h-[4vw] xs:w-[3vw] xs:h-[3vw] md:w-[2.5vw] md:h-[2.5vw]"
            rotate={`${!toggle ? "rotate-[135deg]" : "rotate-[315deg]"}`}
            arrowSize="w-[1.5vw] xs:w-[1vw] md:w-[0.8vw]"
            cursor="cursor-pointer"
          />
        </div>
        <AnimatePresence>
          {toggle && (
            <motion.div
              variants={variants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex items-center  justify-between  w-full"
              onClick={() => setToggle(!toggle)}
            >
              <p className="text-white text-[2vw] leading-[4vw] font-book">
                {" "}
                {description}{" "}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServiceListItem;
