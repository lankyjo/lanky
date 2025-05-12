'use client'
import { Comment } from '@/payload-types'
import React, { useEffect, useState } from 'react'

const Comments = () => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch('/api/comments')
        const data = await res.json()
        setComments(data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchComments()
  }, [])

  if (comments.length === 0) {
    return <div>No Comments yet</div>
  }

  return (
    <div className="space-y-12 mt-5">
      {comments.map((comment: Comment) => (
        <div
          key={comment.id}
          className="p-2 rounded-lg mx-auto max-w-xl text-bg-white speech-bubble"
        >
          <p className="text-sm first-letter:uppercase text-bg-white">{comment.comment}</p>
          <cite className="text-base text-secondary-brown mb-3 first-letter:uppercase">
            {comment.displayName}
          </cite>
        </div>
      ))}
    </div>
  )
}

export default Comments
