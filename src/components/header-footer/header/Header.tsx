'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Navigation from './Navigation'
import { motion } from 'motion/react'

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="py-5 bg-bg-white text-secondary-brown z-50 min-h-[89px] fixed top-0 left-0 w-full border-b px-5 border-stone-900"
    >
      {/* CONTAINER */}
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO */}
        <div>
          <Link href={'/'}>
            <h1 className="font-glitch text-5xl">LankyJo</h1>
          </Link>
        </div>
        {/* NAVIGATION */}
        <Navigation isOpen={openMenu} setisOpen={setOpenMenu} />
        {/* MENU */}
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="flex flex-col gap-1 cursor-pointer p-4 md:hidden"
        >
          <span
            className={`w-10 h-[3px] bg-stone-900 inline-block transition-all transform ${openMenu && 'rotate-45'}`}
          ></span>
          <span
            className={`w-10 h-[3px] bg-stone-900 inline-block transition-all transform ${openMenu && '-rotate-45 -translate-y-[7px]'}`}
          ></span>
        </div>
      </div>
      {/* CONTAINER ENDS */}
    </motion.header>
  )
}

export default Header
