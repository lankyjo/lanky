// app/api/comments/route.ts
import { NextResponse } from 'next/server'
import config from '@payload-config'
import { getPayload } from 'payload'

export async function GET() {
  const payload = await getPayload({ config: config })

  const comments = await payload.find({
    collection: 'comments',
    where: {
      approval: {
        equals: 'approved',
      },
    },
  })

  return NextResponse.json(comments.docs)
}
