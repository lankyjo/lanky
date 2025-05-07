import { HeroWorksCard } from '@/components/heroworks/HeroCard'
import config from '@/payload.config'
import { getPayload } from 'payload'

export default async function WorksPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const worksObj = await payload.find({ collection: 'works', depth: 1 })
  const works = worksObj.docs
  return (
    <section className="container mx-auto p-5 space-y-5">
      <h2 className="text-4xl">My Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {works.map((work) => (
          <HeroWorksCard key={work.projectTitle} workdetails={work} />
        ))}
      </div>
    </section>
  )
}
