export const revalidate = 120

import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { Media } from '@/payload-types'
import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { ShareBtns } from '@/components/shareButtons/shareBtns'

export const generateMetadata = async ({ params }: any) => {
  const payload = await getPayload({ config })
  const { slug } = await params
  const blogObj = await payload.find({
    collection: 'blogs',
    where: {
      slug: {
        equals: slug,
      },
    },
  })
  const blog = blogObj.docs[0]
  if (!blog) return {}

  const blogImage = blog.blogImage as Media
  return {
    title: `Lanky's Thoughts on ${blog.blogTitle}`,
    description: blog.blogDescription || `Reflections from LankyJo on ${blog.blogTitle}`,
    openGraph: {
      title: `Lanky's Thoughts on ${blog.blogTitle}`,
      description: blog.blogDescription || `Reflections from LankyJo on ${blog.blogTitle}`,
      type: 'article',
      locale: 'en_US',
      images: [
        {
          url: blogImage?.url || '/images/about.png',
          alt: blogImage?.alt || `Preview image for ${blog.blogTitle}`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Lanky's Thoughts on ${blog.blogTitle}`,
      description: blog.blogDescription || `Reflections from LankyJo on ${blog.blogTitle}`,
      images: [blogImage?.url || '/images/about.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
export default async function BlogPost({ params }: any) {
  await sleep(1000)
  const payload = await getPayload({ config })
  const { slug } = await params
  const blogObj = await payload.find({
    collection: 'blogs',
    where: {
      slug: {
        equals: slug,
      },
    },
  })
  const blog = blogObj.docs[0]
  if (!blog) return notFound()
  const blogImage = blog.blogImage as Media

  return (
    <section className="container mx-auto p-5 xl:p-0 space-y-5">
      <small className="text-sm text-gray-500">
        {new Date(blog.createdAt).toLocaleDateString()}
      </small>
      <h2 className="text-3xl font-semibold">{blog.blogTitle}</h2>
      <div className="overflow-hidden rounded-md aspect-video max-h-[600px] w-full relative">
        <Image
          src={blogImage.url || ''}
          alt={blogImage.alt || 'Blog Image'}
          fill
          className="absolute inset-0 object-cover object-center"
        />
      </div>
      <div
        className="prose max-w-none w-full mx-auto 
  prose-code:bg-black prose-code:text-white 
  prose-blockquote:relative prose-blockquote:p-6 
  prose-blockquote:pl-10
   prose-blockquote:italic 
  prose-blockquote:before:content-['“'] prose-blockquote:before:absolute 
  prose-blockquote:before:top-0 prose-blockquote:before:left-0 
  prose-blockquote:before:text-8xl prose-blockquote:before:text-secondary-brown 
  prose-blockquote:before:font-glitch prose-blockquote:before:leading-none"
      >
        <RichText data={blog.blogContent as SerializedEditorState} />
      </div>
      <ShareBtns />
    </section>
  )
}
