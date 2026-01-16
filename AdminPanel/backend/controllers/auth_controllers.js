import { status } from 'init';
import {authCollection} from '../models/auth_models.js'
import bcrypt from 'bcrypt'
import { sendOtp } from '../services/auth_services.js';

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
export const verify=async(req,res)=>{}
export const signout=async(req,res)=>{}