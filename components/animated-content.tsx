"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import AnimatedLuxuryText from "@/components/animated-luxury-text"
import SubscriptionForm from "@/components/subscription-form"

export default function AnimatedContent() {
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
    }, 1500); // Sooner start time since there's no tagline to wait for
    
    return () => clearTimeout(startDelay);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full">
      {/* Center content */}
      <div className="flex flex-col items-center justify-center">
        {/* Animated brand name with typing effect - bigger and more prominent */}
        <div className="mb-20 text-center">
          <AnimatedLuxuryText />
        </div>

        {/* Email signup form - moved closer to the brand name */}
        <motion.div 
          className="w-full max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 1, 
            delay: 0.8, // Reduced delay since there's no tagline
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
          transition={{ duration: 0.5, delay: 1.2 }}
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