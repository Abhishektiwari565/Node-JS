import mongoose from 'mongoose'

const userSchema=mongoose.Schema({
    email:{type:String,unique:true},
    password:String
});

export const userCollection=new mongoose.model("user",userSchema);