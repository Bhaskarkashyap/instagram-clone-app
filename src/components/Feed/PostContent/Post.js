import React, { useState } from 'react';
import { BookmarkIcon, ChatIcon, HeartIcon,EmojiHappyIcon, PaperAirplaneIcon } from "@heroicons/react/outline";

import { TrashIcon } from "@heroicons/react/solid";

const Post = ({username , userImg ,img , caption, deletePost , uid, Icon}) => {
    const [liked , setLiked] = useState(false);
    return (
        <div className="bg-white my-7 border rounded-sm">
            {/* Header */}

            <div className="flex items-center p-5">
          <img src={userImg} alt={username} className="rounded-full h-12 w-12 object-cover border p-1 mr-3" />
          <p className="font-bold flex-1">{username}</p>
          <TrashIcon onClick={() => deletePost(uid)} className="h-5 cursor-pointer hover:text-red-700"   />
          
            </div>

            <img src={img} alt="" className="object-cover w-full" />
           
           <div className="flex justify-between px-4 pt-4">
      <div className="flex space-x-4">
         <div onClick={() => setLiked(!liked)}>
       {
           liked ?   <Icon className="postBtn text-red-600 " /> :  <HeartIcon className="postBtn" />
       }
         </div>
          <ChatIcon className="postBtn" />
          <PaperAirplaneIcon className="postBtn rotate-45" />
      </div>
      <BookmarkIcon className="postBtn" />
           </div>
           
           <p className="p-5 truncate">
               <span className="font-bold mr-1">{username}</span>
               {caption}
           </p>

           <form className="flex items-center p-2  border-t ">
          <EmojiHappyIcon className="h-7" />
          <textarea type="textarea" placeholder="Add a comment...."
          className="border-none flex-1 outline-none focus:ring-0 resize-none max-h-10 break-words break-all overscroll-none scrollbar-hide"
          />
          <button className="font-semibold text-blue-400">post</button>
           </form>

        </div>
    )
}

export default Post
