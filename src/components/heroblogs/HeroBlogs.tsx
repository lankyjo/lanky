import config from '@payload-config'
import Link from 'next/link'
import { getPayload } from 'payload'
// import { HeroWorksCard } from '../heroworks/HeroCard'
import { BlogCard } from './BlogCards'
export default async function HeroBlogs() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const blogsObj = await payload.find({
    collection: 'blogs',
    limit: 3,
  })

  const blogs = blogsObj.docs
  return (
    <section className="my-10 p-5">
      <div className="container mx-auto  md:p-0">
        <div className="flex justify-between items-baseline ">
          <h2 className="text-4xl font-bold">My Blogs</h2>
          <Link href={''} className="underline text-xs md:text-base">
            View all Blogs
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {/* <HeroWorksCard />
          <HeroWorksCard />
          <HeroWorksCard /> */}
          {blogs.map((blog) => (
            <BlogCard key={blog.blogTitle} blogdetails={blog} />
          ))}
        </div>
      </div>
    </section>
  )
}
