import mongoose, { mongo } from 'mongoose'

const authSchema=new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    users:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
},{timestamps:true});

export const authCollection=mongoose.model("auth",authSchema);