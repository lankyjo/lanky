import { HeroWorksCard } from '@/components/heroworks/HeroCard'
import config from '@/payload.config'
import { getPayload } from 'payload'

export const metadata = {
  title: 'Blog | LankyJo',
  description:
    'Welcome to my personal blog — a space for thoughts, stories, insights, and reflections on everything from tech to creativity, security, life, and beyond.',
  keywords: [
    'LankyJo',
    'personal blog',
    'tech reflections',
    'creative writing',
    'hacking insights',
    'web dev',
    'cybersecurity thoughts',
    'life and learning',
    'developer blog',
    'musings',
    'curiosity',
  ],
  authors: [{ name: 'LankyJo' }],
  creator: 'LankyJo',
  publisher: 'LankyJo',
  openGraph: {
    title: 'Blog | LankyJo',
    description:
      'Thoughts, ideas, and explorations from the mind of LankyJo — across tech, art, security, and life.',
    siteName: 'LankyJo',
    images: [
      {
        url: '/images/about.png',
        width: 1200,
        height: 630,
        alt: "Preview of LankyJo's Blog",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | LankyJo',
    description:
      'Read personal reflections, experiments, and notes on a wide range of topics from LankyJo.',
    creator: '@the_lankyjo',
    images: ['/images/about.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
}

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
