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

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full bg-oysterWhite" />
}
