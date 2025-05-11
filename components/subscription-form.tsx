"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SubscriptionForm() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setEmail("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full text-center">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <div className="relative w-full sm:w-auto sm:flex-grow max-w-sm">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-transparent font-light border-black focus-visible:ring-amber-200 focus:border-amber-700 rounded-none h-12 placeholder:text-gray-500 transition-all text-center sm:text-left"
          />
          <div className="absolute bottom-0 left-0 right-0 mx-auto w-1/3 h-0.5 bg-gradient-to-r from-transparent via-amber-700/70 to-transparent"></div>
        </div>
        <Button 
          type="submit" 
          className="bg-black text-white hover:bg-amber-900 rounded-none h-12 px-8 relative overflow-hidden group font-light tracking-wider text-sm w-full sm:w-auto"
        >
          <span className="relative z-10">NOTIFY ME</span>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900 to-amber-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Button>
      </div>

      {submitted && <p className="text-sm font-light text-amber-800 text-center">Thank you for subscribing.</p>}

      <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-amber-700/20 to-transparent mt-2"></div>
    </form>
  )
}
