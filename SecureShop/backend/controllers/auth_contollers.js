import {authModel} from '../models/auth_models.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import {sendOtpMail} from '../services/otp_services.js'

dotenv.config();
export const register=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const otp=Math.floor(
            1000+Math.random()*9000
        ).toString();

        const expireOtp=new Date(Date.now()+2*60*1000);
        const existUser=await authModel.find({email});
        if(existUser){
            res.json({message:"user already exist"});
        }
        const hashed=await bcrypt.hash(password,12);
        const user=new authModel.create({name,email,password:hashed,otp,expireOtp});
        const isSent=await sendOtpMail({email,otp});
        if(!isSent){
            res.json({message:"Failed to send otp"});
        }
        res.json({message:"otp sent successfully on your email",otp});
    }catch(err){
        res.json({message:"user not registered",err:err.message});
    }
}

export const verifyOtp=async(req,res)=>{
    try{
        const {email,otp}=req.body;
        const user =await authModel.findOne({email});
        if(new Date()>user.expireOtp){
            res.json({message:"otp expired"});
        }
        if(user.otp==otp){
            user.isVerified=true;
            await user.save();
            const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"});
            res.json({message:"user verified suucessfullly",token});
        }
    }catch(err){
        res.json({message:"invalid otp",err:err.message});
    }
}

export const Login=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user= await authModel.findOne({email});
        if(!user){
            res.json({message:"user not found"});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            res.json({messsage:"invalid password"});
        }
        const token=jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
        );
        res.json(token);
    }catch{err}{
        res.json({message:"login failed",err:err.message});
    }
}