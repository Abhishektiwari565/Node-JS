import Auth from '../models/authModels.js'

export const signUp=async(req,res)=>{
   try{
     const {email,password}=req.body;

    const userExists=await Auth.findOne({email})
    if(userExists){
        return res.json({message:"user alreday exists"})
    }

    // new user 
   await Auth.create({
        email,password
    });
    res.json({message:"signUp sucessfully"});

   }catch(err){
    res.json({message:"signUp failed",error:err})
   }
}


export const login=async(req,res)=>{
    const {email,password}=req.body;

    const user =await Auth.findOne({email})
    if(!user){
        return res.json({message:"user not found"})
    }if(user.password !== password){
        return res.json({message:"Invalid password"})
    }

    res.cookie("auth",true,{
        maxAge:1000*60*60,
        httpOnly:true
    });
    res.json({message:"Login succesfully!!"})
}

export const logOut=(req,res)=>{
    res.clearCookie("auth");
    res.json({message:"user Logout "})
}