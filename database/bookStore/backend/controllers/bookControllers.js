import {BookModel} from '../models/bookModels.js'

export const addBook=async(req,res)=>{
try{
    const result=await new BookModel.create(req.body)
    res.status(201).json({message:"booke added ",result:result})
}catch(err){
    res.status(400).json({message:"book no added",err:err})
}
}

export const readBook=async(req,res)=>{
    try{
        const data= await BookModel.find()
        res.json(data);
    }catch(err){
       res.json({message:"book not found",err:err})
    }
}

// export const updateBook=async(req,res)=>{
//     try{

//     }catch(err){

//     }
// }