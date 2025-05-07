'use server'
import React from 'react'
// import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { Media } from '@/payload-types'
// import Image from 'next/image'
// import Autoplay from 'embla-carousel-autoplay'
import HeroAboutCarousel from './HeroCarousel'

const HeroAbout = async () => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const aboutImagesObj = await payload.findGlobal({ slug: 'AboutImages', depth: 1 })
  const aboutImages = aboutImagesObj.aboutImages as {
    AboutImage: Media
  }[]
  return (
    <section className="mx-auto container p-5 space-y-5">
      <h3 className="text-4xl font-bold">About Me</h3>
      <div>
        <HeroAboutCarousel images={aboutImages} />
      </div>
    </section>
  )
}

export default HeroAbout
