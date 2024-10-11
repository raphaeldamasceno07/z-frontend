import type { Metadata } from 'next'
import './globals.css'
import { Rubik } from 'next/font/google'

export const rubik = Rubik({
  subsets: ['latin'],
  style: 'normal',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Z'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  )
}
