import { headers as getHeaders } from 'next/headers.js'
// import Image from 'next/image'
import { getPayload } from 'payload'
import { fileURLToPath } from 'url'
import config from '@/payload.config'
import './styles.css'
import HeroSection from '../../components/Hero/HeroSection'
import HeroWorks from '@/components/heroworks/HeroWorks'
import HeroBlogs from '@/components/heroblogs/HeroBlogs'
import HeroAbout from '@/components/HeroAbout/HeroAbout'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <>
      <HeroSection />
      <HeroWorks />
      <HeroAbout />
      <HeroBlogs />
    </>
  )
}
