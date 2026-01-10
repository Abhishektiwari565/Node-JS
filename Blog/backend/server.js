import express from 'express'
import router from './routes/authRoutes.js'
import {connectDB} from './config/db.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'

dotenv.config();
const app=express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
connectDB();
app.use("/",router)
app.use("/uploads", express.static("uploads"));


const PORT=process.env.PORT;
console.log("port is:",PORT);

app.listen(PORT,()=>console.log("server started"));