import {authModel} from '../models/authModels'
export const IsUserExists=async(req,res,next)=>{
    const{email}=req.body;
   const user= await authModel.findOne({email});
   if(!user){
    next();
   }else{
    res.json({message:"user alreday exist"});
   }
}

export const isAuthenticated=(req,res,next)=>{
    if(req.cookies.auth){
        next();
    }else{
        res.json({message:"signin first!"});
    }
}