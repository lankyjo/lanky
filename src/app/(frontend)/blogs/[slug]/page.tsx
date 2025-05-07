import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { Media } from '@/payload-types'
import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const payload = await getPayload({ config: config })
  const blogObj = await payload.find({
    collection: 'blogs',
    where: {
      slug: {
        equals: params.slug,
      },
    },
  })
  const blog = blogObj.docs[0]
  const blogImage = blog.blogImage as Media
  if (!blog) return notFound()
  return (
    <section className="container mx-auto p-5 xl:p-0 space-y-5">
      <small>{new Date(blog.createdAt).toLocaleDateString()}</small>
      <h2 className="text-3xl">{blog.blogTitle}</h2>
      <div className="overflow-hidden rounded-md aspect-video max-h-[600px] w-full relative">
        <Image
          src={blogImage.url || ''}
          alt={blogImage.alt || 'alt'}
          fill
          className="absolute inset-0 object-cover object-center"
        />
      </div>
      <div className="w-full mx-auto prose-blockquote:border-l-4 prose-blockquote:border-secondary-brown prose-blockquote:pl-4 prose-code:bg-black prose-code:text-bg-white">
        <RichText data={blog.blogContent as SerializedEditorState} />
      </div>
    </section>
  )
}
