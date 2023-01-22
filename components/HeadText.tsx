'use client'

import {motion , AnimatePresence} from 'framer-motion'

type Props = {
    text: string
}
const HeadText = ({text}: Props) => {
  return (
    <motion.h2 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport ={{once:true}}
    className="text-[15vw] mb-10 xs:mb-5 md:mb-4 lg:mb-0 underline decoration-6 underline-offset-8  text-secondary font-random font-semibold "> {text}</motion.h2>
  )
}

export default HeadText