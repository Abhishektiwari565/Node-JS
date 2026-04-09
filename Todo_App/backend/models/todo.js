import mongoose from 'mongoose'

const todoSchema=mongoose.Schema({
    text:String,
    userId:String
});

export const todoCollection=new mongoose.model("todo",todoSchema);