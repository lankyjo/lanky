export const revalidate = 120
import { BlogCard } from '@/components/heroblogs/BlogCards'
import config from '@payload-config'
import { getPayload } from 'payload'
export default async function BlogPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const blogsObj = await payload.find({ collection: 'blogs' })
  const blogs = blogsObj.docs
  return (
    <section className="container mx-auto p-5 xl:p-0 space-y-5">
      <h2 className="text-4xl">My Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.blogTitle} blogdetails={blog} />
        ))}
      </div>
    </section>
  )
}
