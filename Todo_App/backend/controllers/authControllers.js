import {userCollection} from '../models/user.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config();

export const signUp=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const existUser=await userCollection.findOne({email});
        if(existUser){
            res.json({message:"user already exist"});
        }
        const hashed=await bcrypt.hash(password,12); 
        const user=await userCollection.create({email,password:hashed});
        res.json({message:"user registered successfully",user:{
            id:user._id,
            email:user.email
        }});
    }catch(err){
        res.json(err.message);
    }
}

export const signIn=async(req,res)=>{
    try{
        const {email,password}=req.body;

        const user=await userCollection.findOne({email});
        if(!user){
            res.json({message:"user not found"});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            res.json({message:"password is incorrect!!"});
        }
        const token=jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
        )
        res.json({message:"user signin successfully",token,user:{
            id:user._id,
            email:user.email
        }})
    }catch(err){

    }
}