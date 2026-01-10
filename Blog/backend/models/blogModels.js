import mongoose, { mongo } from 'mongoose'

const blogSchema=new mongoose.Schema({
    title:String,
    content:String,
    image:String,
    author:String
},{timestamps:true});

export const blogModel=mongoose.model("blog",blogSchema);