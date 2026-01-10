import mongoose, { mongo } from 'mongoose'

const blogSchema=new mongoose.Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    image:{type:String},
    author:{type:String,required:true},
},{timestamps:true});

export const blogModel=mongoose.model("blog",blogSchema);