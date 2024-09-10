import Link from 'next/link'
import React from 'react'

export default function ContactLayout({children}) {
    return (
        <div>
            <ul className="flex gap-6">
            <li>
              <Link href="/contact/details">For Details</Link>
            </li>
            <li>
            <Link href="/contact">More Details</Link>
            </li>
          </ul>
            {children}
        </div>
    )
}