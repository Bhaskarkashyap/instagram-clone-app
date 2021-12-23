import React from 'react'
import MiniProfile from './MiniProfile'
import Posts from './Posts'
import Stories from './storyPart/Stories'
import Suggestion from './Suggestion'

const PostContent = () => {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
            <section className="col-span-2">
                <Stories />
                <Posts />
            </section>

            <section className="hidden xl:inline-grid md:col-span-1">
               <div className="fixed top-20">
               <MiniProfile />
                <Suggestion />
               </div>
            </section>
        </main>
    )
}

export default PostContent
