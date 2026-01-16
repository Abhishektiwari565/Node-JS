import {otpCollection} from '../models/otp_models.js'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config();

const transport=nodemailer.createTransport({
    service:"gmail",
    auth:{
        
    }
})

