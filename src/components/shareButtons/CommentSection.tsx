import React, { Dispatch, SetStateAction } from 'react'
import CommentForm from './CommentForm'
import Comments from './Comments'
interface CommentState {
  showCommentSection: boolean
  setShowCommentSection: Dispatch<SetStateAction<boolean>>
}
export const CommentSection = ({ showCommentSection, setShowCommentSection }: CommentState) => {
  return (
    <div
      className={`fixed z-20 w-full h-[calc(100dvh-89px)] pt-5 overflow-hidden left-0 bottom-0 bg-bg-white 
    transition-transform duration-300 ${showCommentSection ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="container mx-auto p-5 xl:p-0 w-full  h-full flex flex-col">
        <div id="commentHeader" className="flex justify-between items-center py-2 w-full">
          <h2 className="text-base">Comments</h2>

          <button className="cursor-pointer text-sm" onClick={() => setShowCommentSection(false)}>
            close
          </button>
        </div>

        <div className="flex-[1]  overflow-x-hidden overflow-y-auto">
          <Comments />
        </div>

        <div className="mt-auto py-3">
          <CommentForm />
        </div>
      </div>
    </div>
  )
}
