"use client"
import React, { useState } from 'react'

const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const submitHandler= async (e)=>{
        // prevent form default
        e.preventDefault()


        const res=await fetch('http://localhost:3000/api/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email,password})
        })


    }
  return (
    <form>
       <div className='w-full mb-3'>
            <label htmlFor="" className='text-sm text-gray-500 font-semibold'>Email</label>
            <input onChange={(e)=>setEmail(e.target.value) }type="email"   className='w-full py-2 rounded-md border border-gray-500 block px-4' placeholder='firstname'/>
        </div> 
       <div className='w-full mb-3'>
            <label htmlFor="" className='text-sm text-gray-500 font-semibold'>Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} type="password"  className='w-full py-2 rounded-md border border-gray-500 block px-4' placeholder='firstname'/>
        </div> 
        <button className='bg-green-500 text-white '>Submit</button>
    </form>
  )
}

export default Login
