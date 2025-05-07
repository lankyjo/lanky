'use client'
// import { cn } from '@/lib/utils'
import { Media, Work } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
// import { PaginatedDocs } from 'payload'
interface Props {
  workdetails: Work
}
export function HeroWorksCard({ workdetails }: Props) {
  const bgImage = workdetails.displayImage as Media
  return (
    <Link
      target="_blank"
      href={workdetails.link || '/'}
      className="space-y-2 w-full h-84 sm:h-90 border-2 p-3 border-black rounded-lg shadow-[6px_3px_0px_#000] transition-all hover:shadow-[12px_6px_0px_#000] flex flex-col justify-between group/card"
    >
      {/* <div
        className={cn(
          ' cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl w-full mx-auto flex flex-col justify-end p-4',
          'bg-center',
        )}
        style={{ backgroundImage: `url(${bgImage.url})` }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
      </div> */}
      {/* <p className="font-normal font-glitch text-xl relative z-10">{workdetails.projectTitle}</p> */}
      <div className="w-full aspect-video h-full border border-black relative overflow-hidden rounded-md">
        <Image
          src={bgImage.url || ''}
          alt={bgImage.alt}
          fill
          className="absolute inset-0 object-cover object-center group-hover/card:scale-110 transition-all duration-300"
        />
      </div>
      <div className="text-base ">
        <h3 className="font-donatto">{workdetails.projectTitle}</h3>
        <p>{workdetails.projectDescription}</p>
      </div>
    </Link>
  )
}
