import {otpModel} from '../models/otpModels.js'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config();

const transport=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASS
    }
})
export const sendMail=(req,res)=>{
    const {email}=req.body;
    const otp=Math.floor(
       1000000+ Math.random()*900000
    );
    const expiry=new Date(Date.now()+2*1000*60);
    transport.sendMail({
        from:`OTP serivces ${process.env.EMAIL}`,
        to:email,
        subject:"OTP verification",
        text:`otp is ${otp} expire within`
    })
}