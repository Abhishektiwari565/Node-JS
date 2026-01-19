import express from 'express'
import {connectDB} from './config/db.js'
import cookieParsar from 'cookie-parser'
import cors from 'cors'
import router from './routes/auth_routes.js'
import dotenv from 'dotenv'

dotenv.config();
const app=express();
app.use(express.json());
app.use(cookieParsar());
app.use(cors());
connectDB();

app.use("/api/auth",router);

app.listen(process.env.PORT,()=>console.log("server started"));