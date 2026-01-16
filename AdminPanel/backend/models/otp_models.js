import mongoose from 'mongoose'

const otpModels=new mongoose.Schema({
    email:{type:String,required:true},
    otp:{type:Number,required:true},
    expiry:{type:Date,required:true},
},{timestamps:true});

export const otpCollection=mongoose.model("otp",otpModels);