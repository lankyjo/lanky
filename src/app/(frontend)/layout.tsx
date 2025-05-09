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
  title: {
    default: 'LankyJo | Web Developer & Creative Technologist',
  },
  description:
    'LankyJo is a passionate web developer and creative problem solver specializing in modern web technologies, full-stack development, and ethical hacking.',
  keywords: [
    'LankyJo',
    'web developer',
    'frontend developer',
    'React',
    'Next.js',
    'PayloadCMS',
    'Node.js',
    'ethical hacking',
    'portfolio',
    'full-stack',
  ],
  authors: [{ name: 'LankyJo' }],
  creator: 'LankyJo',
  publisher: 'LankyJo',
  openGraph: {
    title: 'LankyJo | Web Developer & Creative Technologist',
    description:
      'Explore LankyJo’s web development portfolio, technical blog, and creative experiments powered by Next.js and PayloadCMS.',
    siteName: 'LankyJo',
    images: [
      {
        url: '/images/about.png', // Recommended: 1200x630 image for social previews
        width: 1200,
        height: 630,
        alt: 'LankyJo – Web Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LankyJo | Web Developer & Creative Technologist',
    description:
      'Modern web development, security insights, and creative code — explore LankyJo’s work and blog.',
    creator: '@yourTwitterHandle',
    images: ['/images/about.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
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
