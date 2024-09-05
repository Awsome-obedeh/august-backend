import { dbConnect } from "@/dbconnect/connect"
import User from "@/models/register"
import { NextResponse } from "next/server"

export const POST=async (req)=>{
    // take incoming data from the front end
    // desstructure, remember the request came in json 
    // but we have to convert to object to be able to use the data
   const {firstname,lastname,email,contact}=await req.json()

//    store user data in the database
// /call datbase connction
   await dbConnect()

   // insert into databse
   const userDetails= new User({
      // the 
      firstName:firstname,
      lastName:lastname,
      email:email,
      contact:contact
   })
// save the user in the databse
   await userDetails.save()
// IF user registeration i not sucessful,
   if(!userDetails){
      return new NextResponse(JSON.stringify({msg:"user registeration failed"}),{status:400})
   }
   
   return new NextResponse(JSON.stringify({msg:"user registeration successfull"} , {status:201}))



}