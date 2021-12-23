import React from 'react'
import { useSelector } from 'react-redux';
import { selectUserName, selectUserPhoto, setSignOutState } from '../../../features/user/userSlice';

import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { auth } from '../../../Database/firebase';

const MiniProfile = () => {
    const userPhoto = useSelector(selectUserPhoto);
  const username = useSelector(selectUserName)
const dispatch = useDispatch();
const navigate = useNavigate()

  const signOut = () => {
      if(username){
          auth.signOut().then(() => {
              dispatch(setSignOutState())
              navigate('/')
          }).catch((error) => {
              alert(error)
          })
      }
  }
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img src={userPhoto} alt={username} className="w-16 h-16 rounded-full border p-[2px] object-cover" />

            <div className="flex-1 mx-4">
                <h2 className="font-bold">{username}</h2>
                <h3 className="text-sm text-gray-400" >Welcome to Instagram</h3>
            </div>
            <button className="text-blue-400  text-sm font-semibold " onClick={signOut}>Sign out</button>
        </div>
    )
}

export default MiniProfile
