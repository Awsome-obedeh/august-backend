import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <>
    
    <div className='bg-red-400 px-10 flex justify-between items-center md:bg-yellow-600 lg:bg-green-600'  >
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
    </div>


    

    </>
  )
}
