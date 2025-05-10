"use client"

import { motion } from "framer-motion"

export default function AnimatedAccents() {
  return (
    <>
      <motion.div 
        className="absolute top-0 left-0 w-32 h-32 overflow-hidden opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="w-8 h-8 border-t-2 border-l-2 border-amber-600 absolute top-8 left-8"></div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-0 right-0 w-32 h-32 overflow-hidden opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 1.6 }}
      >
        <div className="w-8 h-8 border-b-2 border-r-2 border-amber-600 absolute bottom-8 right-8"></div>
      </motion.div>
    </>
  )
} 