import express from 'express'
import {connectDB} from './config/db.js'
import authRoutes from './routes/auth_routes.js'
import dotenv from 'dotenv'

dotenv.config();

const app=express();
app.use(express.json());
connectDB();
app.use("/auth",authRoutes);

app.listen(process.env.PORT,()=>{
    console.log("server started suucessfullly");
})