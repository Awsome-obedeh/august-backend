import { dbConnect } from "@/dbconnect/connect"
import User from "@/models/register"
import { NextResponse } from "next/server"

export const POST=async (req)=>{
    // destructure incoming data
    const {email,contact}=await req.json()
    console.log(typeof(contact))

    // call database connection
    await dbConnect()
    try {
        // check if the user email exist in database
        const userEmail=await User.findOne({email:email})
        if(!userEmail){
            return new NextResponse(JSON.stringify({msg:"Incorrect credentials 1"}),{status:400})
        }
        // if the user email matches the any email stored in the datbase, log the user to the console
        console.log(userEmail)
        // check if the user contact stored in the databsse matched the one sent 
        // front the request(front-end)

        if(userEmail.contact===   contact){
           
            return new NextResponse(JSON.stringify(userEmail), {status:200})
        }
        else{
            return new NextResponse(JSON.stringify({msg:"Incorrect credentials 2"}),{status:400})

        }


    } catch (e) {
        console.log(e.message)
        return new NextResponse(JOSN.stringify({msg:"server Error"}), {status:500})
    }

    
}