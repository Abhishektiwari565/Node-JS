





import express from 'express'
import {connectDB} from './config/db.js'
import router from './routes/user_routes.js'

const app=express();
app.use(express.json());
connectDB();
app.use("/user",router);

app.listen(4000,()=>{
    console.log("server started successfully!!");
})



























// import express from 'express'
// import {connectDB} from './config/db.js'
// import router from './routes/user_routes.js'
// import dotenv from 'dotenv'

// dotenv.config();
// const app=express();
// app.use(express.json());
// connectDB();

// app.use("/user",router);

// app.listen(4000,()=>{
//     console.log("server started successfully!!");
// })

