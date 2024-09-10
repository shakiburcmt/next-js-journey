// import { useParams } from 'next/navigation'
import React from 'react'

export default async function BlogPage({ params }) {
    const { description } = params;
    // const post = await getPost(description);
    return (
        <main className='mt-16'>
            
            <div>Blog id is: {description.blog}</div>
            {/* <div>Blog id is: {post.blog}</div> */}
        </main>
    )
}