"use client"

import AnimatedBackground from "@/components/animated-background"
import AnimatedContent from "@/components/animated-content"
import AnimatedAccents from "@/components/animated-accents"
import FooterLogo from "@/components/footer-logo"
import { lemonMilk } from "./fonts"

// Pre-defined positions for dust particles to avoid hydration errors
const dustParticles = [
  { width: "5px", height: "5px", top: "15%", left: "10%", opacity: 0.4 },
  { width: "4px", height: "4px", top: "35%", left: "25%", opacity: 0.3 },
  { width: "6px", height: "6px", top: "65%", left: "15%", opacity: 0.5 },
  { width: "3px", height: "3px", top: "80%", left: "40%", opacity: 0.2 },
  { width: "5px", height: "5px", top: "25%", left: "80%", opacity: 0.4 },
  { width: "4px", height: "4px", top: "45%", left: "85%", opacity: 0.3 },
  { width: "6px", height: "6px", top: "75%", left: "75%", opacity: 0.5 },
  { width: "3px", height: "3px", top: "90%", left: "60%", opacity: 0.2 },
];

export default function MainPage() {
  return (
    <main className={`${lemonMilk.variable} flex flex-col min-h-screen bg-background text-black gold-texture relative overflow-hidden`}>
      {/* Gold accent elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-transparent to-amber-100/20 -translate-y-1/2 translate-x-1/2 blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gradient-to-tr from-transparent to-amber-100/20 translate-y-1/2 -translate-x-1/2 blur-xl"></div>
      
      {/* Subtle gold dust particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {dustParticles.map((particle, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-amber-100/30"
            style={{
              width: particle.width,
              height: particle.height,
              top: particle.top,
              left: particle.left,
              opacity: particle.opacity,
            }}
          />
        ))}
      </div>
      
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
