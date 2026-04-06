import {userCollection} from "../models/user_models.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const signUp=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const hashed=await bcrypt.hash(password,12)
        const user = await userCollection.create({email,password:hashed});
        res.json({message:"User created successfully", user});
    }catch(err){
        res.json({message:err.message})
    }
}

export const signIn=async(req,res)=>{
   try{
     const {email,password}=req.body;
    const user=await userCollection.findOne({email});

    if(!user){
        res.json({message:"user not found !"});
    }
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        res.json({message:"password is incorrect!!"});
    }

    const token=jwt.sign(
        {id:user._id},
        process.env.JWT_SECRET,
        {xpiresIn:"1d"}
    );
    res.json({message:"login successfully",token,user:{
        id:user._id,
        email:user.email
    }});
   }catch(err){
    res.json(err.message);
   }
}