import express from 'express'
import cookieParser from 'cookie-parser'
import {connectDB} from './config/db.js'
import authRoutes from './routes/authRoutes.js'


const app=express();
app.use(express.json());
app.use(cookieParser());
connectDB();

app.use("/api/auth",authRoutes)


app.listen(4000,()=>console.log("server started"));