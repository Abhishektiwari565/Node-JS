
import {authCollection} from '../models/auth_models.js'
import bcrypt from 'bcrypt'
import { sendOtp } from '../services/auth_services.js';
import {otpCollection} from '../models/otp_models.js'
import jwt from 'jsonwebtoken'
import { status } from 'init';

export const signup=async(req,res)=>{
    const {email,password}=req.body;
    try{
    const hashed=await bcrypt.hash(password,12);
    await authCollection.create({email,password:hashed});
    res.json({status:true,message:"user registered successfully !"});
    }catch(err){
        res.json({status:false,message:"user registration failed !"});
    }

}
export const signin=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=authCollection.findOne({email});
        if(!user){
            return res.json({status:false,message:"user not found"});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.json({status:false,message:"password is incorrect!"});
        }

        const status=await sendOtp(email);
        if(status){
            res.json({status:true,message:"otp sent succesfully"});
        }else{
            res.json({status:false,message:"otp cant sent"});
        }
    }catch(err){
        res.json({status:false,message:"signin failed,registration first!"});
    }
}
export const verifyOtp=async(req,res)=>{
    const {email,otp}=req.body

    //match otp
    const record=await otpCollection.findOne({email,otp});
    if(!record){
        return res.json({status:false,message:"otp is incorrect"});
    }
    //check expiry
    if(record.expiry < new Date(Date.now())){
        return res.json({status:false,message:"otp is expired!!"});
    }
    
    try{
        const user=await authCollection.findOne({email});
        //create a jwt token and store in cookies
        const token=jwt.sign({...user},process.env.SECRET_KEY,{
            expiresIn:"1h"
        });
        res.cookie(auth_token,token,{maxAge:1000*60*60,httpOnly:true});
         await otpCollection.deleteMany({email});
        res.json({status:true,message:"OTP verified & signin successfully"});
    }catch(err){
        res.json({status:false,message:"OTP verification failed}"})
    }
}
export const signout=async(req,res)=>{
    res.clearCookie(auth_token);
    res.json({status:true,message:"signout successfully"});
}

export const checkLoginStatus=(req,res)=>{
    try{
        const token=req.cookies.auth_token;
        if(!token){
            return res.json({status:false,message:"signin first"});
        }  
        const decoded=jwt.verify(token,process.env.SECRET_KEY,{expiresIn:"1h"});
        return res.json({status:true,message:"Alreday Logged In",user:decoded.payload});
    }catch(err){
        res.json({status:false,message:"Logged out ,Login First to access"});
    }
}