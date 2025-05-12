'use client'
// import { getPayload } from 'payload'
import { toast } from 'sonner'
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '../ui/button'

export async function handleSubmit(
  e: React.FormEvent<HTMLFormElement>,
  email: string,
  displayName: string,
  comment: string,
  setEmail: (v: string) => void,
  setDisplayName: (v: string) => void,
  setComment: (v: string) => void,
) {
  e.preventDefault()

  const missingFields = []
  if (!email) missingFields.push('Email')
  if (!displayName) missingFields.push('Display Name')
  if (!comment) missingFields.push('Comment')

  if (missingFields.length > 0) {
    toast.error(`Missing field(s): ${missingFields.join(', ')}`)
    return
  }

  toast.success("Comment submitted successfully, Awaiting Josh's approval")
  setEmail('')
  setDisplayName('')
  setComment('')

  // console.log({ displayName, comment, email })
  await fetch('/api/submit-comment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, displayName, comment }),
  })
}

export default function CommentForm() {
  //   const payload = await getPayload({ config: config })
  const [email, setEmail] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [comment, setComment] = useState('')

  return (
    <div className="sticky bottom-0 left-0 w-full">
      <form
        onSubmit={(e) =>
          handleSubmit(e, email, displayName, comment, setEmail, setDisplayName, setComment)
        }
        className="mx-auto max-w-xl space-y-2"
      >
        {' '}
        <div className="flex items-center gap-2">
          <Input
            className="border border-secondary-brown py-5"
            type="email"
            placeholder="lankyjo@lankyjo.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            className="border border-secondary-brown py-5"
            type="text"
            placeholder="display name"
            required
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <div className="grid w-full gap-2">
          <Textarea
            className="border border-secondary-brown"
            placeholder="Type your message here."
            required
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <Button>Submit thoughts</Button>
        </div>
      </form>
    </div>
  )
}
