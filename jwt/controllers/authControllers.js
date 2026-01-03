import {User} from '../models/authModels.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signup=async(req,res)=>{
    try{
    const {email,password}=req.body;
    const hashedPassword=await bcrypt.hash(password,10);
    const result=User.create({email,password:hashedPassword});
    res.json({message:"signin sucessfully !!",result});
    }catch(err){
        res.json(err);
    }
}

export const signin=async(req,res)=>{
    const {email,password}=req.body; //to get a password and email from a body 
    const isMatch=bcrypt.compare(password,User.password);//it is create to check password is same as password of signup.
    if(!isMatch){//if password is not match then give a message 
        return res.json({message:"wrong password !!"});
    }
    const user=await User.findOne({email});//it is create to check user exist or not.
    if(!user){//if user not found it will give a message
        return res.json({message:"user not exist "});
    }

    //for creating a token
    const token=jwt.sign({userId:user._id},"!@#$%^&*()",{expiresIn:"ih"});
    res.json({message:"Login success",token});

}

export const home=(req,res)=>{
    res.json({mess})
}