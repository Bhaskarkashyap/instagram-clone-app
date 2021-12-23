// import  faker  from 'faker'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { context } from '../../../context/userContext';
import SideFooter from './SideFooter';

const Suggestion = () => {
 const [suggestionData  , setSuggestionData] = useState([])
    
    const {storyData}  = useContext(context)

    useEffect(() => {
        const profileData = storyData.slice(20);
        setSuggestionData(profileData)

        
    }, [storyData])
    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold text-gray-400 ">Suggestion for you</h3>
                <button className="text-gray-600 font-semibold ">See All</button>
            </div>

            {suggestionData.map((profile) => (
                <div key={profile.id} className="flex items-center justify-between mt-3">
                     <img src={profile.avatar_url} className="w-10 h-10 rounded-full border p-[2px] object-cover" alt="" />
                  
                     <div className="flex-1 ml-4">
                         <h2 className="font-semibold text-sm ">{profile.login}</h2>
                         <h3 className="text-xs text-gray-400 ">Works at</h3>
                     </div>
                     <button className="text-blue-400 text-sm">Follow</button>
                </div>
            ))}
<SideFooter />
        </div>
    )
}

export default Suggestion
