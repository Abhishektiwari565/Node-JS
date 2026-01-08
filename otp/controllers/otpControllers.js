import {otpModel} from '../models/otpModels.js'
import {sendOtpMail} from '../services/otpServices.js'

export const sendOtp=async(req,res)=>{
    const {email}=req.body;

   const otp=Math.floor( 10000+Math.random()*900000);
   const expiry=new Date(Date.now()+2*60*1000);
   try{
    await otpModel.create({email,otp,expiry});
    const status= await sendOtpMail(email,otp);
    
    if(status){
        res.json({message:"otp sent successfully"});
    }else{
        res.json({message:"cant sent mail"});
    }
   }catch(err){
    res.json({message:"otp not generated"});
   }
}

export const verifyOtp=async(req,res)=>{
    const {email,otp}=req.body;
    const data=await otpModel.findOne({email,otp});
    if(!data){
        res.json({message:"otp mismatched"});
    }
    if(data.expiry<new Date(Date.now())){
        return res.json({message:"otp expired"});
    }
    res.json({message:"otp verified"});
    await otpModel.deleteMany({email});
    
}