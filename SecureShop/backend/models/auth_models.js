import mongoose from 'mongoose'

const authSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    otp:String,
    isVerified:{type:Boolean,default:false},
    expireOtp:Date
},{timestamps:true});

export const authModel=mongoose.model("auth",authSchema);