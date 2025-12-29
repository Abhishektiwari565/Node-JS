import express from 'express'
import cookieParser from 'cookie-parser'

const app=express();
app.use(express.json());
app.use(cookieParser());

const user={
    email:"admin@gmail.com",
    password:"admin@123"
}

app.post("/",(req,res)=>{
    const {email,password}=req.body;
    if(email==user.email && password==user.password){
        res.cookie("auth",true,{
            maxAge:1000*60*60,
            sameSite:"strict",
            httpOnly:true
        }) 
         res.json({message:"Login successfully !"})
    }else{
      res.json({message:"enter valid credentials"}) 
    }
})

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