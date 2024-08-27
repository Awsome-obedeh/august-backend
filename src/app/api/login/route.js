import { NextResponse } from "next/server"

export const POST=async (req)=>{
    // destructure incoming data
    const {email,password}=await req.json()

    if(email=="obed@gmail.com" && password==='12345'){
        return new NextResponse(JSON.stringify({msg:"logged in sucessfully"}))
    } 
    else{
        return new NextResponse(JSON.stringify({msg:"user credentials incorrect"}))

    }
}