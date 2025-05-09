import Image from 'next/image'
export const metadata = {
  title: 'About | LankyJo',
  description:
    'Learn more about LankyJo — a passionate web developer, lifelong learner, and future penetration tester. Discover my journey in tech, from building responsive websites with React and Next.js to exploring ethical hacking and Web3.',
  keywords: [
    'LankyJo',
    'web developer',
    'frontend developer',
    'React',
    'Next.js',
    'JavaScript',
    'full-stack developer',
    'Node.js',
    'ethical hacking',
    'penetration testing',
    'AI developer',
    'Web3',
    'portfolio',
    'developer blog',
  ],
  authors: [{ name: 'LankyJo' }],
  creator: 'LankyJo',
  publisher: 'LankyJo',
  // metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: 'About | LankyJo',
    description:
      'Explore the background of LankyJo — a creative developer focused on modern web technologies, cybersecurity, and innovation.',
    //   url: "https://yourdomain.com/about",
    siteName: 'LankyJo',
    images: [
      {
        url: '/images/about.png',
        width: 1200,
        height: 630,
        alt: 'LankyJo About Image',
      },
    ],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | LankyJo',
    description:
      'Passionate developer, creative thinker, and future ethical hacker — get to know LankyJo.',
    creator: '@the_lankyjo',
    images: ['/images/about.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
}

export default function AboutPage() {
  return (
    <section className="container mx-auto p-5 xl:p-0 space-y-5">
      <h2 className="text-4xl">About Me</h2>
      <div className="aspect-square  relative w-full">
        <Image
          src={'/images/about.png'}
          alt="about me"
          fill
          className="absolute inset-0 object-cover object-center"
        />
        <span className="absolute inset-0 bg-secondary-brown/50"></span>
      </div>

      <div>
        <article className="space-y-5 text-base leading-relaxed text-neutral-800">
          <p>
            Hello, I’m <strong>LankyJo</strong>—a passionate web developer, creative problem solver,
            and lifelong learner. My journey in technology began at a young age when I first
            discovered the magic of coding. I was fascinated by how a few lines of code could
            transform ideas into interactive experiences, and that curiosity has driven me ever
            since.
          </p>

          <p>
            Over the years, I’ve immersed myself in web development—mastering HTML, CSS, and
            JavaScript, and diving into frameworks like
            <strong> React</strong> and <strong>Next.js</strong>. I love crafting digital
            experiences that are not only visually stunning but also fast, responsive, and
            user-friendly. Whether it’s refining UI interactions, optimizing performance, or
            exploring new design techniques, I thrive on building solutions that leave an impact.
          </p>

          <p>
            While my focus is on frontend development, I’m expanding into backend technologies like
            <strong> Node.js</strong>, <strong>MongoDB</strong>, and <strong>Python</strong>. I’m
            currently learning how to build full-stack applications, and I enjoy solving real-world
            problems through AI and automation.
          </p>

          <p>
            I also have a growing interest in <strong>penetration testing</strong> and{' '}
            <strong>ethical hacking</strong>. Security has always intrigued me, and I aspire to
            become a penetration tester—someone who can identify vulnerabilities and help make
            digital systems safer. This journey is still unfolding, but I’m excited to dive deeper
            into offensive security, ethical hacking, and network defense.
          </p>

          <p>
            When I’m not coding, I draw inspiration from <strong>art</strong>,{' '}
            <strong>music</strong>, and deep conversations. I also love pushing the boundaries of
            what’s possible with <strong>Web3</strong> and emerging technologies. This blog is my
            creative outlet—a space to share my projects, insights, and lessons learned along the
            way.
          </p>

          <p>
            Thank you for stopping by! Whether you’re a fellow developer, security enthusiast, or
            simply curious about tech, I’d love to connect and grow together. 🚀
          </p>
        </article>
      </div>
    </section>
  )
}
