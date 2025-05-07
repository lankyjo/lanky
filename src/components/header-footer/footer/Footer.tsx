import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
const Footer = () => {
  const navItems = [
    {
      name: 'works',
    },
    {
      name: 'services',
    },
    {
      name: 'blogs',
    },
    {
      name: 'about',
    },
  ]
  return (
    <footer className=" bg-secondary-brown text-bg-white">
      {/* CONTAINER */}
      <div className="container mx-auto p-5">
        <div className=" flex flex-col-reverse gap-5 md:gap-0 md:flex-row md:justify-between">
          {/* SOCIALS */}
          <div className="text-5xl flex justify-center md:justify-start gap-4">
            <Link href={''}>
              <FaGithub />{' '}
            </Link>
            <Link href={''}>
              <FaXTwitter />{' '}
            </Link>
          </div>
          {/* LINKS */}
          <div>
            <ul className="text-center  md:text-right flex gap-3 md:flex-col justify-center md:justify-end">
              {navItems.map((navItem) => (
                <li key={navItem.name}>
                  <Link className="underline" href={`/${navItem.name}`}>
                    {navItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h1 className="text-[30vw] sm:text-[25vw] xl:text-[26rem] tracking-wide leading-none text-center font-glitch">
          LANKYJO
        </h1>
      </div>
      {/* CONTAINER END */}
    </footer>
  )
}

export default Footer
