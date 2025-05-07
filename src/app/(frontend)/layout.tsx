import React from 'react'
import './styles.css'
import localFont from 'next/font/local'
import Header from '@/components/header-footer/header/Header'
import Footer from '@/components/header-footer/footer/Footer'

const glitchFont = localFont({
  src: '../fonts/SDGlitch_Demo.ttf',
  variable: '--font-glitch',
  display: 'swap',
})

const donatto = localFont({
  src: '../fonts/donatto-regular.ttf',
  variable: '--font-donatto',
  display: 'swap',
})

const pognia = localFont({
  src: '../fonts/pogonia-regular.otf',
  variable: '--font-pognia',
  display: 'swap',
})

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body
        className={`${glitchFont.variable} ${donatto.variable} ${pognia.className} ${pognia.variable} bg-bg-white antialiased`}
      >
        <Header />
        <main className="my-5">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
