import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName, setUserLogInDetails } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../../Database/firebase';




const LoginComponent = () => {
    const username = useSelector(selectUserName)

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
      auth.onAuthStateChanged( async (user) => {
          if(user){
              console.log(user.displayName)
              setUser(user);
              navigate('/instagram')
          }
      })
    }, [navigate])

    const handleAuth = () => {
     if(!username) {
        auth.signInWithPopup(provider).then((result) => {
            setUser(result.user)
        }).catch((error) => {
            alert(error.message)
        })
     }
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    
    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
     <div className="flex w-3/5">
         <img src="/images/iphone-with-profile.jpg" alt="iphone-android" />
     </div>
     <div className="flex flex-col w-2/5">
         <div className="flex justify-center w-full mb-5">
             <img src="/images/logo.png" alt="logo" />
         </div>

         <form onSubmit={handleSubmit}>
             {/* <input type="text" placeholder="enter your email"
             className="text-sm text-gray-base w-full py-5 px-4 h-2 border border-gray-primary rounded mb-2"
             />
                    <input type="text" placeholder="enter your email"
             className="text-sm text-gray-base w-full py-5 px-4 h-2 border border-gray-primary rounded mb-2"
             /> */}
             <button className="text-center w-full bg-red-700 hover:bg-red-600 text-white shadow-sm mb-2 border rounded p-1" onClick={handleAuth}>Google +</button>
             {/* <button className="text-center w-full bg-blue-500 text-white border rounded p-1">Login</button> */}
          
         </form>
     </div>
        </div>
    )
}

export default LoginComponent
