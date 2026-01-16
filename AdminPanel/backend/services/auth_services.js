import {otpCollection} from '../models/otp_models.js'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import { sendMail } from '../../../Blog/backend/services/services.js';

dotenv.config();

const transport=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASS
    }
});

export const sendOtp=async(email)=>{
    const otp=Math.floor(100000+Math.random()*90000);
    const expiry=new Date(Date.now()+1000*60*2);
  try{
      await otpCollection.create({email,otp,expiry});
    await transport.sendMail({
        from:process.env.EMAIL,
        to:email,
        subject:"OTP Verification",
        text:`Your otp is ${otp} is expire within 2 minutes`
    });
    return true;
  }catch(err){
    return false;
  }
}

