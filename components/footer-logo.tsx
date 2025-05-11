"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function FooterLogo() {
  return (
    <motion.div 
      className="w-36 h-20 relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
    >
      <Image src="/logo.png" alt="MANDE" fill className="object-contain" priority />
    </motion.div>
  )
} 