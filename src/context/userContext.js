import { createContext, useEffect, useState } from "react";

export const context = createContext();

const UserContext = ({children}) => {
    const [storyData , setStoryData] = useState([]);
    
    const fetchUser = async() => {
    try {
        const users = await fetch(process.env.REACT_APP_GITHUB_USER_API);
        const response = await users.json()
        setStoryData(response)

    } catch (error) {
        alert(error)
    }
}
    useEffect(() => {
        fetchUser()
       
      }, [])
          
    return(
        <context.Provider value={{storyData}}>
            {
                children
            }
        </context.Provider>
    )
}

export default UserContext;