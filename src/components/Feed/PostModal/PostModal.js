import React, { useState } from 'react'
import firebase  from 'firebase';
import { db, storage } from '../../../Database/firebase';

const PostModal = ({modal, showmodal}) => {
    const [showImage , setShowImage] = useState(null);
    const [caption , setCaption] = useState('');
    const [loading , setLoading] = useState(false);

    const handlechange = (e) => {
    
        const fileValue = e.target.files[0];
        setShowImage(fileValue)
    }

    const captionChangeHadle = (e) => {
       setCaption(e.target.value)
    }

    const HandleClick = (e) =>{
   e.preventDefault();
   if(loading) return;
   setLoading(true)
    
   const updateTast = storage.ref(`/images/${showImage.name}`).put(showImage);
   updateTast.on(
       "state changed",
       (snapshot) => {},
       (error) =>console.log(error),
       () => {
           storage.ref('images')
           .child(showImage.name)
           .getDownloadURL()
           .then((url) => {
               db.collection("posts").add({
                   timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                   fileurl:url,
                   caption:caption,
               })
           })
          
           setLoading(false)
           setShowImage(null)
           setCaption("")
           showmodal("close")
       }
   )  
    } 

    return (
        <div className="absolute -inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <form onSubmit={HandleClick} className="bg-white w-96 p-2 flex justify-center  flex-col">
               <h3 className="text-center font-semibold">create post</h3>
             <input type="file" id="fileData" className="hidden" onChange={handlechange} />
           <label htmlFor="fileData" className="ml-auto mr-auto">
           <img src="/images/addPost.png" alt="" className="h-10 cursor-pointer m-5 transform hover:scale-125 transition-all duration-150 ease-in-out " />
           </label>
      
          {showImage &&     <img src={URL.createObjectURL(showImage)} alt="" className="object-cover w-full h-full" />}
          <textarea type="textarea" placeholder="Add a caption..."
          className="border-none flex-1 outline-none focus:ring-0 resize-none max-h-10 break-words break-all overscroll-none scrollbar-hide border-t mt-2 block"
          value={caption}
         onChange={captionChangeHadle}
          />

      <div className="flex">
      <button type="submit" className="bg-blue-400 w-full text-white p-1 m-2 rounded-sm hover:bg-blue-700 ">{loading ? "uploading..." : "upload"}</button>
          <button className="bg-red-700 w-full text-white p-1 m-2 rounded-sm hover:bg-red-800 " onClick={()=> modal()}>close</button>
      </div>
            </form>
        </div>
  
    )
}

export default PostModal
