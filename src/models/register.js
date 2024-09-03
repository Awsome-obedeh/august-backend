import mongoose from "mongoose"

const registerSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    
    },
    lastName:{
        type:String,
        required:true,
    
    },

    email:{
        type:String,
        required:true,

    },
    contact:{
        type:Number,
        required:true
    }
    
})
// we want to check if the models "user " alredy exists, if it does not, model, which means create a 
// collect called user
const User=mongoose.models.user || mongoose.model('user', registerSchema)
export default User