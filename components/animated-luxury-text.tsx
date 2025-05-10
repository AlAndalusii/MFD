"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function AnimatedLuxuryText() {
  // State for typing animation
  const [displayText, setDisplayText] = useState("");
  const fullText = "LOADING";
  
  // Typing effect
  useEffect(() => {
    let currentIndex = 0;
    let direction = 1; // 1 for typing, -1 for erasing
    
    const interval = setInterval(() => {
      if (direction === 1) {
        // Typing forward
        if (currentIndex < fullText.length) {
          setDisplayText(fullText.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          // When we reach the end, pause before erasing
          setTimeout(() => {
            direction = -1;
          }, 1500);
        }
      } else {
        // Erasing backward
        if (currentIndex > 0) {
          currentIndex--;
          setDisplayText(fullText.substring(0, currentIndex));
        } else {
          // When fully erased, start typing again
          direction = 1;
          // Small pause before starting to type again
          setTimeout(() => {}, 500);
        }
      }
    }, 150); // Speed of typing
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative text-center">
      <div className="text-3xl md:text-4xl font-poppins font-light tracking-wider h-[1.2em] uppercase">
        {/* Typing animation for "LOADING" */}
        <motion.span
          className="inline-block relative"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
        >
          {displayText}
          <motion.span 
            className="inline-block w-[3px] h-[0.9em] bg-black ml-1 align-middle"
            animate={{ 
              opacity: [1, 0, 1],
              transition: { 
                repeat: Infinity, 
                duration: 0.8
              }
            }}
          />
        </motion.span>
      </div>
      
      {/* Gold accent line that appears after text */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-amber-700/60 to-transparent"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ 
          duration: 1.2, 
          delay: 0.2,
          ease: [0.25, 0.1, 0.25, 1] 
        }}
      />
      
      <motion.div 
        className="absolute -inset-1 bg-gradient-to-tr from-amber-200/10 via-amber-100/5 to-transparent rounded-sm blur-xl -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </div>
  )
} 