import {blogModel} from '../models/blogModels.js'

export const createBlogs=async(req,res)=>{
   try{
     const {title,content}=req.body;

    await blogModel.create({title,content,author:req.cookies.auth});
    res.json({message:"Blog created"});
   }catch(err){
    res.json({message:"Blog not created"});
   }
}

export const getBlogs=async(req,res)=>{
    const blogs=await blogModel.find();
    res.json(blogs);
}