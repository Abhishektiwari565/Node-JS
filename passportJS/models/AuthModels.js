import mongoose from 'mongoose'

const authSchema=new mongoose.Schema({
    email:String,
    password:String
},{timestamps:true});

export const Auth=mongoose.model("auth",authSchema) ;