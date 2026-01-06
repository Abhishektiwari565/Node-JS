import {Auth} from '../models/AuthModels.js'
import bcrypt from 'bcrypt'

export const signup=(req,res)=>{
    try{
        const {email,password}=req.body;
        const hashedPassword=bcrypt.hash(password,10);
        await Auth.create({email,password:hashedPassword});
        res.json({message:"user registered"});

    }catch(err){
        res.json({message:"user not registered",err});
    }
}
export const signin=(){}
export const signout=(){}
export const home=(){}