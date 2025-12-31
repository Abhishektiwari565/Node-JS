import Auth from '../models/authModels.js'
import bcrypt from 'bcrypt'

export const signUp=async(req,res)=>{
   try{
     const {email,password,name,phone}=req.body;

    const userExists=await Auth.findOne({email})
    if(userExists){
        return res.json({message:"user alreday exists"})
    }
    const hashepassword=await bcrypt.hash(password,10);

    // new user 
   const user=await Auth.create({
       name,email,password:hashepassword,phone
    });
    res.json({message:"signUp sucessfully",user});

   }catch(err){
    res.json({message:"signUp failed",error:err})
   }
}


export const signIn=async(req,res)=>{
    const {email,password}=req.body;

    const user =await Auth.findOne({email})
    if(!user){
        return res.json({message:"user not found"})
    }
     const isMatch= await bcrypt.compare(password==user.password)
    if(!isMatch){
        return res.json({message:"Invalid password"})
    }

    res.cookie("auth","true",{
        maxAge:1000*60*60,
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    }); 
    res.json({message:"Login succesfully!!"})
}

export const logOut=(req,res)=>{
    res.clearCookie("auth",{ httpOnly: true,
        secure: false,
        sameSite: "lax"});
    res.json({message:"user Logout "})
}

export const homePage=async(req,res)=>{
   const user= await Auth.find();
   res.json({message:"home page",user});
}