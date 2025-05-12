import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, displayName, comment } = body

    if (!email || !displayName || !comment) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const payload = await getPayload({ config })

    const createdComment = await payload.create({
      collection: 'comments',
      data: {
        email,
        displayName,
        comment,
      },
    })

    return NextResponse.json(createdComment, { status: 201 })
  } catch (err) {
    console.error('Submit comment error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
