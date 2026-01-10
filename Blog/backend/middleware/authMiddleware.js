import {authModel} from '../models/authModels.js'
export const IsUserExists=async(req,res,next)=>{
    const{email}=req.body;
   const user= await authModel.findOne({email});
   if(!user){
    next();
   }else{
    return res.json({message:"user alreday exist"});
   }
}

export const isAuthenticated=(req,res,next)=>{
    if(req.cookies.auth){
        next();
    }else{
       return res.json({message:"signin first!"});
    }
}

export const userNotSignIn = (req, res, next) => {
  if (req.cookies && req.cookies.auth) {
    next(); // user is logged in
  } else {
    return res.status(401).json({
      message: "signin first to signout"
    });
  }
};
