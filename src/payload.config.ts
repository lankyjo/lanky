// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
// import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { Works } from './collections/Works'
import { Blogs } from './collections/Blogs'
import { AboutImages } from './globals/AboutImages'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals: [AboutImages],
  collections: [Users, Media, Works, Blogs],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    // payloadCloudPlugin(),
    // storage-adapter-placeholder
    vercelBlobStorage({
      enabled: true,
      collections: { media: true },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
})
