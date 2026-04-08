import express from 'express'
import {connectDB} from './config/db.js'
import router from './routes/authRoutes.js'

const app=express()
app.use(express.json());
connectDB();
app.use("user/auth",router);

app.listen(5000,()=>{
    console.log("server started successfully");
})