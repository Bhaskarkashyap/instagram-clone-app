import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { auth, db } from '../../../Database/firebase';
import { selectUserName, selectUserPhoto, setUserLogInDetails } from '../../../features/user/userSlice';
import { HeartIcon } from "@heroicons/react/solid";

import Post from './Post'

const Posts = () => {
  const userPhoto = useSelector(selectUserPhoto);
const username = useSelector(selectUserName)

    const [postData , setPostData] = useState([])
 
    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    const setUser  = (user) => {
      dispatch(
          setUserLogInDetails({
              name:user.displayName,
              email: user.email,
              photo : user.photoURL,
          })
      )
     }

  useEffect(() => {
    auth.onAuthStateChanged( async (authUser) => {
        if(authUser){
            
            setUser(authUser);
            navigate('/instagram')
        }
    
    })
  }, [navigate ])

    useEffect(() => {
      db.collection("posts").orderBy('timestamp' , 'desc').onSnapshot(snapshot => {
           setPostData(snapshot.docs.map(doc => ({
               id:doc.id,
               post:doc.data()
           })))
      })
    }, [])

    const DeletePost = (id) => {
      db.collection('posts').doc(id).delete();
    }

    return (
        <div>
      {
          postData.map(({id , post}) => (
            <Post 
            key={id}
            uid={id}
            username={username}
            userImg={userPhoto}
           img={post.fileurl}
           caption={post.caption}
           deletePost = {DeletePost}
           Icon={HeartIcon}
            />
          ))
      }
        </div>
    )
}

export default Posts
