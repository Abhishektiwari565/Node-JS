import express from 'express'
import bookRoutes from './routes/bookRoutes.js'
import {connectDB} from './config/db.js'
import logger from './middleware/logger.js'



const app= express();
app.use(logger);

connectDB();

app.use("/api",bookRoutes)

app.listen(5000,()=>{
    console.log("server started")
})