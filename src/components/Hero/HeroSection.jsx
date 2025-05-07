import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="container mx-auto p-5 md:p-0">
        <h1 className="text-[30vw] sm:text-[25vw] xl:text-[26rem] text-secondary-brown tracking-wide leading-none text-center font-glitch">
          LANKYJO
        </h1>
        <div className="relative aspect-[9/16] md:aspect-video max-h-[400px] sm:max-h-[500px] md:max-h-[600px] w-full overflow-hidden rounded-md">
          <Image
            src={'/images/hero.png'}
            alt="hero"
            fill
            className="absolute inset-0 object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection