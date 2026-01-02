import express from 'express'
import router from './routes/authRoutes.js';
import { connectDB } from './config/db.js';

const app=express();
app.use(express.json());
connectDB();
app.use("/",router)
const PORT=4000;

app.listen(PORT,()=>console.log("server started on port 4000"));