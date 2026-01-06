import express from 'express'
import cookieParser from 'cookie-parser'
import {connectDB} from './config/db.js'

const app=express();
app.use(express.json());
app.use(cookieParser());

app.listen(4000,()=>{
    console.log("server started");
})