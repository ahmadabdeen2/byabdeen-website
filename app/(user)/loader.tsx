'use client'
import React from 'react'
import { motion } from 'framer-motion'

const loader = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[15vw] mb-10 xs:mb-5 md:mb-4 lg:mb-0 underline decoration-6 underline-offset-8  text-secondary font-random font-semibold "
        
    
    >
        
        loader</motion.div>
  )
}

export default loader