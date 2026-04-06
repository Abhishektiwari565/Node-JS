import mongoose from 'mongoose'

 const userSchema=new mongoose.schema({
    email:{type:String,unique:true},
    password:String
})
export const userCollection= mongoose.model("user",userSchema);
    