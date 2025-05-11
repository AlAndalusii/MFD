import type React from "react"
import "../styles/globals.css"
import type { Metadata } from "next"
import { lemonMilk } from "./fonts"

export const metadata: Metadata = {
  title: "MANDE | Luxury Footwear",
  description: "Crafted for those who lead with every step. Join our exclusive list for early access.",
  generator: 'Next.js'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${lemonMilk.variable} font-lemon-milk`}>
        {children}
      </body>
    </html>
  )
}
