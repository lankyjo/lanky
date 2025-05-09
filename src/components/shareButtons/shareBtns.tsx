'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaShare, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ShareBtns = () => {
  const [shareUrl, setShareUrl] = useState('')

  useEffect(() => {
    setShareUrl(window.location.href)
  }, [])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      toast.success('Link copied to clipboard!', {
        position: 'top-right',
        autoClose: 2000,
        // hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        className: 'text-sm',
      })
    } catch (err) {
      console.error('Failed to copy!', err)
    }
  }

  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`

  return (
    <div className="text-secondary-brown flex gap-5 items-center text-2xl mt-8">
      <Link href={twitterShare} target="_blank" rel="noopener noreferrer" title="Share to Twitter">
        <FaTwitter />
      </Link>
      <Link
        href={whatsappShare}
        target="_blank"
        rel="noopener noreferrer"
        title="Share to WhatsApp"
      >
        <FaWhatsapp />
      </Link>
      <button
        className="cursor-pointer"
        onClick={copyToClipboard}
        title="Copy Link"
        aria-label="Copy Link"
      >
        <FaShare />
      </button>
      <ToastContainer />
    </div>
  )
}
