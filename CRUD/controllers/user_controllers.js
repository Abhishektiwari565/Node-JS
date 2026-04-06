import {userCollection} from "../models/user_models.js"
export const signUp=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user = await userCollection.create({email,password});
        res.json({message:"User created successfully", user});
    }catch(err){
        res.json({message:err.message})
    }
}