import React, { useContext } from 'react'
import { context } from '../../../../context/userContext'
import Story from './Story'
// import storyData from './storyData'

const Stories = () => {
 
    const {storyData}  = useContext(context)
    return (

                <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
           {storyData.map((info) => (
                    <Story key={info.id} {...info} />
                    ))}
                    </div>
  
    )
}

export default Stories
