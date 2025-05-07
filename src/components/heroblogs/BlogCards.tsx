'use client'
// import { cn } from '@/lib/utils'
import { Media, Blog } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
// import { PaginatedDocs } from 'payload'
interface Props {
  blogdetails: Blog
}
export function BlogCard({ blogdetails }: Props) {
  const bgImage = blogdetails.blogImage as Media
  return (
    <Link
      // target="_blank"
      href={`/blogs/${blogdetails.slug}` || '/'}
      className="space-y-2 w-full h-90 sm:h-90 border-2 p-3 border-secondary-brown rounded-lg shadow-[6px_3px_0px_#1B1212] transition-all hover:shadow-[12px_6px_0px_#1B1212] flex flex-col justify-between group/card"
    >
      <div className="w-full aspect-video h-full border border-secondary-brown relative overflow-hidden rounded-md">
        <Image
          src={bgImage.url || ''}
          alt={bgImage.alt}
          fill
          className="absolute inset-0 object-cover object-center group-hover/card:scale-110 transition-all duration-300"
        />
      </div>
      <div className="space-y-2">
        <small className="text-xs">{new Date(blogdetails.createdAt).toLocaleDateString()}</small>
        <h3 className="font-donatto text-sm">{blogdetails.blogTitle}</h3>
        <p className="text-xs font-extralight">{blogdetails.blogDescription}</p>
        <small className="underline">Read more</small>
      </div>
    </Link>
  )
}
