"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import AnimatedLuxuryText from "@/components/animated-luxury-text"
import SubscriptionForm from "@/components/subscription-form"

export default function AnimatedContent() {
  // State to track if MANDE typing is complete
  const [typingComplete, setTypingComplete] = useState(false);
  
  // Handler for when typing animation completes
  const handleTypingComplete = () => {
    setTypingComplete(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full">
      {/* Center content */}
      <div className="flex flex-col items-center justify-center">
        {/* Animated brand name with typing effect */}
        <div className="mb-20 text-center">
          <AnimatedLuxuryText onTypingComplete={handleTypingComplete} />
        </div>

        {/* Email signup form - only appears after typing is complete */}
        <AnimatePresence>
          {typingComplete && (
            <motion.div 
              className="w-full max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <SubscriptionForm />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Static disclaimer text - only appears after typing is complete */}
        <AnimatePresence>
          {typingComplete && (
            <motion.p 
              className="text-xs font-light text-gray-500 mt-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              By subscribing, you agree to our privacy policy and consent to receive updates.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
} 