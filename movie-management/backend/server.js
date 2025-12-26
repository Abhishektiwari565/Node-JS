// import movieRouter from './routes/movieRoutes.js'
// import express from 'express'
// import  {connectDb } from './config/db.js'

// const app=express();
// app.use(express.json());

// app.use("/movie",movieRouter)

// connectDb();
// app.listen(5000,()=>{
//     console.log("server started")
// })

import express from 'express'
import movieRouter from './routes/movieRoutes.js'
import connectDb from './config/db.js'

const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use("/", movieRouter)

connectDb();

app.listen(5000, () => {
    console.log("server started on port 5000")
})
