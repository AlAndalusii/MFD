import AnimatedBackground from "@/components/animated-background"
import AnimatedContent from "@/components/animated-content"
import AnimatedAccents from "@/components/animated-accents"

export default function ComingSoonPage() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-black gold-texture relative overflow-hidden">
      {/* Gold accent elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-transparent to-amber-100/20 -translate-y-1/2 translate-x-1/2 blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gradient-to-tr from-transparent to-amber-100/20 translate-y-1/2 -translate-x-1/2 blur-xl"></div>
      
      {/* Subtle gold dust particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-amber-100/30"
            style={{
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>
      
      {/* Centered Content Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 relative z-10 max-w-3xl mx-auto w-full">
        <AnimatedContent logoSrc="/74B8A8D1-DCBB-4005-824E-08DE9FA5EE96.PNG" />
      </div>
      
      {/* Background animation covering the full background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <AnimatedBackground />
      </div>
      
      {/* Gold corner accent */}
      <AnimatedAccents />
    </main>
  )
}
