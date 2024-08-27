import { NextResponse } from "next/server"

export const POST=async (req)=>{
    // take incoming data from the front end
    // desstructure, remember the request came in json 
    // but we have to convert to object to be able to use the data
   const {firstname,lastname,email,contact}=await req.json()

//    store user data in the database

   console.log("this arre the data that came in " +  firstname,lastname,contact,email)

   return new NextResponse(JSON.stringify(firstname,lastname,contact,email), {status:200})
}