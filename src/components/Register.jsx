"use client"
import React, { useState } from 'react'

const Register = () => {

    const [firstname, setFirstname]=useState('')
    const [lastname, setLastname]=useState('')
    const [email, setEmail]=useState('')
    const [contact, setContact]=useState('')
    const [firstnameErr,setfirstnameErr]=useState(false)
    const [err,setErr]=useState(false)

    const submitHandler=async (e)=>{
        console.log(e)
        e.preventDefault()
        // hanlde form operation
        if(!firstname){
            setErr("please fil in firstname")
            setfirstnameErr(true)
           
        }
       else if(!lastname){
            setErr("please fil in lastname")
           
        }
         else if(!email){
            setErr("please fil in email")
           
        }
        else if(!contact){
            setErr("please fil in contact")
           
        }

        console.log("form was submitted")

        // send form data to an api
        try{
         const res= await fetch('http://localhost:3000/api/register',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            // the format you are sending the request in must match the content-type
            body:JSON.stringify({firstname,lastname,email,contact})
        })    
        }
        catch(e){
            console.log('something went wrong')
        }
       
    }
  return (
    <form action="" onSubmit={submitHandler}>
        {
            err && (

                <div className='bg-red-500 text-center w-full py-3 rounded-md'> {err}</div>
            ) 
        }

    <div className='border shadow-lg rounded-md px-5 flex flex-col items-center justify-center h-screen w-full'>
        <div className='w-full mb-3'>
            <label htmlFor="" className='text-sm text-gray-500 font-semibold'>Firstname</label>
            <input  onChange={(e)=>setFirstname(e.target.value)} type="text"  className={` ${firstnameErr ? " border border-red-600": " " } w-full py-2 rounded-md border border-gray-500 block px-4` }placeholder='firstname'/>
            {
                firstnameErr && (

                    <label className='text-red-500 text-semibold font-mono '>{err}</label>
                )
            }
        </div> 

        <div className='w-full mb-3'>
            <label htmlFor="" className='text-sm text-gray-500 font-semibold'>LAstname</label>
            <input type="text" onChange={(e)=>setLastname(e.target.value)}  className='w-full py-2 rounded-md border border-gray-500 block px-4' placeholder='firstname'/>
        </div> 
        <div className='w-full mb-3'>
            <label htmlFor="" className='text-sm text-gray-500 font-semibold'>Email</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)}  className='w-full py-2 rounded-md border border-gray-500 block px-4' placeholder='firstname'/>
        </div> 
        <div className='w-full mb-3'>
            <label htmlFor="" className='text-sm text-gray-500 font-semibold'>Contact</label>
            <input  type="number" onChange={(e)=>setContact(e.target.value)} inputmode="numeric" className='w-full py-2 rounded-md border border-gray-500 block px-4' placeholder='firstname'/>

            <input type="tel: +2347010471769" value="call"/>

            <select name="" id="">
                <option value="">+234</option>
                <option value="">+244</option>
                <option value="">+011</option>
            </select>
        </div> 
{
         firstname
         
    }{lastname}
        <button className='bg-green-600 text-white px-6 py-2 m-max rounded-lg '>Submit</button>
    </div>

    
    </form>
  )
}

export default Register
