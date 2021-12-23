import React from "react";
import {
  HeartIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import PostModal from "../PostModal/PostModal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUserName, selectUserPhoto } from "../../../features/user/userSlice";

const Header = () => {
  const [showModal , setShowModal] = useState("close");

  const userPhoto = useSelector(selectUserPhoto);
  const username = useSelector(selectUserName)

  const Modal = () =>{
    switch (showModal) {
        case "close":
            setShowModal("open")
            break;
        case "open" :
            setShowModal("close")
            break;
        default:
            setShowModal("close")
            break;
    }
}


  return (

   <>
   
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl lg:mx-auto items-center mx-5">

          
        <div className="relative hidden lg:inline-grid w-28">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="relative flex-shrink-0 lg:hidden w-10">
          <img src="/images/mobileinsta.png" alt="logo" />
        </div>


        <form>
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none ">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="search"
              placeholder="search"
              className="bg-gray-50 block w-full pl-10 border-gray sm:text-sm focus:ring-black focus:border-black rounded-md"
            />
          </div>
        </form>


        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <div className="relative navBtn">
          <PaperAirplaneIcon className="navBtn rotate-45" />
          <span className="navBtn absolute -top-1 -right-2 text-white bg-red-600 flex justify-center items-center rounded-full p-2 w-5 h-5">2</span>
          </div>
          <PlusCircleIcon className="navBtn" onClick={() => Modal()} />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <MenuIcon className="md:hidden h-6 cursor-pointer" />
          <img
            src={userPhoto}
            alt={username}
            className="h-12 w-12 object-cover rounded-full  cursor-pointer"
          />
          
        </div>


      </div>
    </div>
   { showModal === "open" &&  <PostModal  modal={Modal} showmodal={setShowModal} />}
   </>

  )
};

export default Header;
