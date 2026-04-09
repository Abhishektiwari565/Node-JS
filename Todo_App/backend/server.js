import express from 'express'
import {connectDB} from './config/db.js'
import authrouter from './routes/authRoutes.js'
import todorouter from './routes/todoRoutes.js'


const app=express()
app.use(express.json());
connectDB();
app.use("/auth",authrouter);
app.use("/todo",todorouter);

app.listen(5000,()=>{
    console.log("server started successfully");
})