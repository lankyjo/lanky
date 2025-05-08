'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
const HeroSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // Adjust the delay between letters
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 30,
      },
    },
  }
  const title = 'LANKYJO'
  return (
    <section id="hero">
      <div className="container mx-auto p-5 md:p-0">
        <motion.h1
          className="text-[30vw] sm:text-[25vw] xl:text-[26rem] text-secondary-brown leading-none text-center font-glitch"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {title.split('').map((char, index) => (
            <motion.span key={index} variants={letterVariants} className="inline-block">
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative aspect-[9/16] md:aspect-video max-h-[400px] sm:max-h-[500px] md:max-h-[600px] w-full overflow-hidden rounded-md"
        >
          <Image
            src={'/images/hero.png'}
            alt="hero"
            fill
            priority
            className="absolute inset-0 object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
