'use client'

import React, { Dispatch, SetStateAction, useEffect } from 'react'
import Link from 'next/link'

const Navigation = ({
  isOpen,
  setisOpen,
}: {
  isOpen: boolean
  setisOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const navItems = [
    {
      name: 'works',
    },
    // {
    //   name: 'services',
    // },
    {
      name: 'blogs',
    },
    {
      name: 'about',
    },
  ]
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [isOpen])
  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={`/${item.name}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* MOBILE NAV */}
      <nav
        aria-hidden={!isOpen}
        className={`md:hidden fixed z-30 w-full h-[calc(100dvh-89px)] overflow-hidden left-0 bottom-0 bg-bg-white flex justify-center items-center transform transition-all  ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <ul className="flex flex-col font-donatto text-3xl items-center gap-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link onClick={() => setisOpen(false)} href={`/${item.name}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navigation
