import express from 'express'
import cookieParser from 'cookie-parser'
import {connectDB} from './config/db.js'
import authRoutes from './routes/authRoutes.js'


const app=express();
app.use(express.json());
app.use(cookieParser());
connectDB();

app.use("/api/auth",authRoutes)

const isAuthenticated=(req,res,next)=>{
    if(req.cookies.auth){
        next();
    }else{
        res.json({message:"login first to access home page"})
    }
}

app.get("/home",isAuthenticated,(req,res)=>{
    res.json({message:"Home page"})
})

app.listen(4000,()=>console.log("server started"));