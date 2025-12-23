import {BookModel} from '../models/bookModels.js'

export const addBook=async(req,res)=>{
try{
    const result=await BookModel.create(req.body)
    res.status(201).json({message:"book added ",result:result})
}catch(err){
    res.status(400).json({message:"book no added",error:err.message})
}
}

export const readBook=async(req,res)=>{
    try{
        const data= await BookModel.find()
        res.json(data);
    }catch(err){
       res.json({message:"book not found",error:err.message})
    }
}

export const updateBook=async(req,res)=>{
    try{
        const result=await BookModel.updateOne({_id:req.params.id},{$set:req.body})
        res.json({message:"book updated",result:result})
    }catch(err){
        res.json({message:"book not updated",error:err.message})
    }
}

export const deleteBook=async(req,res)=>{
   try{
     const result=await BookModel.deleteOne({_id:req.params.id});
    res.json({message:"book deleted",result:result})
   }catch(err){
    res.json({message:"book not deleted",error:err.message})
   }
}