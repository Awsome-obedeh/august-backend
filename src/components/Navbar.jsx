import Link from 'next/link'
import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {

  const [showNav,setShowNav]= useState(false)

  const toggleNav=()=>{
    setShowNav(prev=>!prev)
  }
  return (
    <div className='relative'>

      <div className=' bg-red-400 px-10 flex justify-between items-center md:bg-yellow-600 lg:bg-green-600'  >
        {/* left */}
        <h2 className='text-white text-2xl'>Admin <span>LTE</span></h2>

        {/* right */}
        <div className='hidden md:flex items-center gap-4 '>
          <Link href={'/'}>Home</Link>
          <Link href={'/'}>Documents</Link>
          <Link href={'/'}>Premium</Link>
          <Link href={'/'}>Template</Link>
          <Link href={'/'}>Blog</Link>

          <button className='py-2 px-9 bg-transparent rounded-full border border-white'>Suscribe</button>
        </div>

        <div className='md:hidden' onClick={toggleNav}>
          <IoMdMenu />

        </div>
      </div>

      {/* sidebar */}
      <div className={` ${showNav ? "block " : "hidden" }hidden z-50 absolute  h-screen  w-[300px] shadow-lg bg-slate-700`}>
        <div className='flex items-center gap-4 flex-col pt-20'>
          <Link href={'/'}>Home</Link>
          <Link href={'/'}>Documents</Link>
          <Link href={'/'}>Premium</Link>
          <Link href={'/'}>Template</Link>
          <Link href={'/'}>Blog</Link>

          <button className='py-2 px-9 bg-transparent rounded-full border border-white'>Suscribe</button>
        </div>
      </div>




    </div>
  )
}
