'use client'
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';


function Nav() {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
         <button onClick={() => setIsOpen(!isOpen)} className="max-sm:hidden text-3xl mr-3 text-hd-color hover:cursor-pointer">☰</button>
        <div className="w-full">
            <ul className={`absolute top-12 right-4 bg-base-color text-hd-bg-color p-4 rounded shadow-lg space-y-2 ${isOpen ? 'block' : 'hidden'} max-sm:hidden`}>
              <li className=' hover:text-hd-color underline'>
                <Link href="/"> Home </Link>
              </li>
              <li className=' hover:text-hd-color underline'>
                <Link href="/patterns"> Patterns </Link>
              </li>
              <li className=' hover:text-hd-color underline'>
                <Link href="/stores"> Stores </Link>
              </li>
              <li className=' hover:text-hd-color underline'>
                <Link href="/blog"> Blog </Link>
              </li>
            </ul>
          </div>
    </div>
  )
}

export default Nav