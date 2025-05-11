"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import AnimatedLuxuryText from "@/components/animated-luxury-text"
import SubscriptionForm from "@/components/subscription-form"

export default function AnimatedContent() {
  // State for the description typing animation
  const [descriptionText, setDescriptionText] = useState("");
  const fullDescription = "Designed in Silence. Revealed in Style";
  
  useEffect(() => {
    let index = 0;
    
    // Type out the description letter by letter
    const typingInterval = setInterval(() => {
      if (index < fullDescription.length) {
        setDescriptionText(fullDescription.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 40); // Faster typing speed
    
    return () => clearInterval(typingInterval);
  }, []);
  
  // Disclaimer typing effect
  const [disclaimerText, setDisclaimerText] = useState("");
  const fullDisclaimer = "By subscribing, you agree to our privacy policy and consent to receive updates.";
  
  useEffect(() => {
    // Start this animation after a delay
    const startDelay = setTimeout(() => {
      let index = 0;
      
      const typingInterval = setInterval(() => {
        if (index < fullDisclaimer.length) {
          setDisclaimerText(fullDisclaimer.substring(0, index + 1));
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 20); // Very fast typing for small text
      
      return () => clearInterval(typingInterval);
    }, 2500); // Start after description finishes
    
    return () => clearTimeout(startDelay);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full">
      {/* Center content */}
      <div className="flex flex-col items-center justify-center">
        {/* Animated brand name with typing effect */}
        <div className="mb-12 text-center">
          <AnimatedLuxuryText />
        </div>

        {/* Description with typing effect and subtle animated underline */}
        <div className="relative mb-14 text-center">
          <motion.p 
            className="text-md md:text-lg font-light text-center inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {descriptionText}
            <motion.span 
              className="inline-block w-[2px] h-[0.9em] bg-black ml-1 align-middle"
              animate={{ 
                opacity: [1, 0, 1],
                transition: { 
                  repeat: Infinity, 
                  duration: 0.8
                }
              }}
              style={{ display: descriptionText.length === fullDescription.length ? 'none' : 'inline-block' }}
            />
          </motion.p>
          
          {/* Animated underline */}
          <motion.div 
            className="absolute -bottom-1 left-1/2 h-[1px] bg-gradient-to-r from-transparent via-amber-600/20 to-transparent"
            initial={{ width: "0%", x: "-50%" }}
            animate={{ 
              width: descriptionText.length === fullDescription.length ? "100%" : "0%",
              opacity: [0.2, 0.4, 0.2],
              transition: { 
                width: { duration: 1.5, delay: 2 },
                opacity: { repeat: Infinity, duration: 3, ease: "easeInOut" }
              }
            }}
          />
        </div>

        {/* Email signup form */}
        <motion.div 
          className="w-full max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 1, 
            delay: 1.5,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <SubscriptionForm />
        </motion.div>

        {/* Disclaimer text */}
        <motion.p 
          className="text-xs font-light text-gray-500 mt-6 text-center min-h-[2em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          {disclaimerText}
          <motion.span 
            className="inline-block w-[2px] h-[0.9em] bg-gray-500 ml-1 align-middle"
            animate={{ 
              opacity: [1, 0, 1],
              transition: { 
                repeat: Infinity, 
                duration: 0.8
              }
            }}
            style={{ display: disclaimerText.length === fullDisclaimer.length ? 'none' : 'inline-block' }}
          />
        </motion.p>
      </div>
    </div>
  )
} 