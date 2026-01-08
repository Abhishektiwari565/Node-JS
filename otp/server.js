import {connectDB} from './config/db.js'
import express from 'express'
import router from './routes/otpRoutes.js';

const app=express();
app.use(express.json());
connectDB()

app.use("/otp",router)
 

app.listen(4000,()=>{
    console.log("server started");
})