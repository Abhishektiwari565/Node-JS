import express from 'express'
import router from './routes/authRoutes.js'
import {connectDB} from './config/db.js'
import dotenv from 'dotenv'
import cokkieParser from 'cookie-parser'

dotenv.config();
const app=express();
app.use(express.json());
app.use(cokkieParser());
connectDB();
app.use("/",router)

const PORT=process.env.PORT;
console.log("port is:",PORT);

app.listen(PORT,()=>console.log("server started"));