import localFont from 'next/font/local'

// The LemonMilkRegular-X3XE2.otf font is in the public/fonts directory
export const lemonMilk = localFont({
  src: '../public/fonts/LemonMilkRegular-X3XE2.otf',
  variable: '--font-lemon-milk',
  display: 'swap',
}) 