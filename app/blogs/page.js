import Link from 'next/link'
import React from 'react'

export default function Blogs() {
    const blogs = [{
        id: "00",
        blog: "Blog 1",
        description: "lerem imsup hdjkfhkjhasdfkj"
    },
    {
        id: "000",
        blog: "Blog 2",
        description: "fgvjfdioshgisr"
        },
        {
            id: "0000",
            blog: "Blog 3",
            description: "fabc"
    }
    ]

    return (
        <main className='mt-16'>
            <ul>
                {blogs.map((blog =>
                    {
                    return <li key={blog}>
                            <Link href={`/blogs/${blog.id}`}>{blog.blog}</Link>
                        </li>
                    }
                ))}
            </ul>
        </main>
    )
}