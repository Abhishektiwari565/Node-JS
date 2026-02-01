import mongoose from 'mongoose'

const userSchema=mongoose.Schema({
    email:{type:String,unique:true,required:true},
    name:String,
    phone:String,
    address:String,
    education:String,
    age:Number,
    exp:String,
    image:String
},{timestamps:true});

export const userCollection=mongoose.model("users",userSchema);