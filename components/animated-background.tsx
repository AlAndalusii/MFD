"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.clientWidth
        canvas.height = container.clientHeight
      }
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Animation parameters
    const particles: Particle[] = []
    const particleCount = 35 // Increased particle count for more luxury feel
    const goldShimmer: GoldShimmer[] = [] // Gold shimmer effect
    const shimmerCount = 15 // Number of gold shimmer effects

    // Gold shimmer class
    class GoldShimmer {
      x: number
      y: number
      size: number
      opacity: number
      fadeSpeed: number
      
      constructor() {
        this.x = Math.random() * (canvas?.width || 0)
        this.y = Math.random() * (canvas?.height || 0)
        this.size = Math.random() * 4 + 2
        this.opacity = 0
        this.fadeSpeed = Math.random() * 0.01 + 0.005
      }
      
      update() {
        this.opacity += this.fadeSpeed
        
        if (this.opacity >= 0.6) {
          this.fadeSpeed = -this.fadeSpeed
        } else if (this.opacity <= 0) {
          this.x = Math.random() * (canvas?.width || 0)
          this.y = Math.random() * (canvas?.height || 0)
          this.size = Math.random() * 4 + 2
          this.fadeSpeed = Math.abs(this.fadeSpeed)
        }
      }
      
      draw() {
        if (!ctx) return
        
        // Create gold shimmer gradient
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        )
        
        gradient.addColorStop(0, `rgba(255, 215, 0, ${this.opacity})`)
        gradient.addColorStop(0.5, `rgba(218, 165, 32, ${this.opacity * 0.7})`)
        gradient.addColorStop(1, `rgba(184, 134, 11, 0)`)
        
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      }
    }

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string

      constructor() {
        this.x = Math.random() * (canvas?.width || 0)
        this.y = Math.random() * (canvas?.height || 0)
        this.size = Math.random() * 3 + 0.8 // Slightly larger particles
        this.speedX = (Math.random() - 0.5) * 0.2
        this.speedY = (Math.random() - 0.5) * 0.2
        this.opacity = Math.random() * 0.5 + 0.2
        
        // Different gold tones for variety
        const goldTones = [
          "184, 134, 11",    // Dark gold
          "212, 175, 55",    // Gold
          "218, 165, 32",    // Golden rod
          "207, 181, 59"     // Metallic gold
        ]
        this.color = goldTones[Math.floor(Math.random() * goldTones.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges
        if (this.x > (canvas?.width || 0) || this.x < 0) {
          this.speedX = -this.speedX
        }

        if (this.y > (canvas?.height || 0) || this.y < 0) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        // Different gold colors for luxury feel
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }
    
    // Initialize gold shimmer effects
    for (let i = 0; i < shimmerCount; i++) {
      goldShimmer.push(new GoldShimmer())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw subtle grid lines
      ctx.strokeStyle = "rgba(218, 165, 32, 0.05)" // Gold-tinted grid lines (slightly brighter)
      ctx.lineWidth = 1

      // Vertical lines
      for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
      
      // Draw diagonal lines for luxury pattern
      ctx.strokeStyle = "rgba(212, 175, 55, 0.03)" // Slightly different gold tone
      for (let i = 0; i < canvas.width + canvas.height; i += 80) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(i, 0)
        ctx.stroke()
        
        ctx.beginPath()
        ctx.moveTo(i - canvas.height, canvas.height)
        ctx.lineTo(canvas.width, i - canvas.width)
        ctx.stroke()
      }
      
      // Update and draw shimmer effects
      goldShimmer.forEach((shimmer) => {
        shimmer.update()
        shimmer.draw()
      })

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full bg-oysterWhite" />
}
