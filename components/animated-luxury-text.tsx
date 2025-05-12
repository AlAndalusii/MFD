"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function AnimatedLuxuryText({ onTypingComplete }: { onTypingComplete?: () => void }) {
  // State for typing animation
  const [displayText, setDisplayText] = useState("");
  const fullText = "MANDE";
  
  // Typing effect - only once, more deliberate typing
  useEffect(() => {
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
        
        // When typing is complete, notify parent
        if (currentIndex === fullText.length) {
          if (onTypingComplete) {
            // Small pause after typing completes before triggering the next elements
            setTimeout(() => {
              onTypingComplete();
            }, 300);
          }
        }
      } else {
        clearInterval(interval);
      }
    }, 220); // Slower typing for more deliberate effect
    
    return () => clearInterval(interval);
  }, [onTypingComplete]);
  
  return (
    <div className="relative text-center">
      <div className="text-3xl md:text-4xl tracking-wider h-[1.2em] uppercase">
        {/* Typing animation for "MANDE" */}
        <motion.span
          className="inline-block relative"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          style={{ fontFamily: "var(--font-lemon-milk)" }}
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
            style={{ display: displayText.length === fullText.length ? 'none' : 'inline-block' }}
          />
        </motion.span>
      </div>
      
      {/* Enhanced glow effect */}
      <motion.div 
        className="absolute -inset-2 bg-gradient-to-tr from-amber-200/15 via-amber-100/10 to-transparent rounded-sm blur-xl -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </div>
  )
} 