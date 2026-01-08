import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import express from 'express'

const app=express();
dotenv.config();

const transporter=nodemailer.createTransport({
    service:"gmail",auth:{
        user:process.env.EMAIL,
        pass:process.env.PASS
    }
})

const sendMail=()=>{
    transporter.sendMail({
        from:`OTP services ${process.env.EMAIL}`,
        to:"abhishektiwari78562@gmail.com",
        subject:"otp generated 124585 and expire within 2 minutes"
    })
}

app.post("/",async(req,res)=>{
    await sendMail();
    res.json({message:"send otp successfully"});
})

app.listen(4000,()=>{
    console.log("server started");
})