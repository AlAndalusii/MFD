"use client"

import AnimatedBackground from "@/components/animated-background"
import AnimatedContent from "@/components/animated-content"
import AnimatedAccents from "@/components/animated-accents"
import FooterLogo from "@/components/footer-logo"
import { lemonMilk } from "./fonts"

export default function MainPage() {
  return (
    <main className={`${lemonMilk.variable} flex flex-col min-h-screen bg-background text-black gold-texture relative overflow-hidden`}>
      {/* Gold accent elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-transparent to-amber-100/20 -translate-y-1/2 translate-x-1/2 blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gradient-to-tr from-transparent to-amber-100/20 translate-y-1/2 -translate-x-1/2 blur-xl"></div>
      
      {/* Centered Content Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 relative z-10 max-w-3xl mx-auto w-full">
        <AnimatedContent />
      </div>
      
      {/* Footer with logo */}
      <footer className="relative z-10 w-full flex justify-center items-center py-8">
        <FooterLogo />
      </footer>
      
      {/* Background animation covering the full background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <AnimatedBackground />
      </div>
      
      {/* Gold corner accent */}
      <AnimatedAccents />
    </main>
  )
}
