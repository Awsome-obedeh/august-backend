import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='mt-[100px] text-white px-10 gap-10'>
      <div className='flex justify-center items-center flex-col gap-6'> 

      <h1 className="text-2xl text-center md:text-4xl lg:font-extrabold">AdminLTE Bootstrap Admin Dashboard Template</h1>

      <p className='text-sm text-center md:pt-[100px] md:font-bold text-wrap'>Best open source admin dashboard & control panel theme. Built on top of Bootstrap, AdminLTE provides a<br></br> range of responsive, reusable, and commonly used components.</p>
      </div>

      <div className='flex items-center justify-center mt-[50px] gap-10 flex-wrap '>
        <button className='w-max px-4 py-2 rounded bg-transparent text-white border border-white tracking-wide '>Downlaod</button>
        <button className='w-max px-4 py-2 rounded bg-transparent text-white border border-white tracking-wide'>Live Preview </button>
        <button className='w-max px-4 py-2 rounded bg-transparent text-white border border-white tracking-wide'>Go Pro</button>
        <button className='w-max px-4 py-2 rounded bg-transparent text-white border border-white tracking-wide'> Docs</button>
      </div>

    <div className='relative w-full h-[200px] bg-red-700 mt-[50px] md:h-[400px]'>
      <Image optimizeddon className="object-contain" sizes="25vw" fill src="https://adminlte.io/wp-content/uploads/2021/04/hero-pic.png" />

    </div>

    </div>

   
  )
}

