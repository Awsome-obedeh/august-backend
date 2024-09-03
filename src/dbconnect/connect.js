import mongoose from "mongoose"

export const dbConnect=async ()=>{
    try{
        // establisha connection with mongo db atlas
        const conn=await mongoose.connect(process.env.MONGODB_URL)
        if(conn){
            console.log("database connected")
            return conn
        }
    }

    catch(err){
        console.log(err.message)
    }

}