export const revalidate = 120

import config from '@payload-config'
import Link from 'next/link'
import { getPayload } from 'payload'
import { HeroWorksCard } from './HeroCard'
export default async function HeroWorks() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const workObj = await payload.find({
    collection: 'works',
    limit: 3,
  })

  const works = workObj.docs
  return (
    <section className="my-10 p-5">
      <div className="container mx-auto  md:p-0">
        <div className="flex justify-between items-baseline ">
          <h2 className="text-4xl font-bold">My works</h2>
          <Link href={'/works'} className="underline text-xs md:text-base">
            View Projects
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {/* <HeroWorksCard />
          <HeroWorksCard />
          <HeroWorksCard /> */}
          {works.map((work) => (
            <HeroWorksCard key={work.projectTitle} workdetails={work} />
          ))}
        </div>
      </div>
    </section>
  )
}
