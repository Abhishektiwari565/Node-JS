import { status } from 'init'
import {userCollection} from '../models/user_models.js'
import dotenv from 'dotenv'

dotenv.config();

// export const addUser=async(req,res)=>{
//     try{
//         await userCollection.create(req.body);
//         return res.json({status:true,message:"user added successfully"});
//     }catch(err){
//         res.json({status:false,message:err.message});
//     }
// }

export const updateUser=async(req,res)=>{
    try{
        await userCollection.updateOne({email},{$set:req.body});
        return res.json({status:true,message:"user updated successfully"});
    }catch(err){
        res.json({status:false,message:err.message});
    }
}

export const getAllUser=async(req,res)=>{
    try{
        const user=await userCollection.find()
        return res.json({status:true,user:user});
    }catch(err){
        return res.json({status:false,message:err.message});
    }
}

export const getCurrentUser=async(req,res)=>{
 try{
       const token=req.cookies.auth_token;
       console.log(token)
    const decoded=jwt.verify(token,process.env.SECRET_KEY).payload;
    return res.json({status:true,message:"user fetched successfully !",user:decoded});
 }catch(err){
    return res.json({status:false,message:err.message});
 }
}