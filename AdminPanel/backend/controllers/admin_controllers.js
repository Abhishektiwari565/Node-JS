import { status } from 'init'
import {userCollection} from '../models/user_models.js'

export const addUser=async(req,res)=>{
    try{
        await userCollection.create(req.body);
        return res.json({status:true,message:"user added successfully"});
    }catch(err){
        res.json({status:false,message:err.message});
    }
}

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