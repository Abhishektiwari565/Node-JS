import {User} from '../models/authModels.js'

export const signup=async(req,res)=>{
    const {email,password}=req.body;
    const result=User.create({email,password});
    res.json({message:"signin sucessfully !!",result})
}