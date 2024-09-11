"use client"
import React, { useState } from 'react'

const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [err,setErr]=useState(false)
    const [loading,setLoading]=useState(false)
    const submitHandler= async (e)=>{
        setLoading(true)
        // prevent form default
        e.preventDefault()


        const res=await fetch('http://localhost:3000/api/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            // strignify my data to json
            body:JSON.stringify({email,contact})
        })
        if(res.status==400){
            setErr(true)
            setLoading(false)
        }
        
        console.log(res)

    }
  return (
    <form onSubmit={submitHandler}>
        {
            err && (
                <p className='text-red-600 text-2xl font-semibold text-center font-mono'>iiii</p>
            ) 
        }
       
       <div className='w-full mb-3'>
            <label htmlFor="" className='text-sm text-gray-500 font-semibold'>Email</label>
            <input onChange={(e)=>setEmail(e.target.value) }type="email"   className='w-full py-2 rounded-md border border-gray-500 block px-4' placeholder='firstname'/>
        </div> 
       <div className='w-full mb-3'>
            <label htmlFor="" className='text-sm text-gray-500 font-semibold'>Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} type="password"  className='w-full py-2 rounded-md border border-gray-500 block px-4' placeholder='firstname'/>
        </div> 

        {
            loading ? <div className="loader"></div>: 
        <button className='bg-green-500 text-white w-max px-3 py-2 rounded-md'>Submit</button>
        }
    </form>
  )
}

export default Login
