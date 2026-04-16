import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.congif();

const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASS
    }
});

export const sendOtpMail=async(email,otp)=>{
    try{
        await transporter.sendMail({
            from:`SecureShop <${process.env.EMAIL}>`,
            to:email,
            subkect:"OTP verification",
            text:`Your OTP IS ${otp},expires within 2 minutes`
        });
        return true;
    }catch(err){
        return false;
    }
}