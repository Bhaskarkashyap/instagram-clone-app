import React from 'react'

const Story = ({login , avatar_url}) => {
    return (
        <div>
 <div className="w-14 h-14 bg-red-500 rounded-full object-cover p-0.5 transform hover:scale-110 transition-all duration-150 ease-out cursor-pointer ">
 <img src={avatar_url} alt="" className="w-full h-full rounded-full object-cover p-0.5 bg-white" />
 </div>

<p className="text-xs w-14 truncate text-center"> {login}</p>
        </div>
    )
}

export default Story
