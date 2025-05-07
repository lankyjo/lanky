'use client'

import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { Media } from '@/payload-types'

interface Props {
  images: {
    AboutImage: Media
  }[]
}

const HeroAboutCarousel = ({ images }: Props) => {
  return (
    <Carousel
      className="w-full border-3 border-secondary-brown overflow-hidden rounded-lg shadow-[6px_3px_0px_#1B1212]"
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="h-[80vh] -ml-4">
        {images.map((image, i) => (
          <CarouselItem key={i} className="basis-1/1 lg:basis-1/2 h-full relative pl-4">
            <Image
              src={image.AboutImage?.url || ''}
              alt={image.AboutImage?.alt || ''}
              fill
              className="object-cover absolute inset-0 object-center"
            />
            <div className="absolute inset-0 bg-secondary-brown/30"></div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default HeroAboutCarousel
