"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"

export default function SubscriptionForm() {
  const [submitted, setSubmitted] = useState(false)
  const beehiivContainerRef = useRef<HTMLDivElement>(null)
  const [beehiivLoaded, setBeehiivLoaded] = useState(false)

  // Load beehiiv embed when the component mounts
  useEffect(() => {
    if (!beehiivContainerRef.current || beehiivLoaded) return

    const iframe = document.createElement('iframe')
    iframe.src = "https://embeds.beehiiv.com/8aaba681-29d2-47d7-9e55-b59135aa1170?slim=true"
    iframe.setAttribute('data-test-id', "beehiiv-embed")
    iframe.height = "52"
    iframe.frameBorder = "0"
    iframe.scrolling = "no"
    iframe.style.margin = "0"
    iframe.style.borderRadius = "0px !important"
    iframe.style.backgroundColor = "transparent"
    iframe.style.width = "100%"
    iframe.style.maxWidth = "100%"
    
    // Add event listener for successful subscription
    window.addEventListener('message', (event) => {
      if (event.data === 'beehiiv-subscribe-success') {
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
      }
    })

    beehiivContainerRef.current.appendChild(iframe)
    setBeehiivLoaded(true)
    
    // Custom styling to enhance the form's appearance
    const style = document.createElement('style')
    style.textContent = `
      .beehiiv-embed {
        width: 100% !important;
      }
      .beehiiv-embed input {
        background-color: transparent !important;
        border-color: black !important;
        border-radius: 0 !important;
        height: 3rem !important;
        font-weight: 300 !important;
        text-align: center !important;
      }
      .beehiiv-embed button {
        background-color: black !important;
        color: white !important;
        border-radius: 0 !important;
        height: 3rem !important; 
        padding-left: 2rem !important;
        padding-right: 2rem !important;
        font-weight: 300 !important;
        letter-spacing: 0.05em !important;
        transition: background-color 0.3s !important;
      }
      .beehiiv-embed button:hover {
        background-color: #78350f !important;
      }
      @media (min-width: 640px) {
        .beehiiv-embed input {
          text-align: left !important;
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [beehiivLoaded])

  return (
    <div className="space-y-4 w-full text-center">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="relative w-full max-w-md">
          {/* Beehiiv embed container */}
          <div ref={beehiivContainerRef} className="w-full"></div>
          
          {/* Decorative underline - position this below the beehiiv form */}
          <div className="absolute -bottom-2 left-0 right-0 mx-auto w-1/3 h-0.5 bg-gradient-to-r from-transparent via-amber-700/70 to-transparent"></div>
        </div>
      </div>

      {submitted && <p className="text-sm font-light text-amber-800 text-center mt-4">Thank you for subscribing.</p>}

      <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-amber-700/20 to-transparent mt-2"></div>
    </div>
  )
}
