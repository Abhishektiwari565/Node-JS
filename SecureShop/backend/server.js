import express from 'express'
import {connectDB} from './config/db.js'
import authRoutes from './routes/auth_routes.js'
import productRoutes from './routes/product_routes.js'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config();


const app=express();
app.use(express.json());
app.use(cors());
connectDB();
app.use("/auth",authRoutes);
app.use("/products",productRoutes)

app.listen(process.env.PORT,()=>{
    console.log("server started suucessfullly");
})